import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddhesh Darak",
  description: "Personal website of Siddhesh Darak",
  icons: {
    icon: "/icon.png?v=3",
    apple: "/icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} font-[family-name:var(--font-geist-mono)] antialiased`}
        style={{ background: "oklch(0.95 0.04 55)", color: "oklch(0.28 0.07 48)" }}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
