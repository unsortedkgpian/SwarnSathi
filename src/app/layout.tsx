import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PreloaderProvider } from "@/context/PreloaderContext"; // Import PreloaderProvider
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
    description:
        "Get quick and hassle-free loans against your gold at Swarn Sathi. Low-interest rates & instant approval!",
    icons: {
        icon: "/fav.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                {/* Basic SEO Meta Tags */}
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="keywords"
                    content="gold loan, instant loans, Swarn Sathi, quick loans, low-interest loans"
                />
                <meta name="author" content="Swarn Sathi" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta
                    property="og:title"
                    content="Swarn Sathi - Get Quick Loans Against Gold"
                />
                <meta
                    property="og:description"
                    content="Need instant cash? Get a hassle-free gold loan with low interest at Swarn Sathi."
                />
                <meta property="og:image" content="/og-image.jpg" />
                <meta property="og:url" content="https://swarnsathi.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Swarn Sathi - Instant Gold Loans"
                />
                <meta
                    name="twitter:description"
                    content="Low-interest gold loans with quick approvals. Apply now at Swarn Sathi!"
                />
                <meta name="twitter:image" content="/twitter-image.jpg" />

                {/* Favicon */}
                <link rel="icon" href="/fav.png" type="image/png" />

                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
                    rel="stylesheet"
                />

                {/* JSON-LD Structured Data for Google Rich Snippets */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FinancialService",
                        name: "Swarn Sathi",
                        url: "https://swarnsathi.com",
                        logo: "https://swarnsathi.com/logo.png",
                        description:
                            "Get quick and hassle-free gold loans at low interest rates with Swarn Sathi.",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+91-XXXXXXXXXX",
                            contactType: "customer service",
                        },
                    })}
                </script>
            </Head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <PreloaderProvider>
                    <ContactProvider>
                        <BootstrapClient />
                        <Header />
                        <div className="main-content">{children}</div>
                        <FooterSection />
                        <WhatsAppFloat />
                    </ContactProvider>
                </PreloaderProvider>
            </body>
        </html>
    );
}
