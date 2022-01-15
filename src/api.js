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
const isPathAFile = (content) => fs.statSync(content).isFile(); // true o false

// H5: know if path is a directory //
const isPathADirectory = (content) => fs.statSync(content).isDirectory(); // true o false

// H6: Read the directory //
const readADirectory = (content) => fs.readdirSync(content);

// H6: Validate the extension //
const isExtMd = (content) => path.extname(content) === '.md'; // true o false

// H7: Read file 
const readFile = (content) => fs.readFileSync(content, 'utf8');

// H6: Get md files in array from go through directory //

const getFilesFromFolder = (content) => {
  let filesInArray = [];
  if (isPathADirectory(content)) { // if is a directory
    readADirectory(content).forEach((file) => { // go through files in
      const connectPath = path.join(content, file); // connect path with each file
      const resolvePath = getFilesFromFolder(path.resolve(connectPath)); // give absolute path 
      filesInArray = filesInArray.concat(resolvePath); // connect all routes found in a array
    }); 
  } else if (isExtMd(content)) { // if is md file, connect all in an array
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
  getFilesFromFolder,
}