import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import { createClient } from "@libsql/client";
const databaseURL = process.env.TURSO_DB_URL;
const authToken = process.env.TURSO_DB_TOKEN;

const client = createClient({
  url: databaseURL,
  authToken: authToken,
});

export default client;
