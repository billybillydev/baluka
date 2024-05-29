import fs from "fs";
import path from "path";
import { pascalCase } from "change-case";

/**
 * @typedef ParsedObject
 * @property {string} properties
 * @property {Record<string, string>} references
 */

/**
 * Generaye properties based on object nested keys and values
 * @param {any} obj
 * @param {string} indent
 * @param {Map<string, string>} refMap
 * @returns {ParsedObject}
 */
function generateTSProperties(obj, indent, refMap) {
  let result = "";
  /** @type {Record<string, string>} */
  let references = {};

  for (const [key, value] of Object.entries(obj)) {
    const tsType = getTSType(value, refMap);
    if (
      tsType === "object" &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      const nested = generateTSProperties(value, indent + "  ", refMap);
      const refName = `I${pascalCase(key)}`;
      references[key] = refName;
      refMap.set(refName, nested.properties);
      result += `${indent}${key}: ${refName};\n`;
    } else {
      result += `${indent}${key}: ${tsType};\n`;
    }
  }

  return { properties: result, references };
}

/**
 * @param {any} value
 * @param {Map<string, string>} refMap
 * @returns {string}
 */
function getTSType(value, refMap) {
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return `${getTSType(value[0], refMap)}[]`;
    } else {
      return "any[]";
    }
  }
  switch (typeof value) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return "object";
    default:
      return "any";
  }
}

/**
 * Converts a JSON value to a typescript type(s).
 * @example
 * jsonToTSInterface("example.json", "IExample")
 * @param {string} filePath - The path to the JSON file.
 * @param {string} [typeName] - Name of your final type
 * @returns {string}
 */
export function jsonToTSInterface(filePath, typeName) {
  const jsonContent = fs.readFileSync(filePath, "utf8");
  const jsonObject = JSON.parse(jsonContent);
  const name = typeName ?? path.basename(filePath, path.extname(filePath));
  /** @type {Map<string, string>} */
  const refMap = new Map();

  const mainParsed = generateTSProperties(jsonObject, "  ", refMap);
  let result = `interface ${name} {\n${mainParsed.properties}}\n`;

  for (const [name, props] of refMap.entries()) {
    result = `interface ${name} {\n${props}}\n\n` + result;
  }

  return result;
}
