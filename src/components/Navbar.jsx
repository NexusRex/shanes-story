import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const getLinkClass = ({ isActive }) => isActive ? "active" : "";

    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">Shane’s Story</NavLink>

            {/* Desktop links */}
            <div className="nav-links">
                <NavLink to="/" className={getLinkClass}>Home</NavLink>
                <NavLink to="/about" className={getLinkClass}>About</NavLink>
                <NavLink to="/gallery" className={getLinkClass}>Gallery</NavLink>
                <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
            </div>

            {/* Mobile hamburger */}
            <button
                className={`menu-toggle ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="mobile-menu">
                    <NavLink to="/" className={getLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className={getLinkClass} onClick={() => setOpen(false)}>About</NavLink>
                    <NavLink to="/gallery" className={getLinkClass} onClick={() => setOpen(false)}>Gallery</NavLink>
                    <NavLink to="/contact" className={getLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
                </div>
            )}
        </nav>
    );
}