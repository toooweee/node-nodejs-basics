import * as path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const create = async () => {
  // Write your code here
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__fileName);
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();
