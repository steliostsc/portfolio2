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
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/stelios-tsekouras-859885283/",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="glass-panel border-t border-white/5 mt-20 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Stelios Tsekouras
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mx-auto max-w-xs">
              Video Editing Services. Where creativity meets precision in every frame.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center">
            <h4 className="font-semibold text-white tracking-wide text-lg">
              Quick Links
            </h4>
            <div className="flex gap-4 text-sm font-medium justify-center flex-wrap">
              <Link
                href="/"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/profile"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/expertise"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 text-center">
            <h4 className="font-semibold text-white tracking-wide text-lg">
              Connect With Me
            </h4>
            <div className="flex space-x-5 justify-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={link.name}
                  >
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <Icon size={20} className="text-gray-200 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-white text-sm flex items-center justify-center gap-1.5">
            © 
            <a
              href="https://wa.me/+306983763372"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
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
