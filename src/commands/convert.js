import { jsonToJSDocTypes } from "$lib/json-to-jsdoc";
import { buildJsonSchema } from "$lib/json-to-schema";
import { jsonToTSInterface } from "$lib/json-to-ts-interface";
import chalk from "chalk";
import fs from "fs";
import path from "path";

/**
 * Function responsible for converting input into formatted output
 * @param {Object} data
 * @param {string} data.input
 * @param {string=} data.output
 * @param {string=} data.name
 * @param {FormatType=} data.format
 * @returns {void}
 * @example
 * convert({ input: "example.json", format: "jsdoc", name: "IExample" })
 */
export function convert({ input, output, name, format }) {
  if (!input) {
    throw new Error("Missing -i or --input option");
  }
  if (!fs.existsSync(input)) {
    throw new Error("No file");
  }

  if (path.extname(input) !== ".json") {
    throw new Error("File is not json");
  }

  const data = fs.readFileSync(input, "utf-8");
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
