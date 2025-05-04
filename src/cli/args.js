const parseArgs = () => {
  // Write your code here
  const CommandArguments = process.argv.slice(2);

  for (let i = 0; i < CommandArguments.length; i += 2) {
    console.log(`${CommandArguments[i]} is ${CommandArguments[i + 1]}`);
  }
};

parseArgs();
