import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        await sgMail.send({
            to: process.env.CONTACT_RECEIVER_EMAIL,
            from: process.env.SENDGRID_VERIFIED_SENDER, // IMPORTANT
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            html: `
                <strong>Name:</strong> ${name}<br/>
                <strong>Email:</strong> ${email}<br/><br/>
                ${message.replace(/\n/g, "<br/>")}
            `
        });

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Email failed" });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});