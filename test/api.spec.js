import {   
  isExistsPath,
  validatePathAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  readFile,
  getFilesFromFolder,
  getLinksInArray
} from '../src/api.js';

const existPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders';
const noExistPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist';
const absolutePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA';
const relativePath = 'folders\\folderA';
const folderPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB';
const mdFilePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md';
const txtFilePath= 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt';
const directoryPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';
const readDirectoryPath = ['filemdD.md', 'filemdE.md', 'folderD'];
const contentDirectoryPaths = [ 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdD.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\filemdE.md','C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC\\folderD\\filemdB.md'];
const outputDirectoryPaths = [
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://github.co/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://docs.npmjs.co/getting-started/what-is-npm',
    text: 'NPM',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://nodejs.org/api/fs.htm#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://nodejs.org/api/path.htm',
    text: 'Path',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://medium.co/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://pages.github.co/',
    text: 'Sitio oficial de GitHub Pages',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  }
];

// H1: know if path exist //
describe('function to check if path exists:', () => {
  it('isExistsPath is a function', () => {
    expect(typeof isExistsPath).toBe('function');
  });
  it('If the path exists, return true', () => {
    expect(isExistsPath(existPath)).toBe(true);
  });
  it('If the path does not exist, return false', () => {
    expect(isExistsPath(noExistPath)).toBe(false);
  });
});

// H3: know if path is absolute, H4:convert path in absolute and H2: message if does not exist //
describe('function to check and convert in absolute if path is relative:', () => {
  it('validatePathAbsolute is a function', () => {
    expect(typeof validatePathAbsolute).toBe('function');
  });
  it('If the path is relative, return absolute path', () => {
    expect(validatePathAbsolute(relativePath)).toEqual(absolutePath);
  });
  it('If the field is empty, return message', () => {
    expect(validatePathAbsolute()).toEqual('The path does not exist');
  });
});

// H5: Know if path is a file //
describe('function to check if path is a file:', () => {
  it('isPathAFile is a function', () => {
    expect(typeof isPathAFile).toBe('function');
  });
  it('If the path is file, return true', () => {
    expect(isPathAFile(mdFilePath)).toBe(true);
  });
  it('If the path does not file, return false', () => {
    expect(isPathAFile(folderPath)).toBe(false);
  });
});

// H5: know if path is a directory //
describe('function to check if path is a  directory :', () => {
  it('isPathADirectory is a function', () => {
    expect(typeof isPathADirectory).toBe('function');
  });
  it('If the path is  directory , return true', () => {
    expect(isPathADirectory(folderPath)).toBe(true);
  });
  it('If the path does not directory , return false', () => {
    expect(isPathADirectory(mdFilePath)).toBe(false);
  });
});

// H6: Read the directory //
describe('function to read the directory:', () => {
  it('readADirectory is a function', () => {
    expect(typeof readADirectory).toBe('function');
  });
  it('read the directory', () => {
    expect(readADirectory(directoryPath)).toEqual(readDirectoryPath);
  });
});

// H6: Validate if the extension is md//
describe('function to validate if the extension is md:', () => {
  it('isExtMd is a function', () => {
    expect(typeof isExtMd).toBe('function');
  });
  it('If the extension is md, return true', () => {
    expect(isExtMd(mdFilePath)).toBe(true);
  });
  it('If the extension does not md, return false', () => {
    expect(isExtMd(txtFilePath)).toBe(false);
  });
});

// H7: Read file 
describe('function to read file:', () => {
  it('readFile is a function', () => {
    expect(typeof readFile).toBe('function');
  });
  it('read file', () => {
    expect(readFile(txtFilePath)).toEqual('text');
  });
});

// H6: Get the paths from go through directory //
describe('function to get content paths in directory:', () => {
  it('getFilesFromFolder is a function', () => {
    expect(typeof getFilesFromFolder).toBe('function');
  });
  it('Get the paths from go through directory', () => {
    expect(getFilesFromFolder(directoryPath)).toEqual(contentDirectoryPaths);
  });
});

// H8: Obtain links and put in a new array
// H9: Validate False; output: href, text, file
describe('function to get links and put in a new array with output: href; text; file:', () => {
  it('getLinksInArray is a function', () => {
    expect(typeof getLinksInArray).toBe('function');
  });
  it('Get links and put in a new array', () => {
    expect(getLinksInArray(directoryPath)).toEqual(outputDirectoryPaths);
  });
});

