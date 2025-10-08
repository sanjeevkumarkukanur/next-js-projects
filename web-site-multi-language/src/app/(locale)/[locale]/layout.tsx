import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../../styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Company Website',
  description: 'Professional company website built with Next.js App Router',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="in-en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
         <NextIntlClientProvider messages={messages}>
          <Navbar 
          brandName="My Company" 
          menuItems={[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Services', path: '/services' },
            { label: 'Contact', path: '/contact' }
          ]}
        />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
