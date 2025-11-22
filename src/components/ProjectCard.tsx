"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import type { VideoProject } from "@/types/videos";

export default function ProjectCard({
  project,
  index,
  tiktokThumb
}: {
  project: VideoProject;
  index: number;
  tiktokThumb: string | null;
}) {
  const thumbSrc =
    project.video_link.includes("youtube.com") ||
    project.video_link.includes("youtu.be")
      ? `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
      : project.video_link.includes("tiktok.com")
      ? tiktokThumb
      : "/placeholder.svg";

  return (
    <Link href={`/project/${project.id}`}>
      <GlassmorphismCard className="p-6 h-full cursor-pointer group">
        <div className="space-y-4 h-full flex flex-col">

          <div className="relative overflow-hidden rounded-lg h-48 bg-black">
            {!thumbSrc && (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Loading...
              </div>
            )}

            {thumbSrc && (
              <Image
                src={thumbSrc}
                alt={project.video_title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play size={40} className="text-white" />
            </div>

            {project.duration && (
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {project.duration}
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
              {project.video_title}
            </h3>

            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {project.video_description}
            </p>

            <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <User size={12} />
                <span>{project.client_name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={12} />
                <span>{new Date(project.publish_date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.slice(0, 3).map((cat) => (
                <Badge key={cat} variant="outline" className="text-xs border-gray-600 text-gray-300">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src={project.client_image || "/placeholder.svg"}
                  alt={project.client_name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-400">{project.client_name}</span>
              </div>

              <Button size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Play size={14} className="mr-1" />
                Watch Now
              </Button>
            </div>
          </div>

        </div>
      </GlassmorphismCard>
    </Link>
  );
}
