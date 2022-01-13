const {   
  isExistsPath,
  isAbsolutePath,
  convertPathInAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd
} = require('../src/api');

const existPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders';
const noExistPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist';
const absolutePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA';
const relativePath = 'folders\\folderA';
const folderPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB';
const mdFilePath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md';
const txtFilePath= 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt';
const directoryPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';
const readDirectoryPath = "['filemdD.md', 'filemdE.md', 'folderD']";

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

// H3: know if path is absolute //
describe('function to check if path is absolute:', () => {
  it('isAbsolutePath is a function', () => {
    expect(typeof isAbsolutePathh).toBe('function');
  });
  it('If the path absolute, return true', () => {
    expect(isAbsolutePath(absolutePath)).toBe(true);
  });
  it('If the path does not absolute, return false', () => {
    expect(isAbsolutePath(relativePath)).toBe(false);
  });
});

// H4:convert path in absolute //
describe('function to convert path in absolute:', () => {
  it('convertPathInAbsolute is a function', () => {
    expect(typeof convertPathInAbsolute).toBe('function');
  });
  it('If the path is relative, convert in absolute', () => {
    expect(convertPathInAbsolute(relativePath)).toEqual(absolutePath);
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

