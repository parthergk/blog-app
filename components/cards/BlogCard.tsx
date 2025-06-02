"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
interface Prop {
  videoUrl: string;
  slug: string;
  img: string;
  title: string;
  desc: string;
  date: string;
}
const BlogCard: React.FC<Prop> = ({videoUrl, slug, img, title, desc, date }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isImg, setIsImg] = useState(true);

  const handleMouseEnter = ()=>{
    if (videoRef.current) {
      videoRef.current.play();
      setIsImg(false);
    }
  }

  const handleMouseLeave = ()=>{
        if (videoRef.current) {
      videoRef.current.pause();
      setIsImg(true);
    }
  }
  return (
    <div className=" w-full max-w-xl mb-10 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={`/post/${slug}`} className="flex flex-col md:flex-row gap-5">
        <div className=" relative w-full h-60 min-w-72 bg-neutral-700 hover:scale-105 transition-all duration-300 ease-in-out">
          <Image alt="img" src={img} fill className={` object-contain ${isImg ? 'block': 'hidden'}`} />
          <video
          ref = {videoRef}
            src={videoUrl}
            className={` w-full h-full object-cover ${isImg ? 'hidden' : 'block'}`}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
          />

        </div>
        <div className=" w-full flex flex-col gap-5">
          <div className=" w-full h-1 bg-neutral-800 dark:bg-white"></div>
          <div className=" flex flex-col gap-3 px-3">
            <h1 className=" dark:text-white text-2xl text-neutral-800">
              {title}
            </h1>
            <p className=" text-sm sm:text-base text-black/50 dark:text-white/60 line-clamp-2">
              {desc}
            </p>
            <span className=" text-sm sm:text-base text-black/50 dark:text-white/60">
              {date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
