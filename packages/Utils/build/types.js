const fs = require('fs');
const path = require('path');

function getEntries(dir) {
    let entries = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            Object.assign(entries, getEntries(fullPath));
        } else if (stat.isFile() && (path.extname(fullPath) === '.ts')) {
            entries.push(fullPath);
        }
    });

    return entries;
}


fs.rmSync(path.resolve(__dirname, '../hooks'), { recursive: true });
fs.rmSync(path.resolve(__dirname, '../plugins'), { recursive: true });
fs.rmSync(path.resolve(__dirname, '../libs'), { recursive: true });
fs.rmSync(path.resolve(__dirname, '../tsconfig.tsbuildinfo'), { recursive: true });

const allFiles = getEntries(path.resolve(__dirname, '../dist/cjs/@types/libs')).concat(getEntries(path.resolve(__dirname, '../dist/cjs/@types/hooks'))).concat(getEntries(path.resolve(__dirname, '../dist/cjs/@types/plugins')));

allFiles.forEach(function (file) {
    const name = file.split('/').pop();
    const typesFilePath = file;
    const typesTargetPath = path.resolve(__dirname, '../dist/cjs/' + name);
    if (fs.existsSync(typesFilePath)) {
        fs.copyFileSync(typesFilePath, typesTargetPath);
        fs.rmSync(file, { recursive: true });
        console.log('\x1b[36m%s\x1b[0m', `--> Deleted "${file}" successfully`);
        console.log('\x1b[36m%s\x1b[0m', `--> Copied "dist/cjs/${name}" successfully`);
    }

});

fs.rmSync(path.resolve(__dirname, '../dist/cjs/@types'), { recursive: true });
console.log('\x1b[36m%s\x1b[0m', `--> Deleted "dist/cjs/@types" successfully`);
