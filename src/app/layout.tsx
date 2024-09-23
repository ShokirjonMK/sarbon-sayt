import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  // weight: ['400', '700'], // Agar sizga kerak bo'lsa, har xil qalinliklar qo'shishingiz mumkin
});


export const metadata: Metadata = {
  title: "Sarbon Universiteti",
  description: "Sarbon Universiteti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body  className={openSans.className}>{children}</body>
    </html>
  );
}
