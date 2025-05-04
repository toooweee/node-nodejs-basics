import fs from "fs/promises";
import path from "path";
import { _dirname } from "./helpers.js";

const read = async () => {
  // Write your code here
  const files = await fs.readdir(path.join(_dirname, "files"));

  if (!files.toString().includes("fileToRead.txt")) {
    throw new Error("FS operation failed");
  }

  console.log(
    await fs.readFile(path.join(_dirname, "files", "fileToRead.txt"), "utf8"),
  );
};

await read();
