const path = require('path');
const fs = require('fs');
const glob = require('glob');
const packagesPath = path.resolve(__dirname, '../packages/');


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
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
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


