
/**
 * Generates JSDoc properties for a given object.
 * @param {Object} obj - The object to generate properties for.
 * @param {string} parent - The parent property name.
 * @param {Array<string>} properties - The array to hold property definitions.
 */
function generateProperties(obj, parent, properties) {
  for (const [key, value] of Object.entries(obj)) {
    const propName = parent ? `${parent}.${key}` : key;
    const jsDocType = getJSDocType(value);
    properties.push(` * @property {${jsDocType}} ${propName}`);

    if (jsDocType === "object") {
      generateProperties(value, propName, properties);
    } else if (
      jsDocType.endsWith("[]") &&
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] === "object"
    ) {
      generateProperties(value[0], `${propName}[]`, properties);
    }
  }
}

/**
 * Converts a JSON value to a JSDoc type.
 * @param {any} value - The JSON value.
 * @returns {string} - The JSDoc type.
 */
function getJSDocType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return `${getJSDocType(value[0])}[]`;
    } else {
      return "Array<any>";
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
 * Converts a JSON value to JSDoc type definitions.
 * @example
 * jsonToJSDocTypes("{
 *    "userId": 1,
 *    "id": 1,
 *    "title": "delectus aut autem",
 *    "completed": false
 * }", "IExample")
 * @param {string} jsonValue - The JSON value.
 * @param {string} [typeName] - The typedef name.
 * @returns {string} - The JSDoc type definitions.
 */
export function jsonToJSDocTypes(jsonValue, typeName) {
  const jsonObject = JSON.parse(jsonValue);

  /** @type {Array<string>} */
  const properties = [];
  generateProperties(jsonObject, "", properties);

  return `/**\n * @typedef {object} ${typeName}\n${properties.join("\n")}\n */\n`;
}
