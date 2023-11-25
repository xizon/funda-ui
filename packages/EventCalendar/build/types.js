const fs = require('fs');
const path = require('path');

const typesFilePath = path.resolve(__dirname, '../@types/index.d.ts');
const typesTargetPath = path.resolve(__dirname, '../dist/cjs/index.d.ts');
if (fs.existsSync(typesFilePath)) {
    fs.copyFileSync(typesFilePath, typesTargetPath);
    fs.rmSync(path.resolve(__dirname, '../@types'), { recursive: true });
    console.log('\x1b[36m%s\x1b[0m', `--> Deleted "@types" successfully`);
    console.log('\x1b[36m%s\x1b[0m', `--> Copied "dist/cjs/index.d.ts" successfully`);
}