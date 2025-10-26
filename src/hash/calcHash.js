import { fileURLToPath } from "url";
import * as path from "node:path";
import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const readableStream = fs.createReadStream(filePath);
  const hash = crypto.createHash("sha256");

  readableStream.pipe(hash);

  hash.on("finish", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
