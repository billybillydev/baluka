import { convert } from "$commands/convert";
import { describe, expect, it, spyOn } from "bun:test";
import fs from "fs";
import { access } from "fs/promises";
import path from "path";
import { expectedJSDocOutput2 } from "tests/expected-js-doc-output";
import { expectedTsOutput2 } from "tests/expected-ts-output";
import expectedSchemaOutput from "tests/expected-schema-output.json";

describe("ConvertCommandNoInput", () => {
  it("should throw error if input is missing", () => {
    expect(() => convert({ name: "MyType" })).toThrowError(
      "Missing -i or --input option"
    );
  });
});

describe("ConvertCommandFileNotExist", () => {
  it("should throw error if file does not exist", () => {
    const input = path.join(__dirname, "./inputs/not-existed-file.txt");
    expect(() => convert({ input, name: "MyType" })).toThrowError("No file");
  });
});

describe("ConvertCommandNonJsonFile", () => {
  it("should throw error if file is not json", () => {
    const input = path.join(__dirname, "./inputs/non-json-file.txt");
    expect(() => convert({ input, name: "MyType" })).toThrowError(
      "File is not json"
    );
  });
});

describe("ConvertCommandForBadFormat", () => {
  it("should throw error when format is bad", () => {
    const input = path.join(__dirname, "./inputs/mock2.json");
    const format = "php";
    expect(() => convert({ input, name: "BadFormat", format })).toThrowError(
      `Unknown format: ${format} !`
    );
  });
});

describe("ConvertCommandForJsdoc", () => {
  it("should read JSON file and output JSDoc type definitions", () => {
    const consoleSpy = spyOn(console, "log");
    const input = path.join(__dirname, "./inputs/mock2.json");
    convert({ input, name: "MyType", format: "jsdoc" });
    console.log(expectedJSDocOutput2);
    expect(consoleSpy).toHaveBeenCalledWith(expectedJSDocOutput2);
  });
});

describe("ConvertCommandForTypescript", () => {
  it("should read JSON file and output typescript interfaces", () => {
    const consoleSpy = spyOn(console, "log");
    const input = path.join(__dirname, "./inputs/mock2.json");
    convert({ input, format: "ts" });
    console.log(expectedTsOutput2);
    expect(consoleSpy).toHaveBeenCalledWith(expectedTsOutput2);
  });
});

describe("ConvertCommandForSchema", () => {
  it("should read JSON file and output json schema", () => {
    const consoleSpy = spyOn(console, "log");
    const input = path.join(__dirname, "./inputs/mock3.json");
    convert({ input, format: "ts" });
    console.log(expectedSchemaOutput);
    expect(consoleSpy).toHaveBeenCalledWith(expectedSchemaOutput);
  });
});

describe("ConvertCommandWithOutputFile", () => {
  it("should create output file", async () => {
    const inputPath = path.join(__dirname, "./inputs/mock2.json");
    const outputPath = path.join(__dirname, "./outputs/mock2.ts");
    convert({
      input: inputPath,
      name: "MyType",
      format: "ts",
      output: outputPath,
    });
    const isOutputFileExists = await access(outputPath)
      .then(() => true)
      .catch(() => false);
    expect(isOutputFileExists).toBeTrue();
    const outputData = fs.readFileSync(outputPath, "utf-8");

    expect(outputData.trim()).toBe(expectedTsOutput2.trim());
  });
});
