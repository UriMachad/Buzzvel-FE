import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Luma – Practical learning for curious people",
  description: "Short, practical courses taught by people who do the work every day. Learn design, technology, business and more.",
  openGraph: { title: "Luma – Practical learning", description: "Build skills that actually move you forward.", type: "website", siteName: "Luma" },
};

export const viewport: Viewport = { themeColor: "#2f55f4" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}