#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('pm')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .command('install', 'install one or more packages')
  .alias('i')
  .command('search [query]', 'search with optional query')
  .alias('s')
  .command('update', 'update installed packages')
  .command('list', 'list packages installed', { isDefault: true });
program.option('-d, --debug', 'output extra debugging');

program.parse(process.argv);
