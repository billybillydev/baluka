import { $ } from "bun";
import { describe, expect, it } from "bun:test";
import fs from "fs";
import { expectedE2EOutput } from "tests/expected-e2e-output";
import { expectedJSDocOutput2, expectedJSDocOutput3 } from "tests/expected-js-doc-output";
import { expectedTsOutput3 } from "tests/expected-ts-output";

describe("End-to-End Tests", () => {
  it("should print help when zero arguments passed", async () => {
    const output = (await $`bun run dist/index.js`.text()).trim();
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

  it("should convert JSON to JSDoc types and print output", async () => {
    const inputPath = "tests/inputs/mock2.json";
    const output = await $`bun start -i ${inputPath} --format jsdoc`.text();

    expect(output.trim()).toBe(expectedJSDocOutput2.trim());
  });

  it("should convert JSON to TS types and print output", async () => {
    const inputPath = "tests/inputs/mock3.json";
    const output = await $`bun start -i ${inputPath} --name IExample --format ts`.text();

    expect(output.trim()).toBe(expectedTsOutput3.trim());
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
});
