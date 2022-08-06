#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program.option('-f, --force', 'force installation');
program.parse(process.argv);
const options = program.opts();
console.log(options, 'list');
