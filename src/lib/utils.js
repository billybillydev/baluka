import path from 'path';
import { readFileSync } from 'fs'

export function getPackageJsonInfo() {
    const rootPath = process.cwd();
    const packageJsonPath = path.join(rootPath, "package.json");
    const packageJsonFile = readFileSync(packageJsonPath, "utf-8");
    const packageJsonData = JSON.parse(packageJsonFile);
    return packageJsonData;
}

export function getPackageJsonVersion() {
    const packageJsonData = getPackageJsonInfo();
    return packageJsonData.version;
}