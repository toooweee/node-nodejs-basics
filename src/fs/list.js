import { fileURLToPath } from "url";
import * as path from "node:path";
import fs from "fs/promises";

const list = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesPath = path.join(__dirname, "files");

  try {
    await fs.stat(filesPath);
    console.log(await fs.readdir(filesPath));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
