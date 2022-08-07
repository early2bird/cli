#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('pm')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .command('install', '下载一个包')
  .command('search [query]', 'search with optional query')
  .alias('s')
  .command('update', 'update installed packages')
  .command('list', 'list packages installed');
program.option('-d, --debug', 'output extra debugging');

program.parse(process.argv);
