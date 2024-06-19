import { convert } from "$commands/convert";
import chokidar from "chokidar";

/**
 * @param {Object} data
 * @param {string} data.input
 * @param {string} data.inputDir
 * @param {string=} data.output
 * @param {string=} data.name
 * @param {FormatType=} data.format
 * @returns {void}
*/
export function watch({ input, inputDir, output, name, format }) {
  if (inputDir) {
    chokidar
      .watch(inputDir)
      .on("ready", () => {
        console.log("Scan completed, running conversion...");
        convert({ inputDir, output, name, format });
      })
      .on("change", (path) => {
        console.log("%s updated, re-running conversion...", path);
        convert({ inputDir, output, name, format });
      })
      .on("unlink", (path) => {
        console.log("File at path: % removed, re-running conversion...", path);
        convert({ inputDir, output, name, format });
      })
      .on("unlinkDir", (path) => {
        console.log("Directory at path: %s removed, re-running conversion...", path);
        convert({ inputDir, output, name, format });
      });
  } else if (input) {
    chokidar.watch(input).on("change", (path) => {
      console.log("File at path: %s changed, re-running conversion...", path);
      convert({ input, output, name, format });
    });
  }
}
