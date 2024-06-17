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
