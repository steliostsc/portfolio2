"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./magnetic-button";
import { useLenis } from "lenis/react";

export default function Hero() {
    const lenis = useLenis();
    const shouldReduceMotion = useReducedMotion();

    const scrollToProjects = (e?: React.MouseEvent) => {
        e?.preventDefault();
        
        // Fallback if Lenis not ready
        if (!lenis) {
            const element = document.getElementById("projects");
            if (element) {
                const offset = 100;
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
            return;
        }

        lenis.scrollTo("#projects", {
            duration: 1.2, // Reduced from 2s
            offset: -100,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
    };

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Ambience - No animation on mobile */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] md:animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" }}
                    className="inline-block mb-6"
                >
                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-blue-200 tracking-widest uppercase">
                        Available for Hire
                    </div>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    <motion.span
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50, rotate: shouldReduceMotion ? 0 : 2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ 
                            duration: shouldReduceMotion ? 0.3 : 0.8, 
                            ease: "easeOut", 
                            delay: shouldReduceMotion ? 0 : 0.1 
                        }}
                        className="block bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
                    >
                        CINEMATIC
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50, rotate: shouldReduceMotion ? 0 : -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ 
                            duration: shouldReduceMotion ? 0.3 : 0.8, 
                            ease: "easeOut", 
                            delay: shouldReduceMotion ? 0.05 : 0.3 
                        }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 pb-4"
                    >
                        EDITOR
                    </motion.span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: shouldReduceMotion ? 0.3 : 0.6, 
                        delay: shouldReduceMotion ? 0.1 : 0.6 
                    }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    Turning raw footage into visual stories — with style, precision, and a touch of <span className="text-white font-medium">cinematic magic</span>.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: shouldReduceMotion ? 0.3 : 0.6, 
                        delay: shouldReduceMotion ? 0.15 : 0.8 
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <MagneticButton>
                        <button
                            onClick={scrollToProjects}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer will-change-transform"
                        >
                            <span className="relative z-10 flex items-center">
                                View Work
                            </span>
                        </button>
                    </MagneticButton>

                    <MagneticButton>
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 will-change-transform"
                        >
                            Contact Me
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    delay: shouldReduceMotion ? 0.2 : 1.5, 
                    duration: shouldReduceMotion ? 0.3 : 1 
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <button
                    onClick={scrollToProjects}
                    className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
                    aria-label="Scroll to projects"
                >
                    <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="animate-bounce" size={20} />
                </button>
            </motion.div>
        </section>
    );
}
