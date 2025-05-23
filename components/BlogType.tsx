import React from "react";
import TypeCard from "./TypeCard";

const BlogType = () => {
  const array = ["Article", "Scroll", "Hover", "Mouse"];
  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className=" text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h1 className=" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Types of articles
        </h1>
      </div>
      <div className=" w-full">
        {array.map((item) => (
          <TypeCard key={item} name={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogType;
