#!/usr/bin/env node

import { convert as convertCommand } from "$commands/convert";
import { watch as watchCommand } from "$commands/watch";
import { Command } from "commander";
import packageJson from 'package.json';

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageJsonVersion = packageJson.version;
  const program = new Command();

  program
    .name("blk")
    .description("Transform json file into jsdoc or typescript definition")
    .version(
      packageJsonVersion || "1.0.0",
      "-v, --version",
      "display the version number"
    )
    .option("-i, --input <path>", "input JSON file")
    .option("-o, --output <path>", "output file")
    .option("--name <typeName>", "name of the type")
    .option("--format <format>", "output format (jsdoc, ts or schema)", "jsdoc")
    .option("--watch", "watch for changes")
    .parse(process.argv);

  if (process.argv.length <= 2) {
    program.help();
  }

  const { watch, ...restProps } = program.opts();

  if (watch) {
    watchCommand(restProps);
  } else {
    convertCommand(restProps);
  }
}

main();
