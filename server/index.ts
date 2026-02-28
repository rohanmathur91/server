import express from "express";
import { parseConfig } from "./config";
import dotenv from "dotenv";
import path from "path";

function injectEnv() {
  let envPath;

  if (process.env.NODE_ENV === "production") {
    envPath = path.join(process.cwd(), "server", ".env");
  } else {
    envPath = path.join(process.cwd(), "server", ".env.local");
  }

  dotenv.config({ path: envPath });
}

function main() {
  injectEnv();

  const config = parseConfig(process.env);

  const app = express();

  app.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        message: "Hello",
      },
    });
  });

  app.listen(config.PORT, () => {
    console.log(`Server running on port: ${config.PORT}`);
  });
}

main();
