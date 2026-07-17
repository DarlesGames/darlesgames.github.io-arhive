#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const file = path.resolve(process.argv[2] || "projects.js");
const root = path.dirname(file);
const required = ["id", "title", "category", "type", "status", "statusLabel", "featured", "accent", "cover", "short", "details", "solutions", "stack", "links"];
const localized = ["title", "type", "statusLabel", "short", "details"];
const categories = new Set(["html5", "web-product", "mechanic", "desktop", "case"]);
const statuses = new Set(["released", "development", "internal"]);
const accents = new Set(["violet", "green", "cyan", "blue", "orange", "gold", "magic", "space"]);
const errors = [];
const fail = (id, message) => errors.push(`${id}: ${message}`);
const isText = value => typeof value === "string" && value.trim().length > 0;
const webpDimensions = data => {
  const vp8x = data.indexOf(Buffer.from("VP8X"));
  if (vp8x >= 0 && data.length >= vp8x + 18) {
    return [1 + data.readUIntLE(vp8x + 12, 3), 1 + data.readUIntLE(vp8x + 15, 3)];
  }
  const vp8 = data.indexOf(Buffer.from("VP8 "));
  if (vp8 >= 0 && data.length >= vp8 + 18 && data.subarray(vp8 + 11, vp8 + 14).equals(Buffer.from([0x9d, 0x01, 0x2a]))) {
    return [data.readUInt16LE(vp8 + 14) & 0x3fff, data.readUInt16LE(vp8 + 16) & 0x3fff];
  }
  const vp8l = data.indexOf(Buffer.from("VP8L"));
  if (vp8l >= 0 && data.length >= vp8l + 13 && data[vp8l + 8] === 0x2f) {
    const b0 = data[vp8l + 9], b1 = data[vp8l + 10], b2 = data[vp8l + 11], b3 = data[vp8l + 12];
    return [1 + b0 + ((b1 & 0x3f) << 8), 1 + (b1 >> 6) + (b2 << 2) + ((b3 & 0x0f) << 10)];
  }
  return null;
};
const checkLocalized = (id, field, value) => {
  if (!value || !isText(value.ru) || !isText(value.en)) fail(id, `${field} must contain non-empty ru and en strings`);
};

let projects;
try {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  projects = context.window.DARLES_PROJECTS;
} catch (error) {
  console.error(`projects.js could not be evaluated: ${error.message}`);
  process.exit(1);
}
if (!Array.isArray(projects)) {
  console.error("window.DARLES_PROJECTS must be an array");
  process.exit(1);
}

const seen = new Set();
for (const [index, project] of projects.entries()) {
  const id = isText(project?.id) ? project.id : `item[${index}]`;
  for (const key of required) if (!(key in (project || {}))) fail(id, `missing field ${key}`);
  for (const key of Object.keys(project || {})) if (!required.includes(key)) fail(id, `unexpected field ${key}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project?.id || "")) fail(id, "id must be kebab-case");
  if (seen.has(project?.id)) fail(id, "duplicate id");
  seen.add(project?.id);
  for (const field of localized) checkLocalized(id, field, project?.[field]);
  if (!categories.has(project?.category)) fail(id, `unsupported category ${project?.category}`);
  if (!statuses.has(project?.status)) fail(id, `unsupported status ${project?.status}`);
  if (!accents.has(project?.accent)) fail(id, `unsupported accent ${project?.accent}`);
  if (typeof project?.featured !== "boolean") fail(id, "featured must be boolean");

  const ru = project?.solutions?.ru;
  const en = project?.solutions?.en;
  if (!Array.isArray(ru) || !Array.isArray(en) || ru.length < 2 || ru.length > 4 || en.length !== ru.length || ![...ru, ...en].every(isText)) {
    fail(id, "solutions must contain 2-4 aligned, non-empty RU/EN items");
  }
  if (!Array.isArray(project?.stack) || project.stack.length < 3 || project.stack.length > 6 || !project.stack.every(isText)) {
    fail(id, "stack must contain 3-6 non-empty items");
  }
  if (!Array.isArray(project?.links)) fail(id, "links must be an array");
  else for (const [linkIndex, link] of project.links.entries()) {
    checkLocalized(id, `links[${linkIndex}].label`, link?.label);
    try {
      const url = new URL(link?.url);
      if (!["http:", "https:"].includes(url.protocol)) throw new Error();
    } catch { fail(id, `links[${linkIndex}].url must be HTTP(S)`); }
  }

  if (project?.cover !== "") {
    if (!isText(project?.cover) || !/^assets\/projects\/[a-z0-9-]+\.webp$/.test(project.cover)) {
      fail(id, "cover must be empty or assets/projects/<id>.webp");
      continue;
    }
    if (project.cover !== `assets/projects/${project.id}.webp`) fail(id, "cover filename must match the project id");
    const coverPath = path.resolve(root, project.cover);
    if (!fs.existsSync(coverPath)) fail(id, `cover does not exist: ${project.cover}`);
    else {
      const data = fs.readFileSync(coverPath);
      const webp = data.toString("ascii", 0, 4) === "RIFF" && data.toString("ascii", 8, 12) === "WEBP";
      if (!webp) fail(id, `cover is not WebP: ${project.cover}`);
      const dimensions = webpDimensions(data);
      if (!dimensions) fail(id, `cover dimensions cannot be read: ${project.cover}`);
      else if (dimensions[0] !== 1600 || dimensions[1] !== 900) {
        fail(id, `cover must be 1600x900, got ${dimensions[0]}x${dimensions[1]}`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.map(error => `- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Validated ${projects.length} projects in ${path.relative(process.cwd(), file) || path.basename(file)}`);
