import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  // Write your code here
  const sourceDirName = "files";
  const destDirName = "files_copy";
  const sourcePath = path.join(__dirname, sourceDirName);
  const destPath = path.join(__dirname, destDirName);

  try {
    await fs.cp(sourcePath, destPath, {
      recursive: true, //копирует рекурсивно
      errorOnExist: true, // упадет с EEXIST, если destPath существует и не пуст
      force: false, // не перезаписывать существующие файлы внутри destPath (если errorOnExist:false)
    });
  } catch (e) {
    if (e.code === "ENOENT" && e.path === sourcePath) {
      throw new Error("FS operation failed");
    } else if (e.code === "ENOENT" && e.path === sourcePath) {
      throw new Error("FS operation failed");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
