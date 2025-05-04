import * as fs from "fs/promises";
import * as path from "path";
import { _dirname } from "./helpers.js";

const rename = async () => {
  // Write your code here
  const files = await fs.readdir(path.join(_dirname, "files"));

  if (files.toString().includes("properFilename.md")) {
    throw new Error("FS operation failed");
  }

  if (!files.toString().includes("wrongFilename.txt")) {
    throw new Error("FS operation failed");
  }

  try {
    const oldPath = path.join(_dirname, "files", "wrongFilename.txt");
    const newPath = path.join(_dirname, "files", "properFilename.md");
    await fs.rename(oldPath, newPath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
