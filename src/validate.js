import fetch from 'node-fetch';

// H10: Validate is True; output: href; text; file; status; message(ok or fail)
export const getvalidLinksInArray= (arrayLinks) => {
  // console.log('arrayLinks: ', arrayLinks);
  // arrayLinks = outputDirectoryPaths;
  return Promise.all ( arrayLinks.map((elmnt) => { // go through array objects
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
  })).then(result => result);
};

