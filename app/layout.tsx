import type { Metadata } from "next";

// local import
import SmoothScrolling from '@/components/reusables/smoothScrolling';
import Layout from '@/components/reusables/layout';
import Menu from "@/components/menu";
import Footer from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "今创人力有限公司",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ fontFamily: 'Microsoft YaHei' }}>
        <Layout>
          <Menu />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
