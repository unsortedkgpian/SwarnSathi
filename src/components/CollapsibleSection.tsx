"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './CollapsibleSection.module.css';

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    children,
    defaultOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsOpen(defaultOpen);
    }, [defaultOpen]);

    if (!mounted) {
        return (
            <div className={styles.section}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <ChevronDown className={styles.icon} />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.section}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.header}
            >
                <h3 className={styles.title}>{title}</h3>
                {isOpen ? (
                    <ChevronUp className={styles.icon} />
                ) : (
                    <ChevronDown className={styles.icon} />
                )}
            </button>
            {isOpen && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default CollapsibleSection; 