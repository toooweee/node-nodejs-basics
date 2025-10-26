import { Transform } from "stream";

class ReverseTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const reversed = chunk.toString().split("").reverse().join("");
    callback(null, reversed);
  }
}

const transform = async () => {
  // Write your code here
  const transform = new ReverseTransform();

  process.stdin.pipe(transform).pipe(process.stdout);

  process.stdin.on("end", () => {
    process.exit(0);
  });
};

await transform();
