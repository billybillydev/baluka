import { jsonToTSInterface } from "$lib/json-to-ts-interface";
import { describe, expect, it } from "bun:test";
import { expectedTsOutput3 } from "tests/expected-ts-output";
import mock3 from "tests/inputs/mock3.json";

describe("jsonToTSInterface", () => {
  it("should convert JSON to TypeScript interface definitions", () => {
    const json = JSON.stringify(mock3);
    const result = jsonToTSInterface(json, "IExample");
    expect(result.trim()).toBe(expectedTsOutput3.trim());
  });
});
