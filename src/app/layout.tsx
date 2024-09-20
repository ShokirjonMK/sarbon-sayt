import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  // weight: ['400', '700'], // Agar sizga kerak bo'lsa, har xil qalinliklar qo'shishingiz mumkin
});


const inter = Inter({ subsets: ['latin'] })

const AeonikFont = localFont({
  src: [
    {
      path: '../assets/Aeonik/Aeonik-Regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/Aeonik/Aeonik-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/Aeonik/Aeonik-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/Aeonik/Aeonik-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/Aeonik/Aeonik-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/Aeonik/Aeonik-Bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/Aeonik/Aeonik-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});

// className={AeonikFont.className}

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
      <body  className={openSans.className}>{children}</body>
    </html>
  );
}
