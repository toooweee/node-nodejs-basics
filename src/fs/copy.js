import { fileURLToPath } from "url";
import * as path from "node:path";
import fs from "fs/promises";

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const originalPath = path.join(__dirname, "files");
  const copyPath = path.join(__dirname, "files_copy");

  try {
    const files = await fs.readdir(originalPath);
    await fs.mkdir(copyPath);

    for (const file of files) {
      await fs.copyFile(
        path.join(originalPath, file),
        path.join(copyPath, file),
      );
    }
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
