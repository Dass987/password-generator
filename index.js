#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const os = require('os');
const { version, description } = require('./package.json');
const { log } = console;
const generatePassword = require('./utils/generatePassword');
const savePassword = require('./utils/savePassword');

program.version(version).description(description);

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt', false)
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();
// console.log(length, save, numbers, symbols);

// Get generated password
const generatedPassword = generatePassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(os.EOL);
log(chalk.blue.bold(`[New password]: `) + generatedPassword);
log(chalk.yellow('Password copied to clipboard!'));

if (!save) log(os.EOL);
