import { organizeToJSON } from "$lib/utils";
import { describe, expect, it, beforeAll } from "bun:test";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { expectedDirectoryToJsonOutput } from "tests/expected-directory-to-json-output";

beforeAll(async () => {
  const emptyDir = path.join(__dirname, "./inputs/empty-directory");
  const isDirExists = await existsSync(emptyDir);
  if (!isDirExists) {
    await mkdirSync(emptyDir);
  }
});

describe("DirectoryToJSON", () => {
  it("should return a json object", async () => {
    const inputDir = path.join(__dirname, "./inputs");
    const directoryJSON = await organizeToJSON(inputDir);
    expect(directoryJSON).toEqual(expectedDirectoryToJsonOutput);
  });

  it("should return empty object when directory is empty", async () => {
    const inputDir = path.join(__dirname, "./inputs/empty-directory");
    const directoryJSON = await organizeToJSON(inputDir);
    const expectedOutput = {};
    expect(directoryJSON).toStrictEqual(expectedOutput);
  });
});
