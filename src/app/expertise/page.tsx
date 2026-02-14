"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  ClipboardList,
  PlayCircle,
  Scissors,
  Sparkles,
  MessageSquare,
  CheckCircle,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import {
  videoEditingSkills,
  achievements,
  workflow,
} from "@/db/skills";

const iconMap = [
  { icon: <ClipboardList size={24} />, bg: "#0ea5e9" }, // Project Analysis - Blue
  { icon: <PlayCircle size={24} />, bg: "#8b5cf6" }, // Content Review - Purple
  { icon: <Scissors size={24} />, bg: "#f59e0b" }, // Rough Cut - Amber
  { icon: <Sparkles size={24} />, bg: "#10b981" }, // Fine Tuning - Emerald
  { icon: <MessageSquare size={24} />, bg: "#f43f5e" }, // Client Review - Rose
  { icon: <CheckCircle size={24} />, bg: "#6366f1" }, // Final Delivery - Indigo
];

export default function ExpertisePage() {
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Expertise</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            As a professional video editor, I combine technical proficiency with a structured approach to deliver visually compelling content. My focus is on precision, clarity, and achieving the intended impact for each project.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Technical Skills</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {videoEditingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <GlassmorphismCard className="p-6 h-full hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="relative w-12 md:w-16 h-12 md:h-16 flex-shrink-0">
                      <Image
                        src={skill.image_link}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Accomplishments</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <GlassmorphismCard className="p-6 text-center h-full hover:border-blue-500/30 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <achievement.icon
                      className={achievement.color}
                      size={32}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Workflow</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <GlassmorphismCard className="p-4 md:p-8 max-w-6xl mx-auto">
            <VerticalTimeline animate={true} lineColor="#3b82f6">
              {workflow.map((step, index) => (
                <VerticalTimelineElement
                  key={step.step}
                  className="vertical-timeline-element--work"
                  date={`Step ${index + 1}`}
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(255, 255, 255, 0.1)",
                  }}
                  iconStyle={{
                    background: iconMap[index]?.bg || "#3b82f6",
                    color: "#fff",
                    boxShadow: `0 0 20px ${iconMap[index]?.bg || "#3b82f6"}40`,
                  }}
                  icon={iconMap[index]?.icon || <Star size={24} />}
                >
                  <h3 className="vertical-timeline-element-title text-white text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </VerticalTimelineElement>
              ))}

              <VerticalTimelineElement
                iconStyle={{ 
                  background: "rgb(34,197,94)", 
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(34,197,94,0.4)"
                }}
                icon={<Star size={24} />}
              />
            </VerticalTimeline>
          </GlassmorphismCard>
        </motion.div>

        {/* CTA Section */}
        <CTASection
          title="Let's Create Together"
          description="Delivering polished, impactful videos tailored to your vision."
          buttonText="Start a Project"
          href="/contact"
        />
      </div>
    </div>
  );
}
