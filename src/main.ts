// Runtime detection utility
const getRuntimeEnv = () => {
  if (typeof Deno !== "undefined") {
    return "Deno";
  }
  if (typeof Bun !== "undefined") {
    return "Bun";
  }
  return "Node.js";
};

// Example function that works across all runtimes
const greet = (name: string): string => {
  return `Hello, ${name}! Running on ${getRuntimeEnv()}`;
};

// Main execution
console.log(greet("Developer"));

// For module usage
export { greet, getRuntimeEnv }; 