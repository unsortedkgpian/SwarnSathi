"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Contact {
    phone: string;
    telephone: string;
    email: string;
    address: string;
}

interface ContactContextType {
    contact: Contact | null;
    loading: boolean;
    fetchContact: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const [contact, setContact] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchContact = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}/api/contact-us`); // Adjust API endpoint
            const data = await response.json();
            setContact(data);
        } catch (error) {
            console.error("Failed to fetch contact details", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchContact(); // Fetch contact once when the app starts
    }, []);

    return (
        <ContactContext.Provider value={{ contact, loading, fetchContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error("useContact must be used within a ContactProvider");
    }
    return context;
};
