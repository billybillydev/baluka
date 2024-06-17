import { detectOptionalProperties } from "$lib/utils";

/**
 * @typedef {Object} JSONSchema
 * @property {string} $schema
 * @property {string} type
 * @property {Object} properties
 * @property {string[]} required
 * @property {Object | false} [additionalProperties]
 */

/**
 * The function which traverse the entire json argument to define properties.
 * @param {Object} obj
 * @param {JSONSchema} schema
 * @param {boolean} [isOptionalProperty]
 */
function traverse(obj, schema, isOptionalProperty = false) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const valueType = Array.isArray(value) ? "array" : typeof value;

      if (valueType === "object" && !Array.isArray(value)) {
        schema.properties[key] = {
          type: "object",
          properties: {},
          required: [],
        };
        if (!isOptionalProperty) {
            schema.required.push(key);
        }
        traverse(value, schema.properties[key]);
      } else if (valueType === "array") {
        schema.properties[key] = {
          type: "array",
          items: {},
        };
        if (!isOptionalProperty) {
            schema.required.push(key);
        }
        if (value.length > 0 && typeof value[0] === "object") {
          schema.properties[key].items = {
            type: "object",
            properties: {},
            required: [],
          };
          traverse(value[0], schema.properties[key].items);
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
            traverse(
              optionalPropertiesObject,
              schema.properties[key].items,
              true
            );
          }
        } else {
          schema.properties[key].items.type = typeof value[0];
        }
      } else {
        schema.properties[key] = { type: valueType };
        if (!isOptionalProperty) {
          schema.required.push(key);
        }
      }
    }
  }
}

/**
 * Recursively build a JSON schema from a JSON object.
 * @param {string} jsonValue - The JSON object to build the schema from.
 * @returns {Object} - The JSON schema.
 */
export function buildJsonSchema(jsonValue) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {},
    required: [],
  };
  const jsonParsed = JSON.parse(jsonValue);
  traverse(jsonParsed, schema);
  return JSON.stringify(schema);
}