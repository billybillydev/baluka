import dirToJson from "dir-to-json";
import path from "path";
import fs from "fs";
import { camelCase } from "change-case";

/**
 * @typedef {object} StructureInfo
 * @property {string} parent
 * @property {string} path
 * @property {string} name
 * @property {"directory" | "file"} type
 * @property {StructureInfo[]} [children]
 */

/**
 * @typedef {object} SimpleStructureInfo
 * @type {Record<string, string | object>}
 */

/**
 * @param {object[]} objectArray
 * @returns {string[]}
 */
export function detectOptionalProperties(objectArray) {
  /** @type {string[]} */
  const mandatoryProperties = Object.keys(objectArray[0]);
  /** @type {string[]} */
  const optionalProperties = [];
  objectArray.slice(1).forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (!mandatoryProperties.includes(key)) {
        optionalProperties.push(key);
      }
    });
  });

  return optionalProperties;
}

/**
 * Takes a directory path and transform its structure to json tree object
 * @param {string} directoryPath
 * @returns {Object}
 */
export async function organizeToJSON(directoryPath) {
  /** @type {StructureInfo} */
  const directoryObject = await dirToJson(directoryPath);
  const simpleObject = await simplifyObject(directoryObject, directoryPath);
  return sortObjectByKeys(simpleObject);
}

/**
 * Takes a StructureInfo object and returns a SimpleStructureInfo
 * @param {StructureInfo} obj
 * @param {string} rootPath
 * @returns {SimpleStructureInfo}
 */
async function simplifyObject(obj, rootPath) {
  const simpleObject = {};
  if (obj.type === "directory") {
    for await (const child of obj.children) {
      const childObject = await simplifyObject(child, rootPath);
      if (childObject) {
        if (child.type === "file") {
          Object.entries(childObject).forEach(([k, v]) => {
            simpleObject[k] = v;
          });
        } else {
          const name =
            child.name.includes(".") || child.name.includes("-")
              ? camelCase(child.name)
              : child.name;
          simpleObject[name] = childObject;
        }
      }
    }
  } else if (obj.type === "file") {
    const filePath = path.join(rootPath, obj.path);
    const isFileExists = await fs.existsSync(filePath);
    const fileExtension = path.extname(filePath);
    if (isFileExists) {
      if (fileExtension !== ".json") {
        return null;
      }
      const fileName = path.basename(filePath, fileExtension);
      const file = await fs.readFileSync(filePath, "utf-8");
      const name =
        fileName.includes(".") || fileName.includes("-")
          ? camelCase(fileName)
          : fileName;
      simpleObject[name] = file;
    }
  }
  return simpleObject;
}

export function sortObjectByKeys(obj) {
  // Convert object to an array of key-value pairs, sort it, and convert back to an object
  return Object.fromEntries(
    Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  );
}