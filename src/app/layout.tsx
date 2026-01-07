import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Jay | Full Stack Developer Portfolio",
    template: "%s | Jay",
  },
  description:
    "Explore Jay's portfolio featuring modern, responsive web apps built with Next.js, Tailwind CSS, and TypeScript.",
  icons: {
    icon: "/jay1.svg",
    shortcut: "/jay1.svg",
    apple: "/jay1.svg",
  },

  keywords: [
    "Full Stack Developer",
    "Next.js Portfolio",
    "React",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Ogbekhilu Jedidiah" }],
  creator: "Ogbekhilu Jedidiah",
  metadataBase: new URL("https://jay-dev-portfolio.vercel.app/"),
  openGraph: {
    title: "Jay | Full Stack Developer Portfolio",
    description:
      "Explore Jay's portfolio featuring modern, responsive web apps built with cutting-edge web technologies.",
    url: "https://jay-dev-portfolio.vercel.app/",
    siteName: "Jay Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: " Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay | Full Stack Developer Portfolio",
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
