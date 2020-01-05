const fs = require('fs');
const { join } = require('path');

const pkg = require('../package.json');

pkg.name = `@bartholomej/${pkg.name}`;

fs.writeFileSync(join(__dirname, '../package.json'), JSON.stringify(pkg, null, 2));
console.log(pkg);
