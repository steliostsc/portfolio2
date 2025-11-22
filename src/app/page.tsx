"use client";

import { fetchTikTokThumbnail } from "@/lib/helper";
import ProjectCard from "@/components/ProjectCard";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { Play, Clock, User, ArrowRight, Loader2 } from "lucide-react";
import {
  getVideoProjectsByCategory,
  getVideoCategoriesWithCountIncludingAll,
} from "@/lib/helper";
import type { VideoProject } from "@/types/videos";

const categories = getVideoCategoriesWithCountIncludingAll();

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProjects, setDisplayedProjects] = useState<VideoProject[]>([]);
  const [allProjects, setAllProjects] = useState<VideoProject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // TikTok thumbnails stored OUTSIDE the map → correct!
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
    }, 500);
  }, [currentPage, allProjects, loading, hasMore]);

  // Infinite scroll (for all categories except All)
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCategory, loadMoreProjects]);

  // Load TikTok thumbnails once per project
  /*useEffect(() => {
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
  }, [displayedProjects, tiktokThumbs]);*/

  useEffect(() => {
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
}, [displayedProjects, tiktokThumbs]);




  return (
    <div className="min-h-screen">
      <MouseMoveEffect />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              I produce short-form video content with precise editing, fluid
              transitions, and refined audio.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(({ category, count }) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className={`relative border cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#020817] text-white border-white"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                {category}
                <span className="absolute top-[-6px] right-[-6px] bg-slate-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {count}
                </span>
              </Button>
            ))}
          </motion.div>

          {/* PROJECT GRID — CLEAN, FIXED, NO HOOKS INSIDE */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              className="text-center mt-12"
            >
              <Button
                onClick={loadMoreProjects}
                disabled={loading}
                size="lg"
                className="border cursor-pointer"
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
