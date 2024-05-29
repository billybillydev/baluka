import { jsonToJSDocTypes } from "./into-jsdoc";
import { jsonToTSInterface } from "./into-ts";

const jsonFilePath = "./example2.json"; // Path to your JSON file

// Example usage
const jsdocTypes = jsonToJSDocTypes(jsonFilePath);
console.log(jsdocTypes);
const outputFile = Bun.file("type.js");

await Bun.write(outputFile, jsdocTypes);

// Example usage
const tsTypes = jsonToTSInterface(jsonFilePath, "IExample");
console.log(tsTypes);
const outputFile2 = Bun.file("type.ts");

await Bun.write(outputFile2, tsTypes);