import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            {/* Center column */}
            <div className="footer-center">
                <span className="movie-title">© {new Date().getFullYear()} Shane’s Story</span>
                <span className="creator">Website by Tristan Cable</span>
            </div>

            {/* Right column */}
            <div className="footer-right">
                <div className="contact-block">
                    <span className="name">Name 1</span>
                    <span className="role">Director / Creator</span>
                    <a href="mailto:name1@email.com">name1@email.com</a>
                    <a href="tel:+15551234567">(555) 123-4567</a>
                </div>
                <div className="contact-block">
                    <span className="name">Name 2</span>
                    <span className="role">Producer / Actress</span>
                    <a href="mailto:name2@email.com">name2@email.com</a>
                    <a href="tel:+15559876543">(555) 987-6543</a>
                </div>
            </div>
        </footer>
    );
}