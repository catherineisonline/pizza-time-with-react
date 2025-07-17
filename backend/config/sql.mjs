import { createClient } from "@libsql/client";
import { authToken, databaseURL } from "../api/index.mjs";

const client = createClient({
  url: databaseURL,
  authToken: authToken,
});

export default client;
