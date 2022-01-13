#!/usr/bin/env node
const chalkStyle = require('chalk');
const customStyle = chalkStyle.italic;
const {   
  totalLinks,
  uniqueLinks,
  brokenLinks 
} = require('./options.js');

const mdLinksFunction = require('./md-links.js');

// For use arguments
const [, , ...argument] = process.argv;


// functions for content of comands

// Si se encuentra un path //

if (argument.length === 1) {
  mdLinksFunction(argument[0], { validate: false })
  .then(resolve => {
    resolve.map((object) => {
    console.log(customStyle.blue(`${object.file} | ${object.text} | ${object.href}`));
    })
  })
  .catch(reject => console.log(reject));
}

// Si se encuentra un path y una option //

if (argument.length === 2) {
  switch (argument[1]) {
  case '--validate':
    mdLinks(argument[0], { validate: true })
    .then(resolve => {
      resolve.map((object) => {
      console.log(customStyle.blue(`
      ${object.file} | ${object.text} |
      ${object.href} | ${object.statusText} | ${object.message}`));
      })
    })
    .catch(reject => console.log(customStyle.red(reject)));
    break;

  case '--stats':
    mdLinks(argument[0], { validate: true })
      .then(resolve => console.log(`${totalLinks(resolve)} \nUnique: ${uniqueLinks(resolve)}`))
      .catch(reject => console.log(reject));
    break;

  case '--help':
    console.log(customStyle.yellow(`
    +____________________+_________________________________________________________+
    |      Comands       |                         Output                          |
    +____________________+_________________________________________________________+
    | md path            | Print href, text and file.                              |
    +____________________+_________________________________________________________+
    | --stats            | Print total and unique links .                          |
    +____________________+_________________________________________________________+
    | --validate         | Print href, text, file, message(ok or fail) and status. |
    +____________________+_________________________________________________________+
    | --validate --stats | Print total, unique and broken links.                   |
    +____________________+_________________________________________________________+
    | --stats --validate | Print total, unique and broken links.                   |
    +____________________+_________________________________________________________+
    | --help             | Print comands list.                                     |
    +____________________+_________________________________________________________+
    `))
    break;

  default: console.log(customStyle.red('Invalid comand. If you need help, please type --help'));
    break;
  }
}

// Si se encuentra un path y dos options //

if (argument.length === 3) {
  if (
    (argument[1] === "--stats" && argument[2] === "--validate") ||
    (argument[1] === "--validate" && argument[2] === "--stats")
  ) {
    mdLinks(argument[0], { validate: true })
      .then(resolve => console.log(`${totalLinks(resolve)} \nUnique: ${uniqueLinks(resolve)} ${brokenLinks(resolve)}`))
      .catch(reject => console.log(customStyle.red(reject)));
  } else {
    console.log(customStyle.red('Invalid comand. If you need help, please type --help'));
  }
}

// console.log(process.argv);