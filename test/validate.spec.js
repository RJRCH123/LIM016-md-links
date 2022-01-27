

import {
  jest
} from '@jest/globals';

jest.mock('node-fetch', () => ({
  fetch: (content) => {
    console.log(content);
  }
}))

import {   
  getvalidLinksInArray
} from '../src/validate.js';


// H10: Validate is True; output: href; text; file; status; message(ok or fail)
// status: '200' - message: 'Ok'
describe('getvalidLinksInArray  is a function', () => {
  test("status: 200 - message: 'Ok'", () => {
    const recieveObject = [
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Publicar packpage',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
      },
    ];
    const resultObject = [
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Publicar packpage',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
        status: 200,
        message: 'Ok'
      },
    ];
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
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
      },
    ];
    const resultObject = [
      {
        href: 'https://pages.github.co/',
        text: 'Sitio oficial de GitHub Pages',
        file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
        status: 'Failed request',
        message: 'Fail'
      },
    ];
    return getvalidLinksInArray(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });
});
