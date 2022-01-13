// chalk dependencie //
// const chalkStyle = require('chalkStyle');

// customStyleRed = chalkStyle.italic.bold.red;
// customStyleGreen = chalkStyle.italic.bold.green;
// customStyleBlue = chalkStyle.italic.bold.blue;

// customStyle = chalkStyle.bold.red;
// console.log(chalkStyle.blue('Hello World'));
// console.log(chalkStyle.bgGreen('Hello World'));
// console.log(chalkStyle.underline('Hello World'));
// console.log(chalkStyle.hex("#8BB5FF")('Hello World'));
// console.log(chalkStyle.rg(0,191,93)('Hello World'));
// console.log(chalkStyle.italic('Hello World'));
// console.log(chalkStyle.dim('Hello World'));
// console.log(customStyle('Hello World'));

// file sistem
const fs = require('fs');
const path = require('path');

// H1: know if path exist //
const isExistsPath = (content) => fs.existsSync(content); // true o false

// H3: know if path is absolute, H4:convert path in absolute and H2: message if does not exist //
const validatePathAbsolute = (content) => fs.existsSync(content) ? path.normalize(path.resolve(content)): "The path does not exist";

// H5: Know if path is a file //
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

// H7: Read file 
const readFile = (content) => fs.readFileSync(content, 'utf-8');

// H6: Get the paths from go through directory//

const getFilesFromFolder = (content) => {
  let filesInArray = [];
  // if is a directory
  if (isPathADirectory(content)) {
    // go through files in
    readADirectory(content).forEach((file) => {
      // connect path with each file
      const connectPath = path.join(content, file);
      // give absolute path 
      const resolvePath = getFilesFromFolder(path.resolve(connectPath));
      // connect all routes found in a array
      filesInArray = filesInArray.concat(resolvePath);
    });
  } else if (isExtMd(content)) {
    // if is md file, connect all in an array
    filesInArray.push(content);
  }
  return filesInArray;
};





module.exports = {
  isExistsPath,
  validatePathAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  readFile,
  getFilesFromFolder
}