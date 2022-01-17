#!/usr/bin/env node
import chalk from 'chalk';

styleTrue = chalk.bold.greenBright;
styleFalse = chalk.bold.redBright;
styleWarn = chalk.bold.yellowBright;
styleContent = chalk.bold.cyan;
stylePath = chalk.bold.magentaBright;

import {
  totalLinks, uniqueLinks, brokenLinks
} from './status.js';

import mdLinksFunction from '../src/md-links.js';

// For use arguments
const [, , ...argument] = process.argv;


// functions for content of comands

// Si se encuentra un path //

if (argument.length === 1) {
  mdLinksFunction(argument[0], { validate: false })
  .then(resolve => {
    resolve.map((object) => {
    console.log(`${object.file} | ${object.text} | ${object.href}`);
    })
  })
  .catch(reject => console.log(reject));
}

// Si se encuentra un path y una option //

if (argument.length === 2) {
  switch (argument[1]) {
  case '--validate':
    mdLinksFunction(argument[0], { validate: true })
    .then(resolve => {
      resolve.map((object) => {
      console.log(`
      ${object.file} | ${object.text} |
      ${object.href} | ${object.statusText} | ${object.message}`);
      })
    })
    .catch(reject => console.log(reject));
    break;

  case '--stats':
    mdLinksFunction(argument[0], { validate: true })
      .then(resolve => console.log(`${totalLinks(resolve)} \nUnique: ${uniqueLinks(resolve)}`))
      .catch(reject => console.log(reject));
    break;

  case '--help':
    console.log(`
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
    `)
    break;

  default: console.log('Invalid comand. If you need help, please type --help');
    break;
  }
}

// Si se encuentra un path y dos options //

if (argument.length === 3) {
  if (
    (argument[1] === "--stats" && argument[2] === "--validate") ||
    (argument[1] === "--validate" && argument[2] === "--stats")
  ) {
    mdLinksFunction(argument[0], { validate: true })
      .then(resolve => console.log(`${totalLinks(resolve)} \nUnique: ${uniqueLinks(resolve)} ${brokenLinks(resolve)}`))
      .catch(reject => console.log(reject));
  } else {
    console.log('Invalid comand. If you need help, please type --help');
  }
}

// console.log(process.argv);