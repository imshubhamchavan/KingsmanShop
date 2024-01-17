import React from "react";
import "./footer.style.scss"
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer-section">
                <p className="copyright-section">copyright &copy; {currentYear} Shubham, All rights reserved.</p>
            </footer>
        </div>
    );
};
export default Footer;