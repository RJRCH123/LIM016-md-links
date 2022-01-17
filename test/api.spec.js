import {   
  isExistsPath,
  validatePathAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd,
  readFile,
  getFilesFromFolder
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