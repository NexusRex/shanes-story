import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

    try {
        await sgMail.send({
            to: process.env.CONTACT_RECEIVER_EMAIL,
            from: process.env.SENDGRID_VERIFIED_SENDER,
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });
        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Email failed to send" });
    }
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));