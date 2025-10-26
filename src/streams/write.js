import { fileURLToPath } from "url";
import * as path from "node:path";
import fs from "fs";

const write = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePathToWrite = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = fs.createWriteStream(filePathToWrite, {
    encoding: "utf-8",
  });

  process.stdin.on("data", (data) => {
    writableStream.write(data);
  });

  process.stdin.on("end", () => {
    writableStream.end();
  });

  writableStream.on("finish", () => {
    process.exit(0);
  });
};

await write();
