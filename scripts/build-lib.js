const path = require('path');
const fs = require('fs');
const glob = require('glob');
const packagesPath = path.resolve(__dirname, '../packages/');
const configPath = path.resolve(__dirname, '../package.json');
const json = JSON.parse(fs.readFileSync(configPath));


// create lib directory
// ----------------------------------
const libEsmPath = path.resolve(__dirname, '../lib/esm');
const libCjsPath = path.resolve(__dirname, '../lib/cjs');
if (!fs.existsSync(libEsmPath)){
    fs.mkdirSync(libEsmPath, { recursive: true });
}
if (!fs.existsSync(libCjsPath)){
    fs.mkdirSync(libCjsPath, { recursive: true });
}

// iterates over all components
// ----------------------------------
let componentsList = fs.readdirSync( packagesPath );
componentsList = componentsList.filter(function (component) {
    return component !== '.DS_Store';
});


// write an entry file
// ----------------------------------
const esmEntryPath = path.resolve(__dirname, '../lib/esm/index.js');
let esmEntryFileContent = '';
componentsList.forEach( function(component) {
    esmEntryFileContent += `export { default as ${component} } from './${component}';` + "\n";
});
fs.writeFileSync(esmEntryPath, esmEntryFileContent);
console.log('\x1b[36m%s\x1b[0m', `--> Created "lib/esm/index.js" successfully`);

//
const cjsEntryPath = path.resolve(__dirname, '../lib/cjs/index.js');
let cjsEntryFileContent = `
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
`;
componentsList.forEach( function(component) {
    cjsEntryFileContent += `exports.${component} = _interopRequireDefault(require("./${component}")).default;` + "\n";
});
fs.writeFileSync(cjsEntryPath, cjsEntryFileContent);
console.log('\x1b[36m%s\x1b[0m', `--> Created "lib/cjs/index.js" successfully`);



// move all components to `lib/`
// ----------------------------------
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

const moveComponents = (type) => {

    componentsList.forEach( function(component) {
        fs.mkdirSync(path.resolve(__dirname, `../lib/${type}/${component}`), { recursive: true });
        const oPath = path.resolve(__dirname, `../packages/${component}/dist/${type}`);
        const targetPath = path.resolve(__dirname, `../lib/${type}/${component}`);
        copyRecursiveSync(oPath, targetPath);
        console.log('\x1b[36m%s\x1b[0m', `--> Copied "packages/${component}/dist/${type}/*" to "lib/${type}/${component}/*" successfully`);
    });
};

moveComponents('esm');
moveComponents('cjs');



// copy `lib/` to `publish/` directory
// ----------------------------------
const pubPath = path.resolve(__dirname, `../publish`);
if (!fs.existsSync(pubPath)){
    fs.mkdirSync(pubPath, { recursive: true });
}

if (fs.existsSync(pubPath)){
    copyRecursiveSync(path.resolve(__dirname, `../lib`), path.resolve(__dirname, `../publish/lib`));
    copyRecursiveSync(path.resolve(__dirname, `../lib/cjs`), pubPath);
    fs.renameSync(path.resolve(__dirname, `../publish/index.js`), path.resolve(__dirname, `../publish/all.js`));


    // new readme
    fs.copyFileSync(path.resolve(__dirname, `../README_PUBLISH.md`), path.resolve(__dirname, `../publish/README.md`));

    // new package.json
    delete json.workspaces;
    delete json.devDependencies;
    json.dependencies = {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    };

    json.main = "lib/cjs/index.js";
    json.module = "lib/esm/index.js";
    json.scripts = {
        "test": "echo \"Error: no test specified\" && exit 1"
    };
    json.publishConfig = {
        "directory": "lib"
    };

    fs.writeFileSync(path.resolve(__dirname, `../publish/package.json`), JSON.stringify(json));
    console.log('\x1b[36m%s\x1b[0m', `--> The "publish/" directory is ready!`);

}


