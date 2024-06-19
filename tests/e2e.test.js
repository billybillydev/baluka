import { $ } from "bun";
import { describe, expect, it, beforeAll } from "bun:test";
import fs from "fs";
import path from "path";
import { expectedE2EOutput } from "tests/expected-e2e-output";
import {
  expectedDirectoryToJSDoc,
  expectedJSDocOutput2,
  expectedJSDocOutput3,
} from "tests/expected-js-doc-output";
import {
  expectedDirectoryToTs,
  expectedTsOutput3,
} from "tests/expected-ts-output";
import expectedSchemaOutput from "tests/expected-schema-output.json";

beforeAll(async () => {
  const emptyDir = path.join(__dirname, "./inputs/empty-directory");
  const isDirExists = await fs.existsSync(emptyDir);
  if (!isDirExists) {
    await fs.mkdirSync(emptyDir);
  }
});

describe("End-to-End Tests", () => {
  it("should print help when zero arguments passed", async () => {
    const output = (await $`bun start`.text()).trim();
    const expectedOutput = expectedE2EOutput.trim();
    expect(output).toBe(expectedOutput);
  });

  it("should convert JSON to JSDoc types and write to output file when --format is missing", async () => {
    const inputPath = "tests/inputs/mock2.json";
    const outputPath = "tests/outputs/mock2.js";
    await $`bun start -i ${inputPath} -o ${outputPath}`;

    const output = fs.readFileSync(outputPath, "utf-8");
    expect(output.trim()).toBe(expectedJSDocOutput2.trim());
  });

  it("should convert directory to JSDoc types and write to output file when --format is missing", async () => {
    const inputDirPath = "tests/inputs";
    const outputPath = "tests/outputs/mock2.js";
    await $`bun start -I ${inputDirPath} -o ${outputPath}`;

    const output = fs.readFileSync(outputPath, "utf-8");
    expect(output.trim()).toBe(expectedDirectoryToJSDoc.trim());
  });

  it("should convert directory to TS types and write to output file when --format is ts", async () => {
    const inputDirPath = "tests/inputs";
    const outputPath = "tests/outputs/mock-directory.ts";
    await $`bun start -I ${inputDirPath} -o ${outputPath} --format ts --name MyDirectoryType`;

    const output = fs.readFileSync(outputPath, "utf-8");
    expect(output.trim()).toBe(expectedDirectoryToTs.trim());
  });

  it("should convert JSON to JSDoc types and print output", async () => {
    const inputPath = "tests/inputs/mock2.json";
    const output = await $`bun start -i ${inputPath} --format jsdoc`.text();

    expect(output.trim()).toBe(expectedJSDocOutput2.trim());
  });

  it("should convert JSON to TS types and print output", async () => {
    const inputPath = "tests/inputs/mock3.json";
    const output =
      await $`bun start -i ${inputPath} --name IExample --format ts`.text();
    expect(output.trim()).toBe(expectedTsOutput3.trim());
  });

  it("should convert JSON to JSON Schema and print output", async () => {
    const inputPath = "tests/inputs/mock3.json";
    const output = await $`bun start -i ${inputPath} --format schema`.text();
    expect(output.trim()).toBe(JSON.stringify(expectedSchemaOutput).trim());
  });

  it("should convert JSON to JSDoc types and write to output file", async () => {
    const inputPath = "tests/inputs/mock3.json";
    const outputPath = "tests/outputs/mock3.js";
    await $`bun start -i ${inputPath} -o ${outputPath} --format jsdoc`;

    const output = fs.readFileSync(outputPath, "utf-8");
    expect(output).toBe(expectedJSDocOutput3);
  });

  it("should convert JSON to TS types and write to output file", async () => {
    const inputPath = "tests/inputs/mock3.json";
    const outputPath = "tests/outputs/mock3.ts";
    await $`bun start -i ${inputPath} -o ${outputPath} --name IExample --format ts`;

    const output = fs.readFileSync(outputPath, "utf-8");
    expect(output.trim()).toBe(expectedTsOutput3.trim());
  });

  it("should convert JSON to JSON Schema and write to output file", async () => {
    const inputPath = "tests/inputs/mock3.json";
    const outputPath = "tests/outputs/mock3-schema.json";
    await $`bun start -i ${inputPath} -o ${outputPath} --format schema`;

    const output = fs.readFileSync(outputPath, "utf-8");
    expect(output.trim()).toBe(JSON.stringify(expectedSchemaOutput).trim());
  });
});
