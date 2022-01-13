// Se realizarán las pruebas
const {   
  isExistsPath,
  isAbsolutePath,
  convertPathInAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  getFileFromFolder
} = require('./src/api.js');

const existPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders';
const noExistPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist';
const absolutePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA';
const relativePath = 'folders\\folderA';
const folderPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB';
const mdFilePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md';
const txtFilePath= 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt';
const directoryPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';

// H1: know if path exist //
console.log(isExistsPath(existPath)); // true
console.log(isExistsPath(noExistPath)); // false

// H3: know if path is absolute //
console.log(isAbsolutePath(relativePath)); // false
console.log(isAbsolutePath(absolutePath)); // true

// H4:convert path in absolute //
console.log(convertPathInAbsolute(relativePath)); // C:\Users\Rouss\Desktop\LABORATORIA\LIM016-md-links\folders\folderA

// H5: Know is a file //
console.log(isPathAFile(folderPath)); // false
console.log(isPathAFile(mdFilePath)); // true

// H5: know if path is a directory //
console.log(isPathADirectory(folderPath)); // true
console.log(isPathADirectory(mdFilePath)); // false

// H6: Read the directory //
console.log(readADirectory(directoryPath)); // ['filemdD.md', 'filemdE.md', 'folderD']

// H6: Validate if the extension is md//
console.log(isExtMd(mdFilePath)); // true
console.log(isExtMd(txtFilePath)); // false