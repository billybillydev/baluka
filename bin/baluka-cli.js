import { convert } from "$commands/convert";
import { watch } from "$commands/watch";
import { getPackageJsonVersion } from "$lib/utils";
import { Command } from "commander";

const program = new Command();

program
  .name("blk")
  .description("Transform json file into jsdoc or typescript definition")
  .version(
    getPackageJsonVersion() || "1.0.0",
    "-v, --version",
    "display the version number"
  )
  .option("-i, --input <path>", "input JSON file")
  .option("-o, --output <path>", "output file")
  .option("--name <typeName>", "name of the type")
  .option("--format <format>", "output format (jsdoc or ts)", "jsdoc")
  .option("--watch", "watch for changes")
  .parse(process.argv);

if (process.argv.length <= 2) {
  program.help();
}

const options = program.opts();

if (options.watch) {
  watch({input: options.input, output: options.output, name: options.name, format: options.format});
} else {
  convert({ input: options.input, output: options.output, name: options.name, format: options.format });
}
