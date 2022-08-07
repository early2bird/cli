#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

// 异步处理
async function main() {
  program
    .option('-f, --force', 'force installation')
    .action(search)
    .hook('preAction', () => {
      // 在本命令或者子命令的处理函数执行前执行
      console.log('pre');
    })
    .hook('postAction', () => {
      // action函数执行完执行
      console.log('post');
    })
    .hook('preSubcommand', () => {
      console.log('preSub');
    });
  await program.parseAsync(process.argv);
}

main();

async function search(options: { force: boolean }) {
  console.log('action');
  console.log(options);
}
