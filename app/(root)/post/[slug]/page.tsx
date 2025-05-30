import CodeCard from "@/components/cards/CodeCard";
import CodeExplanation from "@/components/post/CodeExplanation";
import DemoCard from "@/components/cards/DemoCard";
import Note from "@/components/post/Note";
import OutPutCard from "@/components/cards/OutPutCard";
import PostHeader from "@/components/post/PostHeader";
import Tip from "@/components/post/Tip";
import BlogCard from "@/components/cards/BlogCard";

const BlogPost = async ({params }: {params:{slug:string}}) => {
  console.log("props", await params );
  
  const array = [1, 2];
  return (
    <div className="w-full">
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
        <div className="pt-12 md:pt-16 lg:pt-24 px-5 md:px-7 ">
          <h1 className="text-2xl mb-5">Related Animations</h1>
          <div className="flex flex-col md:flex-row items-center justify-between ">
          {array.map((item) => (
            <BlogCard key={item} />
          ))}
          </div>
        </div>
    </div>
  );
};

export default BlogPost;
