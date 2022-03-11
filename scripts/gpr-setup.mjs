import { writeFileSync } from 'fs';
import { join } from 'path';
import distPackage from '../dist/package.json';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Modify package.json in dist folder
const pkg = distPackage;

pkg.publishConfig = {};
pkg.name = '@COEXCZ/geosearch';
pkg.publishConfig.registry = `https://npm.pkg.github.com`;
writeFileSync(join(__dirname, '..', 'dist', 'package.json'), JSON.stringify(pkg, null, 2));
console.log('File package.json modified:', pkg);
