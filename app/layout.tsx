import type { Metadata } from "next";

// local import
import Menu from "@/components/menu";
import Footer from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
    title: "今创人力有限公司",
    description: "今创人力有限公司",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body
                suppressHydrationWarning
                style={{ fontFamily: "Microsoft YaHei" }}>
                <Menu />
                {children}
                <Footer />
            </body>
        </html>
    );
}
