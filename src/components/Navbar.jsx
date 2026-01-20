import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="logo">Shane’s Story</Link>

            {/* Desktop links */}
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>

            {/* Mobile hamburger */}
            <button
                className="menu-toggle"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="mobile-menu">
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}