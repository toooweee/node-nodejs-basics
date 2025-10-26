import { fileURLToPath } from "url";
import * as path from "node:path";
import fs from "fs/promises";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    console.log(await fs.readFile(filePath, { encoding: "utf-8", flag: "r" }));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
