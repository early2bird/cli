#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .alias('l')
  .argument('<dirs...>')
  .option('-f, --force', 'force installation')
  .action((dirs) => {
    // 可变参数内容是数组
    console.log(dirs, '目录');
  });
program.parse(process.argv);
const options = program.opts();
console.log(options, 'list');
