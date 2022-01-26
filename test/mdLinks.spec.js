

import {mdLinksFunction} from '../src/md-links.js';

const path = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';

const validateFalse = [
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
  },
  {
    href: 'https://nodejs.org/api/path.htm',
    text: 'Path',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
  },
  {
    href: 'https://pages.github.co/',
    text: 'Sitio oficial de GitHub Pages',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
  },
];

const validateTrue = [
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 200,
    message: 'Ok',
  },
  {
    href: 'https://nodejs.org/api/path.htm',
    text: 'Path',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 404,
    message: 'Fail',
  },
  {
    href: 'https://pages.github.co/',
    text: 'Sitio oficial de GitHub Pages',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 'Failed request',
    message: 'Fail',
  },
];

describe('mdLinksFunction', () => {
  it('mdLinksFunction is a function ', () => {
    expect(typeof mdLinksFunction).toBe('function');
  });
  it('validate false / output: href; text; file', () => {
    expect(mdLinksFunction(path, { validate: false })).resolves.toEqual(validateFalse);
  });
  it('validate true / output: href; text; file, status, message Ok', () => {
    expect(mdLinksFunction(path, { validate: true })).resolves.toEqual(validateTrue);
  });
});