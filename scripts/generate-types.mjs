import { compileFromFile } from "json-schema-to-typescript";
import { writeFileSync } from "node:fs";

const schemaPath = "schemas/artboard.schema.json";
const outPath = "src/artboard.ts";

const ts = await compileFromFile(schemaPath, { bannerComment: "" });
writeFileSync(outPath, ts);

console.log("Generated:", outPath);
