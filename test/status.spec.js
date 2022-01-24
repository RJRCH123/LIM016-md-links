import {totalLinks, uniqueLinks, brokenLinks} from '../src/status';
import chalk from 'chalk';

const styleBroken = chalk.bold.red;
const styleTotal = chalk.bold.cyan;
const styleUnique = chalk.bold.magentaBright;

const status = [
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

describe('Output: Total links', () => {
  it('totalLinks is a function', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('Output: Total links', () => {
    const total = styleTotal('Total: 3');
    const content = `${total}`;
    expect(totalLinks(stats)).toBe(content);
  });
});

describe('Output: Unique links', () => {
  it('uniqueLinks is a function', () => {
    expect(typeof uniqueLinks).toBe('function');
  });
  it('Output: Unique links', () => {
    const unique = styleUnique('Unique: 3');
    const content = `${unique}`;
    expect(uniqueLinks(status)).toBe(content);
  });
});

describe('Output: Broken links', () => {
  it('brokenLinks is a function', () => {
    expect(typeof brokenLinks).toBe('function');
  });
  it('Output: Broken links', () => {
    const broken = styleBroken('Broken: 0');
    const content = broken;
    expect(brokenLinks(status)).toBe(content);
  });
});
