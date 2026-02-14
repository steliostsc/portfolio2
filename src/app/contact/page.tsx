"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Zap, Award, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("");

const projectTypes = [
  { value: "advertisement", label: "Advertisement & Promo" },
  { value: "tourism", label: "Tourism & Travel" },
  { value: "food", label: "Food & Culinary" },
  { value: "politics", label: "Political Content" },
  { value: "lifestyle", label: "Lifestyle & Vlogs" },
  { value: "health", label: "Health & Wellness" },
  { value: "cinematic", label: "Cinematic & Artistic" },
  { value: "other", label: "Other" },
];


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const timeline = formData.get("timeline") as string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address.");
      return;
    }

    if (!message || message.length < 10) {
      toast("Message should be at least 10 characters long.");
      return;
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, projectType: selectedProjectType, timeline }),
    });

    const result = await res.json();

    if (res.ok) {
      toast("Message sent successfully!");
      form.reset();
      setSelectedProjectType("");
    } else {
      toast(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-0 md:mt-20 mb-3 text-white tracking-tight">
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Project</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Looking to collaborate or start a project? I&apos;d be glad to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 flex flex-col"
          >
            <GlassmorphismCard className="p-6 md:p-8 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:s.tsekouras12@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors text-sm md:text-base"
                    >
                      s.tsekouras12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-3 rounded-xl flex-shrink-0">
                    <MessageCircle className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/+306983763372"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors text-sm md:text-base"
                    >
                      +30 698 376 3372
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white text-sm md:text-base">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-3 rounded-xl flex-shrink-0">
                    <Clock className="text-orange-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Availability</p>
                    <p className="text-white text-sm md:text-base">Flexible with time zones</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-6 md:p-8 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                Why Work With Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-blue-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Efficient Results</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Accurate, high-quality execution
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="text-green-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Excellence Delivered
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Precision, professional standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-purple-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Consistent Updates
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Ongoing communication, full transparency
                    </p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassmorphismCard className="p-6 md:p-8 pb-8 md:pb-14 hover:border-blue-500/30 transition-colors">
  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
    Get in Touch
  </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-300 mb-2 block font-medium"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="!bg-white/5 backdrop-blur-xl !border-white/10 text-white focus:!border-blue-500/50 focus:!bg-white/10 transition-all rounded-xl"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-300 mb-2 block font-medium"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="!bg-white/5 backdrop-blur-xl !border-white/10 text-white focus:!border-blue-500/50 focus:!bg-white/10 transition-all rounded-xl"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Custom Dropdown - Same size, rounder, blurry liquid glass */}
                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm text-gray-300 mb-2 block font-medium"
                  >
                    Project Type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl px-3 py-2 text-left focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all flex items-center justify-between"
                    >
                      <span className={selectedProjectType ? "text-white" : "text-gray-400"}>
                        {projectTypes.find(p => p.value === selectedProjectType)?.label || "Select project type"}
                      </span>
                      <ChevronDown className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} size={20} />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-gray-800/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => {
                              setSelectedProjectType(type.value);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-3 py-2 text-left text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-0"
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="text-sm text-gray-300 mb-2 block font-medium"
                  >
                    Project Timeline
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="!bg-white/5 backdrop-blur-xl !border-white/10 text-white focus:!border-blue-500/50 focus:!bg-white/10 transition-all rounded-xl"
                    placeholder="Delivery time"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-300 mb-2 block font-medium"
                  >
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your project..."
                    className="!bg-white/5 backdrop-blur-xl !border-white/10 text-white resize-none focus:!border-blue-500/50 focus:!bg-white/10 transition-all rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <Send className="mr-2" size={18} />
                  Send Inquiry
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm text-center">
                  Discuss your project directly and instantly via{" "}
                  <a
                    href="https://wa.me/+306983763372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
