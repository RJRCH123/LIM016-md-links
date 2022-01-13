const {   
  isExistsPath,
  isAbsolutePath,
  convertPathInAbsolute,
  isPathAFile,
  isPathADirectory,
  readADirectory,
  isExtMd
} = require('../src/api');

// H1: know if path exist //
describe('function to check if path exists:', () => {
  it('isExistsPath is a function', () => {
    expect(typeof isExistsPath).toBe('function');
  });
  it('If the path exists, return true', () => {
    expect(isExistsPath('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders')).toBe(true);
  });
  it('If the path does not exist, return false', () => {
    expect(isExistsPath('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\foldersunexist')).toBe(false);
  });
});

// H3: know if path is absolute //
describe('function to check if path is absolute:', () => {
  it('isAbsolutePath is a function', () => {
    expect(typeof isAbsolutePathh).toBe('function');
  });
  it('If the path absolute, return true', () => {
    expect(isAbsolutePath('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA')).toBe(true);
  });
  it('If the path does not absolute, return false', () => {
    expect(isAbsolutePath('folders\\folderA')).toBe(false);
  });
});

// H4:convert path in absolute //
describe('function to convert path in absolute:', () => {
  it('convertPathInAbsolute is a function', () => {
    expect(typeof convertPathInAbsolute).toBe('function');
  });
  it('If the path is relative, convert in absolute', () => {
    expect(convertPathInAbsolute('folders\\folderA')).toBe('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA');
  });
});

// H5: Know if path is a file //
describe('function to check if path is a file:', () => {
  it('isPathAFile is a function', () => {
    expect(typeof isPathAFile).toBe('function');
  });
  it('If the path is file, return true', () => {
    expect(isPathAFile('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md')).toBe(true);
  });
  it('If the path does not file, return false', () => {
    expect(isPathAFile('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB')).toBe(false);
  });
});

// H5: know if path is a directory //
describe('function to check if path is a  directory :', () => {
  it('isPathADirectory is a function', () => {
    expect(typeof isPathADirectory).toBe('function');
  });
  it('If the path is  directory , return true', () => {
    expect(isPathADirectory('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB')).toBe(true);
  });
  it('If the path does not directory , return false', () => {
    expect(isPathADirectory('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderB\\filemdF.md')).toBe(false);
  });
});

// H6: Read the directory //
describe('function to read the directory:', () => {
  it('readADirectory is a function', () => {
    expect(typeof readADirectory).toBe('function');
  });
  it('read the directory', () => {
    expect(readADirectory('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC')).toBe("['filemdD.md', 'filemdE.md', 'folderD']");
  });
});

// H6: Validate if the extension is md//
describe('function to validate if the extension is md:', () => {
  it('isExtMd is a function', () => {
    expect(typeof isExtMd).toBe('function');
  });
  it('If the extension is md, return true', () => {
    expect(isExtMd('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filemdH.md')).toBe(true);
  });
  it('If the extension does not md, return false', () => {
    expect(isExtMd('C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\filetxt.txt')).toBe(false);
  });
});