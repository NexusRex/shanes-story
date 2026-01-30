import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        await sgMail.send({
            to: process.env.CONTACT_RECEIVER_EMAIL,
            from: process.env.SENDGRID_VERIFIED_SENDER, // MUST be verified
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            html: `
                <strong>Name:</strong> ${name}<br/>
                <strong>Email:</strong> ${email}<br/><br/>
                ${message.replace(/\n/g, "<br/>")}
            `
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("SendGrid error:", error);
        return res.status(500).json({ error: "Email failed to send" });
    }
}