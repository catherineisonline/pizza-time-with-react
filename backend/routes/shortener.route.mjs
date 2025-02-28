import { Router } from "express";
import fetch from "node-fetch";
const shortenerRouter = Router();
const SHORTENER_API_URL = process.env.SHORTENER_API_URL;
const SHORTENER_API_KEY = process.env.SHORTENER_API_KEY;

export const urlShortener = async (req, res) => {
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
            const errorText = await response.text();
            return res.status(response.status).json({ success: false, message: `HTTP error! Status: ${response.status} - ${errorText}` });
        }

        const data = await response.json();
        if (data.code === 0) {
            const shortenedUrl = data.data.tiny_url;
            res.json({ success: true, data: { url: shortenedUrl } });
        } else {
            res.status(500).json({ success: false, message: 'Failed to shorten URL' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `Error with external service: ${error.message}` });
    }
};


shortenerRouter.post('/', urlShortener);


export default shortenerRouter;