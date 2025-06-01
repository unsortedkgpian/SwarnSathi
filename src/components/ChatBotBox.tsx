import React from 'react';
import Chatbot from './ChatBot';
import "./WhatsAppFloat.css"; // Create this file or use CSS-in-JS

const ChatBotBox: React.FC = () => {

    return (
        <a
        target="_blank"
        rel="noopener noreferrer" 
        className="whatsapp-float">
        <Chatbot />
        </a>
    );
};

export default ChatBotBox;

// CSS styles

