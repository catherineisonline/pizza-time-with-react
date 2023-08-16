import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
import fetch from 'node-fetch';
const app = express();
const port = 3000; // Choose a port for your server
app.use(cors());
app.use(json());
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
});

app.get('/', (req, res) => {
    res.send('Server Deployed 🥳')
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

module.exports = app;