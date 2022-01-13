// const chalkStyle = require('chalk');
// customStyleYellow = chalkStyle.italic.yellow;
// customStyleRed = chalkStyle.italic.bold.red;
// customStyleGreen = chalkStyle.italic.bold.green;
// customStyleBlue = chalkStyle.italic.bold.blue;

// functions for get count status (total, unique, broken)
  // new Set se usa para obtener elementos únicos en un array
  // ... para evitar que se cree otro []
  
// status: total
const totalLinks = (array) => {
  const total = array.length;
  const msgTotal = chalkStyle.italic.blue(`Total: ${total}`);
  return `${msgTotal}`;
}

// status: unique
const uniqueLinks = (array) => {
  let unique = array.map((link) => link.href);
  unique = [...new Set(unique)].length;
  const msgUnique = chalkStyle.italic.cyan(`Unique: ${unique}`);
  return `\n${msgUnique}`;
}

// status: broken
const brokenLinks = (array) => {
  const broken = array.filter((link) => link.statusText === 'Fail');
  const msgBroken = chalkStyle.italic.red(`Broken: ${broken.length}`);
  return `\n${msgBroken}`;
};

module.exports = {
  totalLinks,
  uniqueLinks,
  brokenLinks
};