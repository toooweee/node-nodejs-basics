import fs from "fs/promises";
import path from "path";
import { _dirname } from "./helpers.js";

const remove = async () => {
  // Write your code here
  const files = await fs.readdir(path.join(_dirname, "files"));

  if (!files.toString().includes("fileToRemove.txt")) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.unlink(path.join(_dirname, "files", "fileToRemove.txt"));
  } catch (e) {
    console.log(e.stack);
    throw new Error("FS operation failed");
  }
};

await remove();
