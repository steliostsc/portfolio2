"use client";

import { fetchTikTokThumbnail } from "@/lib/helper";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/hero";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ArrowRight, Loader2, Filter } from "lucide-react";
import {
    getVideoProjectsByCategory,
    getVideoCategoriesWithCountIncludingAll,
} from "@/lib/helper";
import type { VideoProject } from "@/types/videos";

const categories = getVideoCategoriesWithCountIncludingAll();

export default function HomePage() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [displayedProjects, setDisplayedProjects] = useState<VideoProject[]>([]);
    const [allProjects, setAllProjects] = useState<VideoProject[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [showCategories, setShowCategories] = useState(false);
    const [tiktokThumbs, setTikTokThumbs] = useState<Record<string, string>>({});

    const ITEMS_PER_PAGE = 9;

    // Load projects when category changes
    useEffect(() => {
        const projects = getVideoProjectsByCategory(selectedCategory);
        setAllProjects(projects);
        setDisplayedProjects(projects.slice(0, ITEMS_PER_PAGE));
        setCurrentPage(1);
        setHasMore(projects.length > ITEMS_PER_PAGE);
    }, [selectedCategory]);

    // Load more projects
    const loadMoreProjects = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);
        setTimeout(() => {
            const nextPage = currentPage + 1;
            const start = (nextPage - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;

            const newProjects = allProjects.slice(start, end);
            setDisplayedProjects((prev) => [...prev, ...newProjects]);

            setCurrentPage(nextPage);
            setHasMore(end < allProjects.length);
            setLoading(false);
        }, 300); // Reduced from 500ms
    }, [currentPage, allProjects, loading, hasMore]);

    // Infinite scroll
    useEffect(() => {
        if (selectedCategory === "All") return;

        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 1000
            ) {
                loadMoreProjects();
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedCategory, loadMoreProjects]);

    // Fetch TikTok thumbnails (optimized with debounce)
    useEffect(() => {
        const timer = setTimeout(() => {
            displayedProjects.forEach((project) => {
                if (
                    project.video_link.includes("tiktok.com") &&
                    !tiktokThumbs[project.id]
                ) {
                    fetchTikTokThumbnail(project.video_link).then((thumb) => {
                        if (thumb) {
                            setTikTokThumbs((prev) => ({
                                ...prev,
                                [project.id]: thumb,
                            }));
                        }
                    });
                }
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [displayedProjects, tiktokThumbs]);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <MouseMoveEffect />

            <Hero />

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut" }}
                        className="text-center mb-16 relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                        <h2 className="text-4xl md:text-6xl font-bold mt-0 md:mt-20 mb-3 text-white tracking-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Projects</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            I produce short-form video content with precise editing, fluid
                            transitions, and refined audio.
                        </p>
                    </motion.div>

                    {/* Categories Toggle Button */}
                    <motion.div
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <button
                            onClick={() => setShowCategories(!showCategories)}
                            className="relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2 w-[200px] justify-center will-change-transform"
                        >
                            <Filter size={16} />
                            {showCategories ? "Hide Categories" : "Show Categories"}
                        </button>
                    </motion.div>

                    {/* Category Filter Buttons */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: showCategories ? "auto" : 0,
                            opacity: showCategories ? 1 : 0,
                            marginBottom: showCategories ? 64 : 0
                        }}
                        transition={{
                            duration: 0.4, // Reduced from 0.5
                            ease: [0.4, 0, 0.2, 1],
                            opacity: { duration: 0.2 }
                        }}
                        style={{ overflow: "visible" }}
                    >
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map(({ category, count }) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`
                                        relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 will-change-transform
                                        ${selectedCategory === category
                                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                                        }
                                    `}
                                >
                                    {category}
                                    <span className={`
                                        ml-2 text-[10px] px-1.5 py-0.5 rounded-full transition-colors
                                        ${selectedCategory === category ? "bg-black text-white" : "bg-white/10 text-gray-400"}
                                    `}>
                                        {count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                    >
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: shouldReduceMotion ? 0.3 : 0.8, 
                                    ease: "easeOut", 
                                    delay: shouldReduceMotion ? 0 : index * 0.05 // Reduced stagger
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    tiktokThumb={tiktokThumbs[project.id] || null}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Load More Button */}
                    {selectedCategory === "All" && hasMore && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mt-20"
                        >
                            <Button
                                onClick={loadMoreProjects}
                                disabled={loading}
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 font-medium transition-all hover:scale-105 will-change-transform"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    <>
                                        Load More Projects
                                        <ArrowRight className="ml-2" size={16} />
                                    </>
                                )}
                            </Button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
