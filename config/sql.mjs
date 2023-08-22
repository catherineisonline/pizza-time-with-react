import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const database = process.env.REACT_APP_DATABASE_URL;

const connection = mysql.createConnection(database);


export default connection.promise();

