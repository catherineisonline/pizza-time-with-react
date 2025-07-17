import { createClient } from "@libsql/client";
const databaseURL = process.env.TURSO_DB_URL;
const authToken = process.env.TURSO_DB_TOKEN;

const client = createClient({
  url: databaseURL,
  authToken: authToken,
});

export default client;
