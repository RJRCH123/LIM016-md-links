#!/usr/bin/env node

import {
  totalLinks, uniqueLinks, brokenLinks
} from './status.js';

import {mdLinksFunction} from './md-links.js';
import chalk from '../__mocks__/chalk.js';

// const styleWarn = chalk.bold.yellowBright;
const styleRed = chalk.bold.red;
const styleCyan = chalk.bold.cyan;
// For use arguments
const [, , ...argument] = process.argv;

// functions for content of comands

// Si se encuentra un path //

if (argument.length === 1) {
  
if (argument[0] === '--help') { 
    console.log(styleCyan(`
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
    | --ro               | Print logo                                              |
    +____________________+_________________________________________________________+
    `))
} else if (argument[0] === '--ro') {
  console.log(styleCyan(`
  █████████████████████████████████████████████████████
  ██────█────████─███─█────█████─███───█─██─█─██─█───██
  ██─██─█─██─████──█──█─██──████─████─██──█─█─█─██─████
  ██────█─██─████─█─█─█─██──████─████─██─█──█──███───██
  ██─█─██─██─████─███─█─██──████─████─██─██─█─█─████─██
  ██─█─██────████─███─█────█████───█───█─██─█─██─█───██
  █████████████████████████████████████████████████████
  `))
} } else if (argument[0] === '') {
  console.log(styleCyan(`
  Invalid comand. If you need help, please type --help
  `))
} else {
  mdLinksFunction(argument[0], { validate: false })
  .then(resolve => {
    resolve.map((object) => {
    console.log(styleCyan(`
  File: ${object.file} \n  Text: ${object.text} \n  Href: ${object.href}`));
    })
  })
  .catch(reject => console.log(reject));
};

// Si se encuentra un path y una option //

if (argument.length === 2) {

  switch (argument[1]) {
  case '--validate':
    mdLinksFunction(argument[0], { validate: true })
    .then(resolve => {
      resolve.map((object) => {
      console.log(styleCyan(`
  Href: ${object.href} \n  Text: ${object.text} \n  File: ${object.file} \n  Status: ${object.status} \n  Message: ${object.message}`));
      })
    })
    .catch(reject => console.log(reject));
    break;

  case '--stats':
    mdLinksFunction(argument[0], { validate: true })
      .then(resolve => console.log(`
${totalLinks(resolve)} ${uniqueLinks(resolve)}`))
      .catch(reject => console.log(reject));
    break;

  default: console.log(styleRed('Invalid comand. If you need help, please type --help'));
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
      .then(resolve => console.log(`
${totalLinks(resolve)} ${uniqueLinks(resolve)} ${brokenLinks(resolve)}`))
      .catch(reject => console.log(reject));
  } else {
    console.log(styleRed('Invalid comand. If you need help, please type --help'));
  }
}

// console.log(process.argv);