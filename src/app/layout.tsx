import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
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
        className={`${geistMono.variable} font-mono antialiased bg-[#fff0df] text-[#083a3f]`}
      >
        {children}
      </body>
    </html>
  );
}
