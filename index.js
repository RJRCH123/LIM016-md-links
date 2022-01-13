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

// H1: know if path exist //
console.log(isExistsPath('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders')); // true
console.log(isExistsPath('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist')); // false

// H3: know if path is absolute //
console.log(isAbsolutePath('folders\\folderA')); // false
console.log(isAbsolutePath('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA')); // true

// H4:convert path in absolute //
console.log(convertPathInAbsolute('folders\\folderA')); // C:\Users\Rouss\Desktop\LABORATORIA\LIM016-md-links\folders\folderA

// H5: Know is a file //
console.log(isPathAFile('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB')); // false
console.log(isPathAFile('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md')); // true

// H5: know if path is a directory //
console.log(isPathADirectory('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB')); // true
console.log(isPathADirectory('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md')); // false

// H6: Read the directory //
console.log(readADirectory('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC')); // ['filemdD.md', 'filemdE.md', 'folderD']

// H6: Validate if the extension is md//
console.log(isExtMd('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filemdH.md')); // true
console.log(isExtMd('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt')); // false