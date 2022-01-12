// chalk dependencie //
const chalkStyle = require('chalkStyle');

customStyle = chalkStyle.bold.red;
console.log(chalkStyle.blue('Hello World'));
console.log(chalkStyle.bgGreen('Hello World'));
console.log(chalkStyle.underline('Hello World'));
console.log(chalkStyle.hex("#8BB5FF")('Hello World'));
console.log(chalkStyle.rg(0,191,93)('Hello World'));
console.log(chalkStyle.italic('Hello World'));
console.log(chalkStyle.dim('Hello World'));
console.log(customStyle('Hello World'));

// file sistem
const fs = require('fs');
const path = require('path');

// H1: know if path exist //
const isExistsPath = (content) => fs.existsSync(content); // true o false

// H3: know if path is absolute //
const isAbsolutePath = (content) => path.isAbsolute(content); // true o false

// H4:convert path in absolute //
const convertPathInAbsolute = (content) => path.resolve(content);

// H5: Know is a file //
const isPathAFile = (content) => fs.statSync(content).isFile();

// H5: know if path is a directory //
const isPathADirectory = (content) => fs.statSync(content).isDirectory();

// H6: Read the directory //
const readADirectory = (content) => fs.readdirSync(content);

// H6: Validate the extension //
  const isExtMd = (content) => {
    const ext = path.extname(content);
    // if is md file | true or false
    if (ext === '.md') {
      return true;
    }
    return false;
  };

module.exports = {
  isExistsPath,
  isAbsolutePath,
  convertPathInAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd
}