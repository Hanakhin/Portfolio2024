import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Anek_Telugu} from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Anek = Anek_Telugu({subsets: ["latin"],variable: "--font-anek"});

export const metadata: Metadata = {
  title: "Hanakhin Nouni-massotte · Software Engineer",
  description: "Student Web Developer/design specialized in React.js,Tailwindcss and Next.js",
    icons:{
      icon:[
          {url: '/custom-icon.png'}
      ]
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Anek.variable} antialiased font-sans bg-background text-foreground h-full`}
      >
        {children}
        <Analytics/>
      <SpeedInsights/>
      </body>
    </html>
  );
}
