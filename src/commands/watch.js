import { convert } from "$commands/convert";
import chokidar from "chokidar";

/**
 * @param {Object} data
 * @param {string} data.input 
 * @param {string=} data.output 
 * @param {string=} data.name 
 * @param {FormatType=} data.format 
 * @returns {void}
*/
export function watch({ input, output, name, format }) {
  chokidar.watch(input).on("change", () => {
    console.log("File changed, re-running conversion...");
    convert({ input, output, name, format });
  });
}
