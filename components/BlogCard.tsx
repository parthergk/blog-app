import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className=" w-xl mb-10 ">
        <Link href="/" className="flex flex-col md:flex-row gap-5">
        <div className=" w-full h-60 bg-neutral-700"></div>
        <div className=" w-full flex flex-col gap-5">
          <div className=" w-full h-1 bg-neutral-800 dark:bg-white"></div>
          <div className=" flex flex-col gap-3 px-3">
            <h1 className=" dark:text-white text-2xl text-neutral-800">
              How to build a flip text animation
            </h1>
            <p className=" text-sm sm:text-base text-black/60 dark:text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className=" text-sm sm:text-base text-black/60 dark:text-white/60">
              May 1, 2025
            </span>
          </div>
        </div>
    </Link>
      </div>
  );
};

export default BlogCard;
