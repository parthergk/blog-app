import Link from "next/link";
import React from "react";

const FeatureBlog = () => {
  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className=" text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h1 className=" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Feature Article
        </h1>
      </div>
      <Link href="/">
      <div className=" flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className=" w-full flex flex-col gap-3">
          <h1 className=" dark:text-white text-2xl sm:text-3xl lg:text-[40px] text-neutral-800 leading-tight">
            How to build a flip text animation
          </h1>
          <p className=" text-sm sm:text-base text-black/60 dark:text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            minima accusamus? Quod suscipit vero placeat beatae, possimus magni
            officia laborum!
          </p>
          <span className=" text-sm sm:text-base text-black/60 dark:text-white/60">
            May 1, 2025
          </span>
        </div>

        <div className=" w-full h-60 md:h-64 bg-neutral-700 "></div>
      </div>
      </Link>
    </div>
  );
};

export default FeatureBlog;
