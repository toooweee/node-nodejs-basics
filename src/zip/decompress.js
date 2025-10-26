import { fileURLToPath } from "url";
import * as path from "path";
import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const originalFile = path.join(__dirname, "files", "fileToCompress.txt");
  const compressedFile = path.join(__dirname, "files", "archive.gz");

  const readableStream = fs.createReadStream(compressedFile);
  const writableStream = fs.createWriteStream(originalFile);
  const gzip = zlib.createGunzip();

  readableStream.pipe(gzip).pipe(writableStream);

  readableStream.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });

  gzip.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });
};

await decompress();
