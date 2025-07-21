import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: {
    default: "Osaro | Full Stack Developer Portfolio",
    template: "%s | Osaro",
  },
  description:
    "Explore Osaro's portfolio featuring modern, responsive web apps built with Next.js, Tailwind CSS, and TypeScript.",
  keywords: [
    "Full Stack Developer",
    "Next.js Portfolio",
    "React",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Ogbekhilu Osaro" }],
  creator: "Ogbekhilu Osaro",
  metadataBase: new URL("https://yourdomain.com"), // Replace with actual URL when live
  openGraph: {
    title: "Osaro | Full Stack Developer Portfolio",
    description:
      "Explore Osaro's portfolio featuring modern, responsive web apps built with cutting-edge web technologies.",
    url: "https://yourdomain.com", // Replace with actual URL
    siteName: "Osaro Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Osaro Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osaro | Full Stack Developer Portfolio",
    description:
      "Modern, responsive web apps built with React, Next.js, and Tailwind CSS.",
    creator: "@Jedediah_xo", 
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-900 text-gray-900 dark:text-white`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
