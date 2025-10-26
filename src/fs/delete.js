import { fileURLToPath } from "url";
import * as path from "node:path";
import fs from "fs/promises";

const remove = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToDeletePath = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.rm(fileToDeletePath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
