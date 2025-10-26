import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const wrongFilePath = path.join(__dirname, "files", "wrongFilename.txt");
  const correctFilePath = path.join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(wrongFilePath);
    try {
      await fs.access(correctFilePath);
      throw new Error("FS operation failed");
    } catch (e) {
      if (e.code !== "ENOENT") throw e;
    }
    await fs.rename(wrongFilePath, correctFilePath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
