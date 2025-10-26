const parseEnv = () => {
  // Write your code here
  const result = Object.keys(process.env)
    .filter((env) => env.startsWith("RSS_"))
    .map((env) => `${env}=${process.env[env]}`)
    .join("; ");

  console.log(result);
};

parseEnv();
