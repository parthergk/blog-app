"use client";
import React, { useMemo, useState } from "react";
import TypeCard from "./cards/TypeCard";
import { posts } from "@/data/posts";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  type: string;
  isFeatured: boolean;
  img: string;
  videoUrl: string;
}

const BlogType: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const blogByTypes = useMemo(()=>{
    return posts.reduce<Record<string, Blog[]>>((acc, blog) => {      
    if (!acc[blog.type]) {
      acc[blog.type] = [];
    }
    acc[blog.type].push(blog);
    return acc;
  }, {})}, []); 

  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Types of articles
        </h1>
      </div>
      <div className="w-full">
        {Object.entries(blogByTypes).map(([type, blogs], index) => (
          <TypeCard
            key={type}
            name={type}
            blogs={blogs}
            Itemindex={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogType;
