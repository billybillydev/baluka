import { jsonToJSDocTypes } from "$lib/json-to-jsdoc";
import { buildJsonSchema } from "$lib/json-to-schema";
import { jsonToTSInterface } from "$lib/json-to-ts-interface";
import { organizeToJSON } from "$lib/utils";
import chalk from "chalk";
import fs from "fs";
import { lstat } from "node:fs/promises";
import path from "path";

/**
 * Function responsible for converting input into formatted output
 * @param {Object} data
 * @param {string=} data.input
 * @param {string=} data.inputDir
 * @param {string=} data.output
 * @param {string=} data.name
 * @param {FormatType=} data.format
 * @returns {void}
 * @example
 * convert({ input: "example.json", format: "jsdoc", name: "IExample" })
 */
export async function convert({ input, inputDir, output, name, format }) {
  const source = inputDir ?? input;
  if (!source) {
    throw new Error("Missing -i / --input and -I / --input-dir arguments");
  }
  if (!fs.existsSync(source)) {
    throw new Error("No file or directory");
  }
  let data;
  const stats = await lstat(source);
  if (stats.isDirectory()) {
    data = JSON.stringify(await organizeToJSON(source));
  } else {
    if (path.extname(input) !== ".json") {
      throw new Error("File is not json");
    }
    data = fs.readFileSync(input, "utf-8");
  }
  if (!data) {
    throw new Error("Data is null or undefined");
  }
  let result = "";
  const defaultName = "MyType";

  switch (format) {
    case "jsdoc":
      result = jsonToJSDocTypes(data, name || defaultName);
      break;
    case "ts":
      result = jsonToTSInterface(data, name || defaultName);
      break;
    case "schema":
      if (name) {
        console.warn("name argument is not needed with format: schema");
      }
      result = buildJsonSchema(data);
      break;
    default:
      throw new Error(`Unknown format: ${format} !`);
  }

  if (output) {
    fs.writeFileSync(output, result);
    console.log(chalk.green(`Output written to ${output}`));
  } else {
    console.log(result);
  }
}
