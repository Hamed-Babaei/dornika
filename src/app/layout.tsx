import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const MorabeFont = localFont({
  src: [
    {
      path: "./fonts/Morabba-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Morabba-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Morabba-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

const lexend = localFont({
  src: "./fonts/Lexend[wght].ttf",
});

export const metadata: Metadata = {
  title: "Dornika Nassaj Mana",
  description: "Developed by Sorayya.co.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
