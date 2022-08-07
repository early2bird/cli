#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .alias('i')
  .argument('<packageName>', '包的名称')
  .argument('[password]', '密码')
  .option('-f, --force', 'force installation')
  .action((packageName, password, options, command) => {
    // 在action中获取命令的参数按照设置的顺序
    console.log(`Thank-you ${command.name()} ${packageName} ${password} ${options.force}`);
  })
  .hook('preAction', (thisCommand, actionCommand) => {
    console.log(thisCommand.name(), 'preAction');
    console.log(actionCommand.name());
  })
  .hook('postAction', () => {
    console.log('postAction');
  });
program.parse(process.argv);
const options = program.opts();
console.log(options, 'install');
