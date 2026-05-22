import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const theoriesDir = path.resolve('src/content/theories');
const files = fs.readdirSync(theoriesDir).filter((file) => file.endsWith('.md'));

const requiredFields = [
  'id',
  'name',
  'status',
  'summary',
  'confidence_score',
  'review_status'
];

let failed = false;

for (const file of files) {
  const fullPath = path.join(theoriesDir, file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data } = matter(raw);

  console.log(`Checking ${file}`);

  for (const field of requiredFields) {
    if (!(field in data)) {
      console.error(`Missing required field '${field}' in ${file}`);
      failed = true;
    }
  }

  if (typeof data.confidence_score !== 'number') {
    console.error(`confidence_score must be numeric in ${file}`);
    failed = true;
  }

  if (data.confidence_score < 0 || data.confidence_score > 1) {
    console.error(`confidence_score must be between 0 and 1 in ${file}`);
    failed = true;
  }

  if (!Array.isArray(data.references) || data.references.length === 0) {
    console.error(`Theory ${file} should include authoritative references`);
    failed = true;
  }

  if (!data.testability) {
    console.error(`Theory ${file} should include a testability statement`);
    failed = true;
  }
}

if (failed) {
  console.error('\nTheory validation failed.');
  process.exit(1);
}

console.log('\nAll theories passed validation.');
