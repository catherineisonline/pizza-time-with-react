import dotenv from 'dotenv';
import { createClient } from "@libsql/client";
dotenv.config();

const databaseURL = process.env.VITE_TURSO_DB_URL;
const authToken = process.env.VITE_TURSO_DB_TOKEN;

const client = createClient({
    url: databaseURL,
    authToken: authToken
});

export default client;