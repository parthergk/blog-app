import React from "react";
import BlogCard from "./cards/BlogCard";
import { getAllPosts } from "@/lib/blog";

const LatestBlog = () => {
  const posts = getAllPosts();
  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className=" mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h1 className=" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Latest Blogs
        </h1>
      </div>
      <div className=" grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard  key={post.id} videoUrl={post.videoUrl} slug={post.slug} img={post.img} title={post.title} desc = {post.description} date= {post.date} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
