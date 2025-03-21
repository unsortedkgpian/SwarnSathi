import React from "react";
import "./WhatsAppFloat.css"; // Create this file or use CSS-in-JS

const WhatsAppFloat: React.FC = () => {
    return (
        <a
            href="https://wa.me/7044494994#033-4804-0009"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
        >
            <img
                src="https://swarnsathi.com/images/whatsapp.png"
                alt="Chat on WhatsApp"
                className="whatsapp-icon"
            />
        </a>
    );
};

export default WhatsAppFloat;

// CSS styles
