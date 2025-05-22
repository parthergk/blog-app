import React from "react";
import TypeCard from "./TypeCard";

const BlogType = () => {
    const array = ["Article", "Scroll", "Hover", "Mouse"]
  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className=" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center mb-5">Types of articles</div>
      <div className=" w-full py-3">
        {
            array.map((item)=><TypeCard key={item} name={item}/>)
        }
      </div>
    </div>
  );
};

export default BlogType;
