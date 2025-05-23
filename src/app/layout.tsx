import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CVS Capital - Investment Advisory Services | Reno, Nevada",
    template: "%s | CVS Capital"
  },
  description: "Independent investment advisory services in Reno, Nevada. Curtis and Creg Shaffer provide comprehensive wealth management, financial planning, and investment strategies backed by The Institute for Wealth Management.",
  keywords: ["financial advisor Reno Nevada", "investment management", "wealth management", "financial planning", "retirement planning", "CVS Capital"],
  authors: [{ name: "CVS Capital" }],
  creator: "CVS Capital",
  publisher: "CVS Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cvscapital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CVS Capital - Investment Advisory Services | Reno, Nevada",
    description: "Independent investment advisory services in Reno, Nevada. Comprehensive wealth management and financial planning.",
    url: 'https://cvscapital.com',
    siteName: 'CVS Capital',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CVS Capital - Investment Advisory Services",
    description: "Independent investment advisory services in Reno, Nevada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
