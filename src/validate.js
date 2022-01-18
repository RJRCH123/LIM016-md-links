import { 
  readFile, 
  getFilesFromFolder 
} from './api.js';

// libraries
import fetch from 'node-fetch';

// H8: Obtain links and put in a new array
// H9: Validate False; output: href, text, file
export const getLinksInArray = (pathFile) => {
  const linksInArray = [];
  getFilesFromFolder(pathFile).forEach((elmnt) => {
    const regExpTotal = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regExpLinks = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regExpText = /\[([\w\s\d.()]+)\]/g;
    const links = readFile(elmnt).match(regExpTotal); // get [text](link)
    links.forEach((e) => {
      const resultLink = e.match(regExpLinks).join().slice(1, -1); // Join links and remove ()
      const resultText = e.match(regExpText).join().slice(1, -1); // Remove []
      linksInArray.push({
        href: resultLink,
        text: resultText.substring(0, 50), // max 50 characteres
        file: pathFile,
      });
    });
  });
  return linksInArray;
};

// H10: Validate is True; output: href; text; file; status; message(ok or fail)
export const getvalidLinksInArray= (arrayLinks) => {
  // console.log('arrayLinks: ', arrayLinks);
  // arrayLinks = outputDirectoryPaths;
  const newArray = arrayLinks.map((elmnt) => { // go through array objects
    const promiseFetch = fetch(elmnt.href) // get href of object
      .then((result) => ({
        href: elmnt.href,
        text: elmnt.text,
        file: elmnt.file,
        status: result.status,
        message: result.status >= 200 && result.status <= 399 ? 'Ok' : 'Fail',
      }))
      .catch(() => ({
        href: elmnt.href,
        text: elmnt.text,
        file: elmnt.file,
        status: 'Failed request',
        message: 'Fail',
      }));
      return promiseFetch; // return promise
      // console.log('arrayLinks: ', arrayLinks);
      // console.log('promiseFetch: ', promiseFetch.then((result) => console.log(result)))
      // promiseFetch.then((result) => {return result}); // return promise
      // return Promise.all(promiseFetch);
  });
  return Promise.all(newArray); // return array with result promise
  // Promise.all([...newArray]).then((result) => {return result}); // return array with result promise
};

