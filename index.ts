import { Command } from "commander";

const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");
program.option("-d, --debug", "output extra debugging");

program.parse(process.argv);
const options = program.opts();
console.log(options, "参数");
