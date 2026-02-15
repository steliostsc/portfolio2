import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";


import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ReactLenis } from "lenis/react";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "Stelios Tsekouras – Video Editing Services",
    template: "%s | Niloy Bhowmick",
  },
    themeColor: "#0c2d48",
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Niloy Bhowmick specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Niloy Bhowmick",
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Bangladesh Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Niloy Bhowmick", url: "https://www.itsniloy.me" }],
  creator: "Niloy Bhowmick",
  publisher: "Niloy Bhowmick",
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
    description:
      "I am Stelios Tsekouras, a professional Video Editor specializing in Short Form content for social media, delivering polished, impactful videos across political, influencer, tourism, and brand projects.",
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
    description:
      "I produce short-form video content with precise editing, fluid transitions, and refined audio.",
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
    <html lang="en" className="dark">
      <head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/favicon.png" />
  <meta name="theme-color" content="#0c2d48" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0c2d48" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="mobile-web-app-capable" content="yes" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Niloy Bhowmick",
              url: "https://www.itsniloy.me",
              image: "/niloybhowmick.png",
              sameAs: [
                "https://www.itsniloy.me",
                "https://linkedin.com/in/niloybhowmick",
                "https://youtube.com/@niloybhowmick",
                "https://twitter.com/niloy_bhowmick",
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Green University of Bangladesh",
              },
            }),
          }}
        />
      </head>


      <body className={`${inter.className} min-h-screen text-white`} style={{ backgroundColor: '#3676e4' }}>
  <ReactLenis root options={{ syncTouch: false }}>
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <JumpToTop />
      <Toaster position="top-center" />
    </div>
  </ReactLenis>
</body>





    </html>
  );
}
