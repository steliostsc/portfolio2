"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Heart,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    /*{
      name: "YouTube",
      href: "https://www.youtube.com/@itsniloybhowmick",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/its.niloybhowmick",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/niloy-bhowmick",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },*/
    {
      name: "Email",
      href: "mailto:s.tsekouras12@gmail.com",
      icon: Mail,
    },

    {
      name: "WhatsApp",
      href: "https://wa.me/+306983763372",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-700/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-50">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Stelios Tsekouras</h3>
            <p className="text-gray-400 text-sm">
              Video Editing Services. Where creativity meets precision in every frame.
            </p>  
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/profile"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/expertise"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            ©
        <a
              href="https://wa.me/+306983763372"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stelios Tsekouras
            </a>{" "}
             {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
