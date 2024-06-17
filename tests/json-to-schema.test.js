import { buildJsonSchema } from "$lib/json-to-schema";
import expectedSchemaOutput from "tests/expected-schema-output.json";
import mock3 from "tests/inputs/mock3.json";

describe("buildJsonSchema", () => {
  it("should generate the correct schema for the provided JSON", () => {
    const jsonString = JSON.stringify(mock3);
    const schema = buildJsonSchema(jsonString);
    expect(schema).toEqual(JSON.stringify(expectedSchemaOutput));
  });

  it("should handle an empty object", () => {
    const jsonString = JSON.stringify({});
    const expectedSchema = JSON.stringify({
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {},
      required: [],
    });

    const schema = buildJsonSchema(jsonString);
    expect(schema).toEqual(expectedSchema);
  });

  it("should handle primitive types", () => {
    const jsonString = JSON.stringify({
      title: "Title",
      count: 42,
      isValid: true,
    });
    const expectedSchema = JSON.stringify({
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        title: { type: "string" },
        count: { type: "number" },
        isValid: { type: "boolean" },
      },
      required: ["title", "count", "isValid"],
    });

    const schema = buildJsonSchema(jsonString);
    expect(schema).toEqual(expectedSchema);
  });
});
