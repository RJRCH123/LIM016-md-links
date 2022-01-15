const {   
  getLinksInArray,
  getvalidLinksInArray
} = require('../src/validate');

const directoryPath = 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC';
const outputDirectoryPaths = [
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
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
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  },
  {
    href: 'https://pages.github.com/',
    text: 'Sitio oficial de GitHub Pages',
    file: 'C:\\Users\\Rouss\\Desktop\\LABORATORIA\\LIM016-md-links\\folders\\folderA\\folderC'
  }
];
// H8: Obtain links and put in a new array
// H9: Validate False; output: href, text, file
describe('function to get links and put in a new array:', () => {
  it('getLinksInArray is a function', () => {
    expect(typeof getLinksInArray).toBe('function');
  });
  it('Get links and put in a new array', () => {
    expect(getLinksInArray(directoryPath)).toEqual(outputDirectoryPaths);
  });
});