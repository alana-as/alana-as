const informacao = require('prompt-sync')();
let quem;
let oQueDeseja;
let paraQue;

const chalk = require('chalk');

quem = chalk.red(informacao("Digite Quem: "));
oQueDeseja = chalk.red(informacao("Digite O Que Deseja: "));
paraQue = chalk.red(informacao("Digite Para que: "));

console.log(`Eu como ${quem}, desejo um ${oQueDeseja}, para que possa ${paraQue}.`);
//console.log(`Eu como ${quem}.`);
