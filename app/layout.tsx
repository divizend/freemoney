import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FREE MONEY - Divizend Referral Program | Unlimited Earning Potential",
  description:
    "Join Divizend's exclusive referral program and earn recurring commissions forever. Help investors grow their portfolios while building passive wealth. Register your interest now!",
  keywords:
    "referral program, passive income, stock trading, financial services, recurring commissions, Divizend",
  openGraph: {
    title: "💰 FREE MONEY - Divizend Referral Program",
    description:
      "Unlimited earning potential through our exclusive referral program. Help investors while earning recurring commissions.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
