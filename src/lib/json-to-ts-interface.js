import { pascalCase } from "change-case";

/**
 * @param {object[]} objectArray
 * @returns {string[]}
 */
function detectOptionalProperties(objectArray) {
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
 * Generates a TypeScript interface for a given object.
 * @param {string} name - The name of the interface.
 * @param {Object} obj - The object to generate the interface from.
 * @param {string|null} parent - The parent name to use for nested interfaces.
 * @param {string[]} interfaces - The array to collect generated interfaces.
 * @param {Record<string, any>} [optionalPropertiesObject] - Object contains optional properties if existed
 */
function generateInterface(
  name,
  obj,
  parent = null,
  interfaces,
  optionalPropertiesObject
) {
  let result = `export interface ${name} {\n`;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const type = determineType(value, pascalCase(key), parent, interfaces);

      result += `  ${key}: ${type};\n`;
    }
  }
  if (optionalPropertiesObject) {
    for (const key in optionalPropertiesObject) {
      if (optionalPropertiesObject.hasOwnProperty(key)) {
        const value = optionalPropertiesObject[key];
        const type = determineType(value, pascalCase(key), parent, interfaces);

        result += `  ${key}?: ${type};\n`;
      }
    }
  }

  result += "}\n\n";
  interfaces.push(result);
}

/**
 * Determines the TypeScript type of a value and generates nested interfaces if needed.
 * @param {any} value - The value to determine the type for.
 * @param {string} keyName - The key name to use for nested interfaces.
 * @param {string|null} parent - The parent name to use for nested interfaces.
 * @param {string[]} interfaces - The array to collect generated interfaces.
 * @param {Record<string, any>} [optionalPropertiesObject] - Object contains optional properties if existed
 * @returns {string} - The TypeScript type.
 */
function determineType(
  value,
  keyName,
  parent,
  interfaces,
  optionalPropertiesObject
) {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      let arrayType = "";
      const optionalProperties = detectOptionalProperties(value);
      if (optionalProperties.length > 0) {
        const elementWithOptionalProperties = value.find((item) => {
          return optionalProperties.every((property) =>
            Object.keys(item).includes(property)
          );
        });
        /** @type {Object} */
        const optionalPropertiesObject = optionalProperties.reduce(
          (acc, cur) => {
            acc[cur] = elementWithOptionalProperties[cur];
            return acc;
          },
          {}
        );

        arrayType = determineType(
          value[0],
          keyName,
          parent,
          interfaces,
          optionalPropertiesObject
        );
      } else {
        arrayType = determineType(value[0], keyName, parent, interfaces);
      }
      return `${arrayType}[]`;
    }
    return "any[]";
  }

  switch (typeof value) {
    case "object":
      if (value === null) {
        return "any";
      }
      const interfaceName = parent ? `${parent}${keyName}` : keyName;
      generateInterface(
        interfaceName,
        value,
        interfaceName,
        interfaces,
        optionalPropertiesObject
      );
      return interfaceName;
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    default:
      return "any";
  }
}

/**
 * Converts a JSON value to typescript interfaces.
 * @example
 * jsonToJSDocTypes("{
 *    "userId": 1,
 *    "id": 1,
 *    "title": "delectus aut autem",
 *    "completed": false
 * }", "IExample")
 * @param {string} jsonValue - The JSON value.
 * @param {string} typeName - The typedef name.
 * @returns {string} - The typescript interfaces.
 */
export function jsonToTSInterface(jsonValue, typeName) {
  const jsonParsed = JSON.parse(jsonValue);
  const interfaces = [];

  generateInterface(typeName, jsonParsed, null, interfaces);
  return [...interfaces].reverse().join("");
}
