"use client";
import CodeCard from "@/components/CodeCard";
import CodeExplanation from "@/components/CodeExplanation";
import DemoCard from "@/components/DemoCard";
import Note from "@/components/Note";
import OutPutCard from "@/components/OutPutCard";
import PostHeader from "@/components/PostHeader";
import Tip from "@/components/Tip";

const BlogPost = () => {
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
      <PostHeader />
      <DemoCard />
      <CodeExplanation />
      <CodeCard />
      <OutPutCard />
      <Note />
      <Tip />
    </div>
  );
};

export default BlogPost;
