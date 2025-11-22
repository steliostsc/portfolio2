"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Youtube } from "lucide-react";
import { getClients } from "@/lib/helper";
import CTASection from "@/components/CTASection";
import Marquee from "@/components/ui/marquee";
import { clientsData } from "@/db/clients";

export default function ProfilePage() {
  const clients = getClients();
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Profile
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I am Stelios Tsekouras, a professional Video Editor specializing in Short Form content for social media, delivering polished, impactful videos across political, influencer, tourism, and brand projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 justify-center items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassmorphismCard className="p-8">
              <div className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src="/steliostsekouras2.png"
                    alt="Stelios Tsekouras"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Stelios Tsekouras
                </h2>
                <p className="text-blue-400 mb-4">
                  Video Editing Services
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Where creativity meets precision in every frame.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                   


                  <a
                    href="mailto:s.tsekouras12@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://wa.me/+306983763372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                My Vision
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  As a professional Video Editor focused on Short Form content for social media, I create visually engaging stories through precise edits, seamless transitions, and optimized audio. My work combines dynamic visual effects with a clear focus on audience engagement.
                </p>
                <p>
                  With a combination of technical proficiency, creativity, and clear communication, I strive to maximize the impact of every project.
                </p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Availability
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>󠁯•󠁏 Accepting new projects</p>
                <p>󠁯•󠁏 Responsive across multiple time zones</p>
                <p>󠁯•󠁏 Quick execution with attention to detail</p>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Trusted by Valued Clients
            </h3>

            <Marquee speed={40} pauseOnHover className="pt-4">
              {clientsData.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-24"
                >
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain rounded-full transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs text-gray-400 text-center">
                    {client.name}
                  </p>
                </div>
              ))}
            </Marquee>
          </GlassmorphismCard>
        </motion.div>

        {/* CTA Section */}
        <CTASection
          title="Let’s Create Together"
          description="Delivering polished, impactful videos tailored to your vision."
          buttonText="Start a Project"
          href="/contact"
        />
      </div>
    </div>
  );
}
