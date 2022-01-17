import path from "path";
import fs from 'fs';

// H1: know if path exist //
export const isExistsPath = (content) => fs.existsSync(content); // true o false

// H3: know if path is absolute, H4:convert path in absolute and H2: message if does not exist //
export const validatePathAbsolute = (content) => fs.existsSync(content) ? path.normalize(path.resolve(content)): "The path does not exist";

// H5: Know if path is a file //
export const isPathAFile = (content) => fs.statSync(content).isFile(); // true o false

// H5: know if path is a directory //
export const isPathADirectory = (content) => fs.statSync(content).isDirectory(); // true o false

// H6: Read the directory //
export const readADirectory = (content) => fs.readdirSync(content);

// H6: Validate the extension //
export const isExtMd = (content) => path.extname(content) === '.md'; // true o false

// H7: Read file 
export const readFile = (content) => fs.readFileSync(content, 'utf8');

// H6: Get md files in array from go through directory //

export const getFilesFromFolder = (content) => {
  let filesInArray = [];
  if (isPathADirectory(content)) { // if is a directory
    readADirectory(content).forEach((file) => { // go through files in
      const connectPath = path.join(content, file); // connect path with each file
      const resolvePath = getFilesFromFolder(path.resolve(connectPath)); // give absolute path 
      filesInArray = filesInArray.concat(resolvePath); // connect all routes found in a array
    }); 
  } else if (isExtMd(content)) { // if is md file, connect all in an array
    filesInArray.push(content);
  }
  return filesInArray;
};

