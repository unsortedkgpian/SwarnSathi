import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatBotBox from "@/components/ChatBotBox";
import { PreloaderProvider } from "@/context/PreloaderContext";
import { ContactProvider } from "@/context/ContactContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Swarn Sathi - Easy Gold Loans",
    description: "Get quick and hassle-free loans against your gold at Swarn Sathi. Low-interest rates & instant approval!",
    icons: {
        icon: "/fav.png",
    },
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    keywords: "gold loan, instant loans, Swarn Sathi, quick loans, low-interest loans",
    authors: [{ name: "Swarn Sathi" }],
    robots: "index, follow",
    openGraph: {
        title: "Swarn Sathi - Get Quick Loans Against Gold",
        description: "Need instant cash? Get a hassle-free gold loan with low interest at Swarn Sathi.",
        images: ["/og-image.jpg"],
        url: "https://swarnsathi.com",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Swarn Sathi - Instant Gold Loans",
        description: "Low-interest gold loans with quick approvals. Apply now at Swarn Sathi!",
        images: ["/twitter-image.jpg"],
    },
    other: {
        "google-fonts": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <PreloaderProvider>
                    <ContactProvider>
                        <BootstrapClient />
                        <Header />
                        <div className="main-content">{children}</div>
                        <FooterSection />
                        <WhatsAppFloat />
                        <ChatBotBox />
                    </ContactProvider>
                </PreloaderProvider>
            </body>
        </html>
    );
}
