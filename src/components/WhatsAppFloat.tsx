'use client'
import React from "react";
import "./WhatsAppFloat.css"; 
import { useContact } from "@/context/ContactContext";

const WhatsAppFloat: React.FC = () => {

    const { contact, loading } = useContact();
    if (!contact) return <p>loading</p>;
    const phone = contact.phone;
    const telephone = contact.telephone;
    const url=`https://wa.me/91${phone}#${telephone}`;
    return (
        <a
            href="https://wa.me/919007711488"
            // href="https://wa.me/919007711488#033-4804-0009"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
        >
            <img
                src="/images/whatsapp.png"
                alt="Chat on WhatsApp"
                className="whatsapp-icon"
            />
        </a>
    );
};

export default WhatsAppFloat;

