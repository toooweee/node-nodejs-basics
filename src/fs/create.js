import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  // Write your code here
  const fileName = "fresh.txt";
  const content = "I am fresh and young";
  const filesDir = path.join(__dirname, "files");
  const filePath = path.join(filesDir, fileName);

  try {
    // flag wx означает 'w': write, 'x': exclusive
    // writeFile упадет с ошибкой если файл уже есть
    // все атомарно, проверка и создание происходят одновременно
    await fs.writeFile(filePath, content, { encoding: "utf8", flag: "wx" });
    console.log("File created");
  } catch (e) {
    if (e.code === "EEXIST") {
      throw new Error("FS operation failed");
    } else if (e.code === "ENOENT") {
      console.error(
        `Error: Directory ${filesDir} does not exist. Cannot create file.`,
      );
      throw new Error("FS operation failed");
    } else {
      console.error(`Failed to write file ${filePath}:`, error);
      throw new Error("FS operation failed");
    }
  }
};

await create();
