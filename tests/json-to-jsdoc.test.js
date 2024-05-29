import { expect, describe, it } from "bun:test";
import { expectedJSDocOutput2 } from "tests/expected-js-doc-output";
import { jsonToJSDocTypes } from "$lib/json-to-jsdoc";
import mock2 from "tests/inputs/mock2.json";

describe("jsonToJSDocTypes", () => {
  it("should convert JSON to JSDoc type definitions", async () => {
    const json = JSON.stringify(mock2);

    expect(jsonToJSDocTypes(json.trim(), "MyType")).toBe(expectedJSDocOutput2);
  });
});
