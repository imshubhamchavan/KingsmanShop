import React from "react";
import "./footer.style.scss"
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div  className="footer-section">
            <footer>
                <p className="copyright-section">copyright &copy; {currentYear} Shubham, All rights reserved.</p>
            </footer>
        </div>
    );
};
export default Footer;