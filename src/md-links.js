import   {
  validatePathAbsolute,
  getLinksInArray
} from './api.js';

import {   
  getvalidLinksInArray
} from './validate.js';

export const mdLinksFunction = (track, options = { validate: true }) => new Promise((resolve) => {
  // convertir ruta en absoluta
  const path = validatePathAbsolute(track);
    // si options validate es true
  if (options.validate) {
    const validate = getvalidLinksInArray(getLinksInArray(path));
    resolve(validate);
    // si options validate es false
  } else {
    resolve(getLinksInArray(path));
  }
});
