const parseEnv = () => {
  // Write your code here
  const envVariables = process.env;

  for (const variable in envVariables) {
    if (variable.startsWith("RSS_")) {
      console.log(`${variable}=${process.env[variable]}`);
    }
  }
};

parseEnv();
