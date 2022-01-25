import {   
  getvalidLinksInArray
} from '../src/validate.js';

import fetch from 'node-fetch';
jest.mock('fetch');

// H10: Validate is True; output: href; text; file; status; message(ok or fail)
// status: '200' - message: 'Ok'
describe('getvalidLinksInArray  is a function', () => {
  test("status: 200 - message: 'Ok'", () => {
    const recieveObject = [
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Publicar packpage',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
      },
    ];
    const resultObject = [
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Publicar packpage',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
        status: 200,
        message: 'Ok',
      },
    ];
    fetch.mockImplementation(() => Promise.resolve({
      status: 200,
      message: 'Ok',
    }));
    return getvalidLinksInArray(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });
});

// status: '404' - message: 'Fail'
describe('getvalidLinksInArray is a function', () => {
  test("status: 404 - message: 'Fail'", () => {
    const recieveObject = [
      {
        href: 'https://nodejs.org/api/path.htm',
        text: 'Path',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
      },
    ];
    const resultObject = [
      {
        href: 'https://nodejs.org/api/path.htm',
        text: 'Path',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
        status: 404,
        message: 'Fail',
      },
    ];
    fetch.mockImplementation(() => Promise.resolve({
      status: 404,
      message: 'Fail',
    }));
    return getvalidLinksInArray(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });
});

// status: 'Failed request' - message: 'Fail'
describe('getvalidLinksInArray  is a function', () => {
  test("status: 'Failed request' - message: 'Fail'", () => {
    const recieveObject = [
      {
        href: 'https://pages.github.co/',
        text: 'Sitio oficial de GitHub Pages',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
      },
    ];
    const resultObject = [
      {
        href: 'https://pages.github.co/',
        text: 'Sitio oficial de GitHub Pages',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
        status: 'Failed request',
        message: 'Fail',
      },
    ];
    fetch.mockImplementation(() => Promise.reject(new Error({
      status: 'Failed request',
      message: 'Fail',
    })));
    return getvalidLinksInArray(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });
});
