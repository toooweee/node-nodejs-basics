import { fileURLToPath } from "url";
import * as path from "path";
import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const originalFile = path.join(__dirname, "files", "fileToCompress.txt");
  const compressedFile = path.join(__dirname, "files", "archive.gz");

  const readableStream = fs.createReadStream(originalFile, {
    encoding: "utf-8",
  });
  const writableStream = fs.createWriteStream(compressedFile);

  const gzip = zlib.createGzip();

  readableStream.pipe(gzip).pipe(writableStream);
};

await compress();
