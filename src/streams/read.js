import fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePathToRead = path.join(__dirname, "files", "fileToRead.txt");
  const readableStream = fs.createReadStream(filePathToRead, {
    encoding: "utf-8",
  });

  let data = "";

  readableStream.on("data", (chunk) => {
    data += chunk;
  });

  readableStream.on("end", () => {
    process.stdout.write(data + "\n");
  });
};

await read();
