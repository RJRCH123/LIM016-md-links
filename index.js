// Se realizarán las pruebas
const {   
  isExistsPath,
  validatePathAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  readFile,
  getFilesFromFolder
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
console.log('isExistsPath: ', isExistsPath(existPath)); // true
console.log('isExistsPath: ', isExistsPath(noExistPath)); // false

// H3: know if path is absolute, H4:convert path in absolute and H2: message if does not exist//
console.log('validatePathAbsolute: ', validatePathAbsolute(relativePath)); // C:\Users\Rouss\Desktop\LABORATORIA\LIM016-md-links\folders\folderA
console.log('validatePathAbsolute: ', validatePathAbsolute(absolutePath)); // C:\Users\Rouss\Desktop\LABORATORIA\LIM016-md-links\folders\folderA
console.log('validatePathAbsolute: ', validatePathAbsolute()); // The path does not exit

// H5: Know is a file //
console.log('isPathAFile: ', isPathAFile(folderPath)); // false
console.log('isPathAFile: ', isPathAFile(mdFilePath)); // true

// H5: know if path is a directory //
console.log('isPathADirectory: ', isPathADirectory(folderPath)); // true
console.log('isPathADirectory: ', isPathADirectory(mdFilePath)); // false

// H6: Read the directory //
console.log('readADirectory: ', readADirectory(directoryPath)); // ['filemdD.md', 'filemdE.md', 'folderD']

// H6: Validate if the extension is md//
console.log('isExtMd: ', isExtMd(mdFilePath)); // true
console.log('isExtMd: ', isExtMd(txtFilePath)); // false

// H6: Go through directory //
console.log('getFilesFromFolder: ', getFilesFromFolder(directoryPath)); // [ 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdD.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdE.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\folderD\\filemdB.md']

// H7: Read file 
console.log('mdFilePath:', readFile(mdFilePath)); // content
console.log('txtFilePath:', readFile(txtFilePath)); // content