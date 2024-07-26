import { Router } from "express";
import fetch from 'node-fetch';
const SHORTENER_API_URL = process.env.SHORTENER_API_URL;
const SHORTENER_API_KEY = process.env.SHORTENER_API_KEY;
const shortenerRouter = Router();

export const urlShortener = async (req, res) => {
    // const { inputValue } = req.query;
    const { inputValue } = req.body;
    if (!inputValue) {
        return res.status(400).json({ success: false, message: 'URL parameter is required' });
    }

    try {

        const apiUrl = SHORTENER_API_URL;
        const apiKey = SHORTENER_API_KEY;
        const payload = {
            url: inputValue,
            domain: "tinyurl.com",
        };
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            // const errorText = await response.text();
            // console.error(`HTTP error! Status: ${response.status} - ${errorText}`);
            return res.send({ response: `HTTP error! Status: ${response.status}` });
            // throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = response.json();
        if (data.code === 0) {
            const shortenedUrl = await data.data.tiny_url;
            res.send({ success: true, data: { url: shortenedUrl } });
        } else {
            console.error('Failed to shorten URL:', data);
            res.status(500).json({ success: false, message: 'Failed to shorten URL' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `Error with external service: ${error.message}` });
    }
};


shortenerRouter.post('/', urlShortener);


export default shortenerRouter;