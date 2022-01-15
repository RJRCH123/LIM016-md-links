
// LF to CRLF: git config --global core.autocrlf true
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
const {   
  isExistsPath,
  validatePathAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  readFile,
  getFilesFromFolder,
} = require('./src/api');

const {   
  getLinksInArray,
  getvalidLinksInArray
} = require('./src/validate');

const existPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders';
const noExistPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist';
const absolutePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA';
const relativePath = 'folders\\folderA';
const folderPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB';
const mdFilePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md';
const txtFilePath= 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt';
const directoryPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';

// H1: know if path exist //
console.log('isExistsPath: ', isExistsPath(existPath)); // true
console.log('isExistsPath: ', isExistsPath(noExistPath)); // false

// H4:convert path in absolute
console.log('validatePathAbsolute: ', validatePathAbsolute(relativePath)); // absolutePath
// H3: know if path is absolute
console.log('validatePathAbsolute: ', validatePathAbsolute(absolutePath)); // absolutePath
// H2: message if does not exist
console.log('validatePathAbsolute: ', validatePathAbsolute()); // The path does not exit

// H5: Know is a file //
console.log('isPathAFile: ', isPathAFile(folderPath)); // false
console.log('isPathAFile: ', isPathAFile(mdFilePath)); // true

// H5: know if path is a directory //
console.log('isPathADirectory: ', isPathADirectory(folderPath)); // true
console.log('isPathADirectory: ', isPathADirectory(mdFilePath)); // false

// H6: Read the directory //
console.log('readADirectory: ', readADirectory(directoryPath)); // ['filemdD.md', 'filemdE.md', 'folderD']

// H6: Validate if the extension is md //
console.log('isExtMd: ', isExtMd(mdFilePath)); // true
console.log('isExtMd: ', isExtMd(txtFilePath)); // false

// H6: Get md files from go through directory //
console.log('getFilesFromFolder: ', getFilesFromFolder(directoryPath)); // [ 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdD.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdE.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\folderD\\filemdB.md']

// H7: Read file 
console.log('readFile: ', readFile(mdFilePath)); // content
console.log('readFile: ', readFile(txtFilePath)); // content

// H8: Obtain links and put in a new array
// H9: Validate False; output: href, text, file
console.log('getLinksInArray: ', getLinksInArray(directoryPath)); 

// H10: Validate is True; output: href; text; file; status; message(ok or fail)
console.log('getvalidLinksInArrayy: ',  getvalidLinksInArray(directoryPath)); 

