import { Router } from "express";
import fetch from "node-fetch";
const captchaRouter = Router();
const captchaSecret = process.env.CAPTCHA_SECRET; // Replace with your own reCAPTCHA secret key

export const checkCaptcha = async (req, res) => {
  const { token } = req.body;
  const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${token}`;
  try {
    const response = await fetch(uri, {
      method: "POST",
    });
    const google_response = await response.json();
    if (google_response.success) {
      return res.status(200).json({ message: "CAPTCHA confirmed" });
    }
    return res.status(400).json({ message: "CAPTCHA failed" });
  } catch (error) {
    console.log("Error in checkCaptcha:", error);
    res.status(500).json({ message: "Server error: verifying CAPTCHA" });
  }
};

captchaRouter.post("/", checkCaptcha);

export default captchaRouter;
