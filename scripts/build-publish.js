const path = require('path');
const fs = require('fs');
const configPath = path.resolve(__dirname, '../package.json');
const json = JSON.parse(fs.readFileSync(configPath));

const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};


// copy `lib/` to `publish/` directory
// ----------------------------------
const pubPath = path.resolve(__dirname, `../publish`);
if (!fs.existsSync(pubPath)){
    fs.mkdirSync(pubPath, { recursive: true });
}

if (fs.existsSync(pubPath)){
    copyRecursiveSync(path.resolve(__dirname, `../lib`), path.resolve(__dirname, `../publish/lib`));
    copyRecursiveSync(path.resolve(__dirname, `../lib/cjs`), pubPath);
    copyRecursiveSync(path.resolve(__dirname, `../lib/css`), pubPath);
    fs.renameSync(path.resolve(__dirname, `../publish/index.js`), path.resolve(__dirname, `../publish/all.js`));
    fs.renameSync(path.resolve(__dirname, `../publish/index.d.ts`), path.resolve(__dirname, `../publish/all.d.ts`));

    // new readme
    fs.copyFileSync(path.resolve(__dirname, `../README_PUBLISH.md`), path.resolve(__dirname, `../publish/README.md`));

    // new package.json
    delete json.workspaces;
    delete json.devDependencies;
    json.dependencies = {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    };

    json.main = "all.js";
    json.types = "all.d.ts";
    json.scripts = {
        "test": "echo \"Error: no test specified\" && exit 1"
    };
    json.publishConfig = {
        "directory": "lib"
    };

    fs.writeFileSync(path.resolve(__dirname, `../publish/package.json`), JSON.stringify(json));
    console.log('\x1b[36m%s\x1b[0m', `--> The "publish/" directory is ready!`);

}



// copy `LICENSE` to `publish/` directory
// ----------------------------------
const licensePath = path.resolve(__dirname, `../LICENSE`);
if (fs.existsSync(licensePath)){
    fs.copyFileSync(licensePath, path.resolve(__dirname, `../publish/LICENSE`));
    console.log('\x1b[36m%s\x1b[0m', `--> The "publish/LICENSE" is ready!`);
}


