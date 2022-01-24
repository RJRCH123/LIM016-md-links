
// LF to CRLF: git config --global core.autocrlf true
import   {
  isExistsPath,
  validatePathAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  readFile,
  getFilesFromFolder,
  getLinksInArray
} from './src/api.js';

import {   
  getvalidLinksInArray
} from './src/validate.js';

import {   
  totalLinks,
  uniqueLinks,
  brokenLinks
} from './src/status.js';

import chalk from 'chalk'

const styleTrue = chalk.bold.greenBright;
const styleFalse = chalk.bold.redBright;
const styleWarn = chalk.bold.yellowBright;
const styleContent = chalk.bold.cyan;
const stylePath = chalk.bold.magentaBright;

const existPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders';
const noExistPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist';
const absolutePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA';
const relativePath = 'folders\\folderA';
const folderPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB';
const mdFilePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md';
const txtFilePath= 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt';
const directoryPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';

// H1: know if path exist //
console.log('isExistsPath: ', styleTrue(isExistsPath(existPath))); // true
console.log('isExistsPath: ', styleFalse(isExistsPath(noExistPath))); // false

// H4:convert path in absolute
console.log('validatePathAbsolute: ', stylePath(validatePathAbsolute(relativePath))); // absolutePath
// H3: know if path is absolute
console.log('validatePathAbsolute: ', stylePath(validatePathAbsolute(absolutePath))); // absolutePath
// H2: message if does not exist
console.log('validatePathAbsolute: ', styleWarn(validatePathAbsolute())); // The path does not exit

// H5: Know is a file //
console.log('isPathAFile: ', styleTrue(isPathAFile(mdFilePath))); // true
console.log('isPathAFile: ', styleFalse(isPathAFile(folderPath))); // false


// H5: know if path is a directory //
console.log('isPathADirectory: ', styleTrue(isPathADirectory(folderPath))); // true
console.log('isPathADirectory: ', styleFalse(isPathADirectory(mdFilePath))); // false

// H6: Read the directory //
console.log('readADirectory: ', stylePath(readADirectory(directoryPath))); // ['filemdD.md', 'filemdE.md', 'folderD']

// H6: Validate if the extension is md //
console.log('isExtMd: ', styleTrue(isExtMd(mdFilePath))); // true
console.log('isExtMd: ', styleFalse(isExtMd(txtFilePath))); // false

// H6: Get md files from go through directory //
console.log('getFilesFromFolder: ', stylePath(getFilesFromFolder(directoryPath))); // [ 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdD.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdE.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\folderD\\filemdB.md']

// H7: Read file 
console.log('readFile: ', styleContent(readFile(mdFilePath))); // content
console.log('readFile: ', styleContent(readFile(txtFilePath))); // content

// H8: Obtain links and put in a new array
// H9: Validate False; output: href, text, file
console.log('getLinksInArray: ', getLinksInArray(directoryPath));  

// H10: Validate is True; output: href; text; file; status; message(ok or fail)
// console.log(getvalidLinksInArray(getLinksInArray(directoryPath))); 
getvalidLinksInArray(getLinksInArray(directoryPath))


// Status: total, unique, broken
// console.log('totalLinks: ', totalLinks(mdFilePath)); 
// console.log('uniqueLinks: ', uniqueLinks(mdFilePath)); 
// console.log('brokenLinks: ', brokenLinks(mdFilePath)); 
