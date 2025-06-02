"use client";
import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const FeatureBlog = () => {
  const featureBlog = posts.find((blog) => blog.isFeatured);

  const [isImg, setIsImg] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsImg(false);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsImg(true);
    }
  };

  if (!featureBlog || !featureBlog.img || !featureBlog.videoUrl) {
    return null;
  }

  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Feature Article
        </h1>
      </div>

      <Link href={`/post/${featureBlog.slug}`}>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="w-full flex flex-col gap-3">
            <h1 className="dark:text-white text-2xl sm:text-3xl lg:text-[40px] text-neutral-800 leading-tight">
              {featureBlog.title}
            </h1>
            <p className="text-sm sm:text-base text-black/60 dark:text-white/60">
              {featureBlog.description}
            </p>
            <span className="text-sm sm:text-base text-black/60 dark:text-white/60">
              {featureBlog.date}
            </span>
          </div>

          <div
            className="relative w-full h-60 min-w-xs md:h-64 bg-neutral-700"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              alt="img"
              src={featureBlog.img}
              fill
              className={`object-contain ${isImg ? "block" : "hidden"}`}
            />
            <video
              ref={videoRef}
              src={featureBlog.videoUrl}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className={`w-full h-full object-cover ${isImg ? "hidden" : "block"}`}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureBlog;
