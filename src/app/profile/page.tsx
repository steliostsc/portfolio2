"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Youtube, MapPin, Clock, Zap, Quote, Award, Download } from "lucide-react";
import { getClients } from "@/lib/helper";
import CTASection from "@/components/CTASection";
import Marquee from "@/components/ui/marquee";
import { clientsData } from "@/db/clients";
import MagneticButton from "@/components/magnetic-button";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const clients = getClients();
  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-0 md:mt-20 mb-3 text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Profile</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I am Stelios Tsekouras, a professional Video Editor specializing in Short Form content for social media, delivering polished, impactful videos across political, influencer, tourism, and brand projects.
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto mb-20">
          {/* 1. Hero Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <BentoGridItem
              title=""
              description=""
              header={
                <div className="relative w-full h-full min-h-[28rem] md:min-h-[16rem] rounded-xl overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/steliostsekouras.png"
                    alt=""
                    fill
                    className="object-cover object-[center_70%] grayscale-[0] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter"
                    >
                      <br />
                      <span className="text-blue-500"> </span>
                    </motion.div>
                    <div className="h-1 w-16 md:w-20 bg-purple-500 mt-4 rounded-full" />
                    <p className="text-gray-300 mt-4 text-xs md:text-sm font-medium tracking-wide uppercase">
                      Professional Video Editor
                    </p>
                  </div>
                </div>
              }
              className="h-full shadow-2xl shadow-blue-900/10"
              icon={null}
            />
          </motion.div>

          {/* 2. Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Experience"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-black border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors py-8 md:py-0">
                  <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
                  <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900 z-10">150+</span>
                  <div className="text-emerald-500/50 text-xs font-mono uppercase tracking-[0.2em] z-10 mt-2">Projects Completed</div>
                </div>
              }
              className="h-full"
              icon={<Clock className="h-4 w-4 text-emerald-500" />}
            />
          </motion.div>

          {/* 3. Global Reach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Available Remotely"
              header={
                <div className="relative flex flex-1 w-full h-full min-h-[8rem] md:min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-black overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center animate-pulse">
                      <MapPin className="text-blue-500" size={32} />
                    </div>
                    <div className="mt-2 bg-blue-500/20 backdrop-blur text-blue-300 px-3 py-1 rounded text-xs font-bold border border-blue-500/30">
                      WORLDWIDE
                    </div>
                  </div>
                </div>
              }
              className="h-full"
              icon={<MapPin className="h-4 w-4 text-indigo-500" />}
            />
          </motion.div>

          {/* 4. Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <BentoGridItem
              title="My Vision"
              description=""
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-black border border-white/5 p-6 flex items-center relative">
                  <Quote className="text-white/10 absolute top-4 right-4" size={48} />
                  <p className="text-gray-300 italic text-sm md:text-base leading-relaxed relative z-10 pl-12">
                    "I create visually engaging stories through precise edits, seamless transitions, and optimized audio. My work combines dynamic visual effects with a clear focus on audience engagement."
                  </p>
                </div>
              }
              className="h-full"
              icon={<Award className="h-4 w-4 text-yellow-500" />}
            />
          </motion.div>

          {/* 5. Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Connect"
              description=""
              header={
                <div className="flex flex-1 h-full w-full items-center justify-between px-16 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-black rounded-xl border border-white/5 py-4 md:py-0 min-h-[5rem]">
                  <a href="mailto:s.tsekouras12@gmail.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 text-white"><Mail size={20} /></a>
                  <a href="https://wa.me/+306983763372" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 text-white"><MessageCircle size={20} /></a>
                  <a href="https://www.linkedin.com/in/stsekouras/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 text-white"><Linkedin size={20} /></a>
                </div>
              }
              className="h-full"
              icon={<Zap className="h-4 w-4 text-white" />}
            />
          </motion.div>
        </BentoGrid>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Trusted By</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <Marquee className="[--duration:20s]">
              {clientsData.map((client) => (
                  <div key={client.id} className="mx-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white/10 transition-all">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center whitespace-nowrap">
                    {client.name}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* CV Download Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mb-20"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 group"
  >
    {/* Glassmorphism Background */}
    <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl z-0" />

    {/* Subtle Gradient Overlay for Depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none z-0" />

    {/* Animated Ambience */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full animate-pulse z-0" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full z-0 opacity-50" />

    {/* Noise Texture Overlay */}
    <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }} />

    {/* Floating Abstract Shapes */}
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 right-10 w-24 h-24 border border-white/5 rounded-full z-[1]"
    />
    <motion.div
      animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-10 left-10 w-32 h-32 border border-white/5 rounded-full z-[1]"
    />

    {/* Content Container */}
    <div className="relative z-10 p-5 md:p-7 flex flex-col items-center text-center">
      

      <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
        My Resume
      </h3>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
        Get a detailed overview of my experience, skills, and projects.
      </p>

      <MagneticButton>
        <a
          href="/Stelios Tsekouras Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10 flex items-center">
            Download
            <Download className="ml-3 transition-transform group-hover:translate-x-1" size={20} />
          </span>
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </MagneticButton>
    </div>
  </motion.div>
</motion.div>



        <CTASection
          title="Ready to Work Together?"
          description="Let's create something impactful."
          buttonText="Start Collaboration"
          href="/contact"
        />
      </div>
    </div>
  );
}
