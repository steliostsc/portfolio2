import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Stelios Tsekouras – Video Editing Services",
    template: "%s | Stelios Tsekouras",
  },
  themeColor: "#020817",
  description:
    "Professional Video Editor specializing in Short Form content for social media, delivering polished, impactful videos across political, influencer, tourism, and brand projects.",
  keywords: [
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Short Form Content",
  ],
  authors: [{ name: "Stelios Tsekouras", url: "https://stsekouras.vercel.app" }],
  creator: "Stelios Tsekouras",
  publisher: "Stelios Tsekouras",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stsekouras.vercel.app",
    title: "Stelios Tsekouras – Video Editing Services",
    description: "Professional Video Editor specializing in Short Form content for social media.",
    siteName: "Stelios Tsekouras Portfolio",
    images: [
      {
        url: "/steliostsekouras.png",
        width: 1200,
        height: 630,
        alt: "Stelios Tsekouras – Video Editing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stelios Tsekouras – Video Editing Services",
    description: "Short-form video content with precise editing and refined audio.",
    images: ["/steliostsekouras.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://stsekouras.vercel.app",
  },
  category: "Video Editing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stelios Tsekouras",
              url: "https://stsekouras.vercel.app",
              image: "/steliostsekouras.png",
              sameAs: [
                "https://stsekouras.vercel.app",
              ],
              jobTitle: "Video Editor",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Short Form Content",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <MouseMoveEffect />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
