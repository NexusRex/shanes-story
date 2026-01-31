import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending...");

        const formData = new FormData(e.target);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            }),
        });

        // const res = await fetch("http://localhost:3001/contact", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         name: formData.get("name"),
        //         email: formData.get("email"),
        //         message: formData.get("message"),
        //     }),
        // });

        if (res.ok) {
            setStatus("Message sent!");
            e.target.reset();
        } else {
            setStatus("Something went wrong.");
        }
    }

    return (
        <section className="contact-page">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Contact</h1>

                <input name="name" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />

                <button type="submit">Send Message</button>
                {status && <p className="status">{status}</p>}
            </form>
        </section>
    );
}