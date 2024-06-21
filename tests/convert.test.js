import { convert } from "$commands/convert";
import { describe, expect, it, spyOn, beforeAll } from "bun:test";
import fs from "fs";
import { access } from "fs/promises";
import path from "path";
import {
  expectedDirectoryToJSDoc,
  expectedJSDocOutput2,
} from "tests/expected-js-doc-output";
import expectedSchemaOutput from "tests/expected-schema-output.json";
import {
  expectedDirectoryOverFileToTs,
  expectedDirectoryToTs,
  expectedTsOutput2,
} from "tests/expected-ts-output";

beforeAll(async () => {
  const emptyDir = path.join(__dirname, "./inputs/empty-directory");
  const isDirExists = await fs.existsSync(emptyDir);
  if (!isDirExists) {
    await fs.mkdirSync(emptyDir);
  }
});

describe("ConvertCommandNoInput", () => {
  it("should throw error if input or inputDir are missing", () => {
    expect(() => convert({ name: "MyType" })).toThrowError(
      "Missing -i / --input and -I / --input-dir arguments"
    );
  });
});

describe("ConvertCommandFileNotExist", () => {
  it("should throw error if file does not exist", () => {
    const input = path.join(__dirname, "./inputs/not-existed-file.txt");
    expect(() => convert({ input, name: "MyType" })).toThrowError(
      "No file or directory"
    );
  });
});

describe("ConvertCommandDirectoryNotExist", () => {
  it("should throw error if directory does not exist", () => {
    const inputDir = path.join(__dirname, "./inputs/not-existed-directory");
    expect(() => convert({ inputDir, name: "MyType" })).toThrowError(
      "No file or directory"
    );
  });
});

// describe("ConvertCommandDataIsNullOrUndefined", () => {
//   it("should throw error if data is null or undefined", () => {
//     const input = path.join(__dirname, "./inputs/empty-object.json");
//     expect(() => convert({ input, name: "MyType", format: "ts" })).toThrowError(
//       "Data is null or undefined"
//     );
//   });
// });

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

  it("should directory and output JSDoc type definitions", () => {
    const consoleSpy = spyOn(console, "log");
    const inputDir = path.join(__dirname, "./inputs");
    convert({ inputDir, name: "MyType", format: "jsdoc" });
    console.log(expectedDirectoryToJSDoc);
    expect(consoleSpy).toHaveBeenCalledWith(expectedDirectoryToJSDoc);
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

  it("should read directory and output typescript interfaces", () => {
    const consoleSpy = spyOn(console, "log");
    const inputDir = path.join(__dirname, "./inputs");
    convert({ inputDir, name: "MyType", format: "ts" });
    console.log(expectedDirectoryToJSDoc);
    expect(consoleSpy).toHaveBeenCalledWith(expectedDirectoryToJSDoc);
  });
});

describe("ConvertCommandForSchema", () => {
  it("should read JSON file and output json schema", () => {
    const consoleSpy = spyOn(console, "log");
    const input = path.join(__dirname, "./inputs/mock3.json");
    convert({ input, format: "schema" });
    console.log(expectedSchemaOutput);
    expect(consoleSpy).toHaveBeenCalledWith(expectedSchemaOutput);
  });
});

describe("ConvertCommandWithOutputFile", () => {
  it("should create output file from input file", async () => {
    const inputPath = path.join(__dirname, "./inputs/mock2.json");
    const outputPath = path.join(__dirname, "./outputs/mock2.ts");
    await convert({
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

    expect(outputData.trim().length).toEqual(expectedTsOutput2.trim().length);
  });

  it("should create output file from input directory", async () => {
    const inputDirPath = path.join(__dirname, "./inputs");
    const outputPath = path.join(__dirname, "./outputs/mock-directory.ts");
    await convert({
      inputDir: inputDirPath,
      name: "MyDirectoryType",
      format: "ts",
      output: outputPath,
    });
    const isOutputFileExists = await access(outputPath)
      .then(() => true)
      .catch(() => false);
    expect(isOutputFileExists).toBeTrue();
    const outputData = fs.readFileSync(outputPath, "utf-8");

    expect(outputData.trim().length).toEqual(expectedDirectoryToTs.trim().length);
  });
});

describe("ConvertCommandDirectoryOverFile", () => {
  it("should convert directory over file if passed -I and -i arguments", async () => {
    const inputDirPath = path.join(__dirname, "./inputs");
    const inputPath = path.join(__dirname, "./inputs/mock2.json");
    const outputPath = path.join(
      __dirname,
      "./outputs/mock-directory-over-file.ts"
    );
    await convert({
      inputDir: inputDirPath,
      input: inputPath,
      name: "MyDirectoryOverFileType",
      format: "ts",
      output: outputPath,
    });
    const isOutputFileExists = await access(outputPath)
      .then(() => true)
      .catch(() => false);
    expect(isOutputFileExists).toBeTrue();
    const outputData = fs.readFileSync(outputPath, "utf-8");

    expect(outputData.trim().length).toEqual(expectedDirectoryOverFileToTs.trim().length);
  });
});
