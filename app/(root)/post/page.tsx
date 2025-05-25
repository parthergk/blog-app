"use client";
import CodeBlock from "@/components/CodeBlock";
import Note from "@/components/Note";
import Tip from "@/components/Tip";
import { Copy, CopyCheck } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const BlogPost = () => {
  const [isCopy, setIsCopy] = useState(false);
  const timeoutRef = useRef(null);

  async function handleCopy() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    await navigator.clipboard.writeText("gaurav kumar");
    setIsCopy(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopy(false);
      timeoutRef.current = null;
    }, 2000);
  }

  useEffect(()=>{
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  },[]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 font-serif mt-12 md:mt-16 lg:mt-24">
      <div
        className=" hidden dark:block h-full min-h-screen overflow-hidden absolute top-0 left-0 right-0 z-0 pointer-events-none flex-none order-[1008]"
        style={{
          WebkitMask:
            "linear-gradient(0deg, rgba(0, 0, 0, 0) 7.5%, rgba(0, 0, 0, 1) 86%)",
          mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 7.5%, rgba(0, 0, 0, 1) 86%)",
        }}
      >
        <div
          className=" w-full h-full opacity-5"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
            backgroundSize: "128px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
      <h1 className="dark:text-white text-2xl sm:text-3xl lg:text-[40px] text-neutral-800 leading-tight">
        Creating Smooth Page
        <br />
        Transitions with Framer Motion
      </h1>
      <p className="text-sm text-black/40 dark:text-white/50 mt-2">
        April 8, 2025
      </p>

      <p className="mt-6 text-sm sm:text-base text-black/60 dark:text-white/60">
        Page transitions can significantly enhance the user experience of your
        React application. With Framer Motion, you can create beautiful,
        physics-based animations with minimal code. In this tutorial, we'll
        build a smooth page transition effect that you can easily integrate into
        your Next.js or React projects.
      </p>

      <h2 className="text-2xl mt-10">See It In Action</h2>
      <div className="bg-gray-200 h-64 rounded-lg mt-4"></div>

      <div className="flex gap-4 mt-4">
        <button className="text-base bg-neutral-200 py-0.5 dark:bg-neutral-900 rounded-[5px] px-2 flex justify-center items-center cursor-pointer  shadow-neutral-400 dark:shadow-neutral-950 dark:hover:shadow-neutral-900 shadow-lg hover:shadow-neutral-500 hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out">
          Live Demo
        </button>
        <button className="text-base bg-neutral-200 py-0.5 dark:bg-neutral-900 rounded-[5px] px-2 flex justify-center items-center cursor-pointer  shadow-neutral-400 dark:shadow-neutral-950 dark:hover:shadow-neutral-900 shadow-lg hover:shadow-neutral-500 hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out">
          Source Code
        </button>
      </div>

      <h2 className="text-2xl mt-10">Understanding Animation Basics</h2>
      <p className="mt-4 text-sm sm:text-base text-black/60 dark:text-white/60">
        Before diving into the code, let's understand the core concepts of
        animations in Framer Motion. The library is built around the motion
        component, which is a wrapper that enables animations for any HTML or
        SVG element.
      </p>
      <ul className="list-disc text-sm sm:text-base ml-5 mt-2 text-black/60 dark:text-white/60">
        <li>Access server-only resources (databases, file systems, etc.)</li>
        <li>Keep large dependencies on the server</li>
        <li>Automatically implement code-splitting</li>
        <li>Avoid sending unnecessary JavaScript to the client</li>
      </ul>

      <h2 className="text-2xl mt-10">Setting Up Framer Motion</h2>
      <p className="mt-4 text-sm sm:text-base text-black/60 dark:text-white/60">
        First, let's install Framer Motion in your React project:
      </p>

      <div className="border border-neutral-500 rounded mt-3">
  <div className="p-2 flex justify-between items-center dark:text-white text-black/80">
    <span>&lt;&gt; components/page-transition.tsx</span>
    {isCopy ? (
      <CopyCheck className="h-6 w-6 cursor-pointer" />
    ) : (
      <Copy className="h-6 w-6 cursor-pointer" onClick={handleCopy} /> 
    )}
  </div>
  <CodeBlock />
</div>


      <h2 className="text-xl mt-10">We should have something like this:</h2>
      <div className="bg-gray-200 h-64 rounded-lg mt-4"></div>

      <Note />
      <Tip />
    </div>
  );
};

export default BlogPost;
