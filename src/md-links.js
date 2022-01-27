import   {
  getLinksInArray,
  convertToAbsolute,
  isExistsPath
} from './api.js';

import {   
  getvalidLinksInArray
} from './validate.js';

import chalk from '../__mocks__/chalk.js';

const styleBroken = chalk.bold.red;

export const mdLinksFunction = (track, options = { validate: true }) => new Promise((resolve) => {
  // convert path in absolute
  const path = convertToAbsolute(track);
  // if path does not exits
  if (isExistsPath(path) === false) {
  // H2: message if does not exist
  styleBroken('Path does not exist')
    // if options validate is true
  } else if (options.validate) {
    const validate = getvalidLinksInArray(getLinksInArray(path));
    resolve(validate);
    // if options validate is false
  } else {
    resolve(getLinksInArray(path));
  }
});