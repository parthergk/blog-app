import React from "react";
import BlogCard from "./BlogCard";

const LatestBlog = () => {
    const array = [1,2,3,4,5,6,7];
  return (
    <div className="pt-[65px] md:pt-20 2xl:pt-28 px-5 md:px-7">
      <h1 className=" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-5">Latest Blogs</h1>
      <div className=" flex flex-wrap justify-between">
        {
            array.map((item)=> <BlogCard key={item}/>)
        }
      </div>
    </div>
  );
};

export default LatestBlog;
