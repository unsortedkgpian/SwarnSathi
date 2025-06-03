import React from 'react';
import Chatbot from './ChatBot';
import "./WhatsAppFloat.css";

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

