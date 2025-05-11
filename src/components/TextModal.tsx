// TextModal.tsx
"use client";

import React from "react";

interface TextModalProps {
    onClose: () => void;
    text: string;
}

const TextModal: React.FC<TextModalProps> = ({ onClose, text }) => {
    const [copied, setCopied] = React.useState(false);




    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };


    return (
        <>
            <div 
                className="modal-backdrop fade show" 
                onClick={onClose}
                style={{ 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 99999
                }}
            />
            
            <div 
                className="modal fade show" 
                style={{
                    display: 'block',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 100000,
                    width: '80%',
                    maxWidth: '400px'
                }}
            >
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body text-center">
                        <p className="mb-4">{text}</p>
                        <button
                            className={`btn ${copied ? 'btn-success' : 'btn-primary'}`}
                            onClick={handleCopy}
                        >
                            {copied ? 'Copied!' : 'Copy Text'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextModal;