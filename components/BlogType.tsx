import React from "react";
import TypeCard from "./TypeCard";

const BlogType = () => {
    const array = ["Article", "Scroll", "Hover", "Mouse"]
  return (
    <div className="pt-[65px] md:pt-20 2xl:pt-28 px-5 md:px-7">
      <div className=" text-center mb-20 text-5xl">Types of articles</div>
      <div className=" w-full p-3">
        {
            array.map((item)=><TypeCard key={item} name={item}/>)
        }
      </div>
    </div>
  );
};

export default BlogType;
