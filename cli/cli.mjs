import "dotenv/config";
import readline from "readline";
import { execAction } from "./core/dispatch.mjs";

const input = process.argv[2];

if (input) {
  execAction(input).then(console.log).catch(console.error);
} else {
  const rl = readline.interface({
    input: process.stdin,
    output: process.stdout
  });

  rl.setPrompt("Ask … ");
  rl.prompt();

  rl.on(("line", (async line)=> {
    if (line.trim().toLowerCase() === "exit") return rl.close();
    try {
      const res = await execAction(line);
      console.log(res);
    } catch (e) {
      console.error("Error:", e);
    }
    rl.prompt();
  });
}
