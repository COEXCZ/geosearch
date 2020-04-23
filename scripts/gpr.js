const fs = require('fs');
const { join } = require('path');

const pkgDistPath = '../dist/package.json';

const pkg = require(pkgDistPath);

pkg.publishConfig = {};
pkg.publishConfig.registry = `https://npm.pkg.github.com/@COEXCZ`;

fs.writeFileSync(join(__dirname, pkgDistPath), JSON.stringify(pkg, null, 2));
console.log(pkg);
