import fs from "fs/promises";
import path from "path";
import { _dirname } from "./helpers.js";

const list = async () => {
  const files = await fs.readdir(path.join(_dirname, "files"));

  if (!files) {
    throw new Error("FS operation failed");
  }

  console.log(files);
};

await list();
