import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const database = process.env.DATABASE_URL;
const connection = mysql.createConnection(database);


export default connection.promise();

