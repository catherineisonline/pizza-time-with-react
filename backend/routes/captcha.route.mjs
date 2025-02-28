import { Router } from "express";
import fetch from 'node-fetch';
const captchaRouter = Router();
const captchaSecret = process.env.VITE_CAPTCHA_SECRET;

export const checkCaptcha = (req, res) => {
    const { token } = req.body;
    const secret = captchaSecret; // Replace with your own reCAPTCHA secret key
    const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
    fetch(uri, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {
            if (google_response.success === true) {
                return res.send({ response: "Successful" });
            } else {
                return res.send({ response: "Failed" });
            }
        })
        .catch((error) => {
            return res.json({ error });
        });
};


captchaRouter.post('/', checkCaptcha);


export default captchaRouter;