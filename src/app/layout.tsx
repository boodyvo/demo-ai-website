import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vlad AI - Tech & AI Tutorials for Business & Life",
  description: "Learn tech and AI for business and everyday tasks. Tutorials, guides, and resources by Vlad AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 0 1.5rem 0',
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'transparent',
        }}>
          <span style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-1px', color: 'var(--color-fg)' }}>
            Vlad <span style={{ color: 'var(--color-accent)' }}>AI</span>
          </span>
          <nav style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, fontSize: '1.1rem' }}>
            <a href="#features">Features</a>
            <a href="#materials">Materials</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
