import chalk from '../__mocks__/chalk.js';
import {totalLinks, uniqueLinks, brokenLinks} from '../src/status.js';


const styleBroken = chalk.bold.red;
const styleTotal = chalk.bold.cyan;
const styleUnique = chalk.bold.magentaBright;

const status = [
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 200,
    message: 'Ok'
  },
  {
    href: 'https://github.co/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 200,
    message: 'Ok'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 200,
    message: 'Ok'
  },
  {
    href: 'https://docs.npmjs.co/getting-started/what-is-npm',
    text: 'NPM',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 'Failed request',
    message: 'Fail'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 200,
    message: 'Ok'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 200,
    message: 'Ok'
  },
  {
    href: 'https://nodejs.org/api/fs.htm#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 404,
    message: 'Fail'
  },
  {
    href: 'https://nodejs.org/api/path.htm',
    text: 'Path',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 404,
    message: 'Fail'
  },
  {
    href: 'https://medium.co/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 'Failed request',
    message: 'Fail'
  },
  {
    href: 'https://pages.github.co/',
    text: 'Sitio oficial de GitHub Pages',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC',
    status: 'Failed request',
    message: 'Fail'
  }
];

describe('Output: Total links', () => {
  it('totalLinks is a function', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('Output: Total links', () => {
    const total = styleTotal('Total: 10');
    const content = `${total}`;
    // console.log('status: ', status);
    // console.log('total: ', total);
    // console.log('content: ', content);
    // console.log('totalLinks(status): ', totalLinks(status));
    expect(totalLinks(status)).toBe(content);
  });
});

describe('Output: Unique links', () => {
  it('uniqueLinks is a function', () => {
    expect(typeof uniqueLinks).toBe('function');
  });
  it('Output: Unique links', () => {
    const unique = styleUnique('Unique: 10');
    const content = `${unique}`;
    // console.log('status: ', status);
    // console.log('unique: ', unique);
    // console.log('content: ', content);
    // console.log('uniqueLinks(status): ', uniqueLinks(status));
    expect(uniqueLinks(status)).toBe(content);
  });
});

describe('Output: Broken links', () => {
  it('brokenLinks is a function', () => {
    expect(typeof brokenLinks).toBe('function');
  });
  it('Output: Broken links', () => {
    const broken = styleBroken('Broken: 0');
    const content = `${broken}`;
    // console.log('status: ', status);
    // console.log('broken: ', broken);
    // console.log('content: ', content);
    // console.log('brokenLinks(status): ', brokenLinks(status));
    expect(brokenLinks(status)).toBe(content);
  });
});
