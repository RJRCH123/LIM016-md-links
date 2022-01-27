import chalk from '../__mocks__/chalk.js';

// const styleWarn = chalk.bold.yellowBright;
const styleBroken = chalk.bold.red;
const styleTotal = chalk.bold.cyan;
const styleUnique = chalk.bold.magentaBright;

// functions for get count status (total, unique, broken)
  // new Set se usa para obtener elementos únicos en un array
  // ... para evitar que se cree otro []
  
// status: total
export const totalLinks = (array) => {
  const total = array.length;
  const msgTotal = styleTotal(`Total: ${total}`);
  return `${msgTotal}`;
}

// status: unique
export const uniqueLinks = (array) => {
  let unique = array.map((link) => link.href);
  unique = [...new Set(unique)].length;
  const msgUnique = styleUnique(`Unique: ${unique}`);
  return `${msgUnique}`;
}

// status: broken
export const brokenLinks = (array) => {
  const broken = array.filter((link) => link.statusText === 'Fail');
  const msgBroken = styleBroken(`Broken: ${broken.length}`);
  return `${msgBroken}`;
};

