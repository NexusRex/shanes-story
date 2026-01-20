import { useEffect, useRef } from "react";
import "./Footer.css";

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    footerRef.current.classList.add("visible");
                }
            },
            { threshold: 0.2 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="footer">
            {/* Center */}
            <div className="footer-center">
                <span className="movie-title">
                    © {new Date().getFullYear()} Shane’s Story
                </span>
                <span className="creator">
                    Website by{" "}
                    <a
                        href="https://github.com/tristancable"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tristan Cable
                    </a>
                </span>
            </div>

            {/* Divider */}
            <div className="footer-divider" />

            {/* Right */}
            <div className="footer-right">
                <div className="contact-line">
                    <span className="name">Blake Clark</span>
                    <span className="role">Director</span>
                    <a href="mailto:actorblake@yahoo.com">actorblake@yahoo.com</a>
                    <a href="tel:+18186693649">(818) 669-3649</a>
                </div>

                <div className="contact-line">
                    <span className="name">Nicole Cable</span>
                    <span className="role">Producer</span>
                    <a href="mailto:ncable1979@gmail.com">ncable1979@gmail.com</a>
                    <a href="tel:+15305142188">(530) 514-2188</a>
                </div>
            </div>
        </footer>
    );
}