import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
// import fetch from 'node-fetch';
// const captchaSecret = process.env.REACT_APP_CAPTCHA_SECRET;
const app = express();
const port = 3000; // Choose a port for your server
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.send('Server Deployed 🥳')
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));