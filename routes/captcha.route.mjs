import { Router } from "express";
import fetch from 'node-fetch';

const captchaRouter = Router();

export const checkCaptcha = (req, res) => {
    const { token } = req.body;
    const secret = process.env.REACT_APP_CAPTCHA_SECRET; // Replace with your own reCAPTCHA secret key
    const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
    fetch(uri, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {
            // google as a response
            if (google_response.success === true) {
                //   if captcha is verified
                return res.send({ response: "Successful" });
            } else {
                // if captcha is not verified
                return res.send({ response: "Failed" });
            }
        })
        .catch((error) => {
            // Some error while verify captcha
            return res.json({ error });
        });
};


captchaRouter.post('/', checkCaptcha);


export default captchaRouter;