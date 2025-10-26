const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  let result = [];

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];

    if (arg.startsWith("--")) {
      arg = arg.slice(2);

      result.push(`${arg} is ${args[i + 1]}`);
    }
  }

  result = result.join(", ");

  console.log(result);
};

parseArgs();
