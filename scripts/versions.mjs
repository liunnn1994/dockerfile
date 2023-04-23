import { DEFAULT_VERSION, MAX_SUB_VERSION } from "./constant.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import minimist from "minimist";
const argv = minimist(process.argv.slice(2));
const projectKey = argv["project-key"];

const versionsJson = join(process.cwd(), "versions.json");

function readVersionsJsonSync() {
  return JSON.parse(readFileSync(versionsJson, "utf-8"));
}

function getVersion(key) {
  const version = readVersionsJsonSync()[key] ?? DEFAULT_VERSION;
  const [major, minor, patch] = version.split(".").map(Number);
  if ([major, minor, patch].some(isNaN)) return DEFAULT_VERSION;
  return version;
}

function generateAndSaveNewVersion(version, key) {
  const [major, minor, patch] = version.split(".").map(Number);

  let nextPatch = patch + 1;
  let nextMinor = minor;
  let nextMajor = major;

  if (nextPatch > MAX_SUB_VERSION) {
    nextPatch = 0;
    nextMinor++;
  }
  if (nextMinor > MAX_SUB_VERSION) {
    nextPatch = 0;
    nextMinor = 0;
    nextMajor++;
  }

  const versions = readVersionsJsonSync();
  versions[key] = `${nextMajor}.${nextMinor}.${nextPatch}`;
  writeFileSync(versionsJson, JSON.stringify(versions), "utf-8");
}

generateAndSaveNewVersion(getVersion(projectKey), projectKey);
