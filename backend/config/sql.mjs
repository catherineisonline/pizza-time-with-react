// import mysql from 'mysql2';
import dotenv from 'dotenv';
import { createClient } from "@libsql/client";
dotenv.config();

// const database = process.env.REACT_APP_DATABASE_URL;

// const connection = mysql.createConnection(database);
// export default connection.promise();


const databaseURL = process.env.REACT_APP_TURSO_DB_URL;
const authToken = process.env.REACT_APP_TURSO_DB_TOKEN;

const client = createClient({
    url: databaseURL,
    authToken: authToken
});

export default client;