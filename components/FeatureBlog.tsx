import React from "react";

const FeatureBlog = () => {
  return (
    <div className="pt-[65px] md:pt-20 2xl:pt-28 px-5 md:px-7">
      <div className=" text-center mb-20 text-5xl">Feature Article</div>
      <div className=" flex gap-4">
        <div className=" flex flex-col gap-5 w-full">
          {/* <div className=" w-full h-1 bg-neutral-800 dark:bg-white"></div> */}
          <div className=" flex flex-col gap-3 px-3">
            <h1 className=" text-[40px] text-neutral-800">
              How to build a flip text animation
            </h1>
            <p className=" text-base text-black/60 dark:text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, minima accusamus? Quod suscipit vero placeat beatae,
              possimus magni officia laborum!
            </p>
            <span className=" text-base text-black/60 dark:text-white/60">
              May 1, 2025
            </span>
          </div>
        </div>
        <div className=" w-full bg-neutral-700"></div>
      </div>
    </div>
  );
};

export default FeatureBlog;
