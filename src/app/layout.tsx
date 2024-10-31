import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/AzeretMono-Italic-VariableFont_wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/AzeretMono-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Autonomys Space Meter";
const description = "Get Space pledged on Autonomys Network";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/bg.webp"],
    url: "https://autonomys.network.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/bg.webp"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
