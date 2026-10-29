const fs = require('fs');
const path = require('path');

// 1. Blacklist Directories & Files (Binary / Generated)
const IGNORED_DIRS = new Set(['node_modules', '.next', '.git', 'dist', 'build', '.turbo']);
const IGNORED_FILES = new Set(['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml']);
const BINARY_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.woff', '.woff2', '.ttf', '.eot']);

// 2. Comprehensive PII, Internal Infra & Secret Patterns
const BANNED_PATTERNS = [
  { name: 'Internal Account / Personal Name', regex: /\b(jardigur|jardi|fajar|ardi|mydota|asawawuc)\b/i },
  { name: 'Internal Domain / Bengkel Brand / Firestore Project', regex: /(frdr|frdrgarage|kasir-bengkel-[a-z0-9]+)/i },
  { name: 'Production Backend IP', regex: /116\.212\.\d{1,3}\.\d{1,3}/ },
  { name: 'Non-Example Email', regex: /[a-zA-Z0-9._%+-]+@(?!example\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
  { name: 'GitHub PAT Secret', regex: /ghp_[a-zA-Z0-9]{36}/ },
  { name: 'Google API / Service Key', regex: /AIza[0-9A-Za-z-_]{35}/ },
  { name: 'Generic High-Entropy Secret Assignment', regex: /(apiKey|secret|private_key|token)\s*[:=]\s*["'][a-zA-Z0-9_\-]{20,}["']/i },
];

function scanFile(filePath) {
  let hasViolation = false;
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);

  if (IGNORED_FILES.has(fileName) || BINARY_EXTENSIONS.has(ext)) {
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  for (const rule of BANNED_PATTERNS) {
    if (rule.regex.test(content)) {
      console.error(`\x1b[31m[CRITICAL LEAK] [${rule.name}] triggered in -> ${filePath}\x1b[0m`);
      hasViolation = true;
    }
  }
  return hasViolation;
}

function traverseAndScan(currentPath) {
  let failureDetected = false;
  const entries = fs.readdirSync(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        if (traverseAndScan(fullPath)) failureDetected = true;
      }
    } else if (entry.isFile()) {
      if (scanFile(fullPath)) failureDetected = true;
    }
  }
  return failureDetected;
}

console.log('\x1b[36m[AUDIT] Starting Deep PII & Secret Scan across repository...\x1b[0m');
const targetDir = path.resolve(__dirname, '../src');
const failed = traverseAndScan(targetDir);

if (failed) {
  console.error('\n\x1b[41m\x1b[37m[BUILD ABORTED] Security guard triggered! Fix leaks above before bundling.\x1b[0m\n');
  process.exit(1);
} else {
  console.log('\n\x1b[42m\x1b[30m[AUDIT PASSED] 100% Kedap, Zero PII, Secret Sanitized! Safe for production build.\x1b[0m\n');
  process.exit(0);
}
