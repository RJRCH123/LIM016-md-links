
const chalk = {
  bold: {
    red: (message) =>`\x1b[31m
      ${message}\x1b[0m
` ,
    cyan: (message) =>`\x1b[36m
      ${message}\x1b[0m
` ,
    magentaBright: (message) =>`\x1b[35m
      ${message}\x1b[0m
` 
  }
}

export default chalk