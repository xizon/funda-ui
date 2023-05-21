const path = require('path');
const fs = require('fs');


const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

const oPath = path.resolve(__dirname, '../src/');
const targetPath = path.resolve(__dirname, '../dist/esm');
copyRecursiveSync(oPath, targetPath);
console.log('\x1b[36m%s\x1b[0m', `--> Copied "src/*" to "dist/esm/*" successfully`);
