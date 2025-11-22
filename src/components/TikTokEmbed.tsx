"use client"; // MUST be first line

import React from "react";

interface TikTokEmbedProps {
  videoLink: string;
  width?: number;
  height?: number;
}

export default function TikTokEmbed({
  videoLink,
  width = 325,
  height = 580,
}: TikTokEmbedProps) {
  // Extract TikTok video ID
  const match = videoLink.match(/video\/(\d+)/);
  const videoId = match ? match[1] : null;

  if (!videoId) return <div>Invalid TikTok link</div>;

  return (
    <div className="flex justify-center w-full my-4">
      <iframe
        src={`https://www.tiktok.com/embed/${videoId}`}
        width={width}
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        frameBorder="0"
        scrolling="no"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
