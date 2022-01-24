import {   
  getvalidLinksInArray
} from '../src/validate.js';

import fetch from 'node-fetch';

// H10: Validate is True; output: href; text; file; status; message(ok or fail)

describe('getvalidLinksInArray', () => {
  test('statusText: OK', () => {
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
      statusText: 'OK',
    }));
    return getvalidLinksInArray(recieveObject)
      .then((result) => {
        expect(result).toEqual(resultObject);
      });
  });
});

describe('getvalidLinksInArray', () => {
  test('statusText: Fail', () => {
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
      });
  });
});
