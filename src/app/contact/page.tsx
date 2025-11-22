"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner"

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const projectType = formData.get("project-type") as string;
    const timeline = formData.get("timeline") as string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address.")
      return;
    }

    if (!message || message.length < 30) {
      toast("Message should be at least 30 characters long.");
      return;
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, projectType, timeline }),
    });

    const result = await res.json();

    if (res.ok) {
      toast("Message sent successfully!");
      form.reset();
    } else {
      toast(result.error || "Something went wrong.");
    }
  };

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
            Start a Project
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Looking to collaborate or start a project? I’d be glad to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-950 p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:s.tsekouras12@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      s.tsekouras12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-950 p-3 rounded-lg">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/+306983763372"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +30 6983763372
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-950 p-3 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-950 p-3 rounded-lg">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white">Flexible with time zones</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Proven Results
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Efficient Results</h4>
                    <p className="text-gray-400 text-sm">
                      Accurate, high-quality execution
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">
                      Excellence Delivered
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Precision, professional standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">
                      Consistent Updates
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Ongoing Communication, full transparency
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
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Get in Touch
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-300 mb-2 block"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-gray-800/50 border-gray-600 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-300 mb-2 block"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-800/50 border-gray-600 text-white"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm text-gray-300 mb-2 block"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full bg-blue-950/70 border border-gray-600 text-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="">Select project type</option>
                    <option value="youtube">YouTube Video</option>
                    <option value="social-media">Social Media Content</option>
                    <option value="promo">Promotional Video</option>
                    <option value="tutorial">Tutorial/Course</option>
                    <option value="documentary">Documentary</option>
                    <option value="animation">Logo Animation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="text-sm text-gray-300 mb-2 block"
                  >
                    Project Timeline
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="bg-gray-800/50 border-gray-600 text-white"
                    placeholder="Delivery time"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-300 mb-2 block"
                  >
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your project..."
                    className="bg-gray-800/50 border-gray-600 text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white cursor-pointer"
                >
                  <Send className="mr-2" size={16} />
                  Send Inquiry
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-center">
                  Discuss your project directly and instantly via{" "}
                  <a
                    href="https://wa.me/+306983763372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    WhatsApp
                  </a>{" "}
                </p>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* FAQ Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    How long does a typical project take?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Most projects are completed within 3-7 days, depending on
                    complexity and length. Rush orders can be accommodated.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    What file formats do you work with?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I work with all major video formats including MP4, MOV, AVI,
                    and more. I can deliver in any format you need.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Do you provide revisions?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Yes! I include multiple revisions in all packages to ensure
                    you're completely satisfied with the final result.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    What's your payment process?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I typically require 50% upfront and 50% upon completion.
                    Payment can be made via PayPal, bank transfer, or other
                    methods.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Can you work with my existing brand guidelines?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I can work with your brand colors, fonts, logos, and style
                    guidelines to maintain consistency.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Do you offer ongoing video editing services?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Yes! I work with many clients on retainer for regular
                    content creation. Let's discuss your ongoing needs.
                  </p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div> */}
      </div>
    </div>
  );
}
