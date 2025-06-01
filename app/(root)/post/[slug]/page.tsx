import CodeCard from "@/components/cards/CodeCard";
import CodeExplanation from "@/components/post/CodeExplanation";
import DemoCard from "@/components/cards/DemoCard";
import Note from "@/components/post/Note";
import OutPutCard from "@/components/cards/OutPutCard";
import PostHeader from "@/components/post/PostHeader";
import Tip from "@/components/post/Tip";
import BlogCard from "@/components/cards/BlogCard";
import { posts } from "@/data/posts";
import { JSX } from "react";

type Block =
  | { type: "DemoCard"; props: React.ComponentProps<typeof DemoCard> }
  | { type: "CodeExplanation"; props: React.ComponentProps<typeof CodeExplanation>;}
  | { type: "CodeCard"; props: React.ComponentProps<typeof CodeCard> }
  | { type: "OutPutCard"; props: React.ComponentProps<typeof OutPutCard> }
  | { type: "Note"; props: React.ComponentProps<typeof Note> }
  | { type: "Tip"; props: React.ComponentProps<typeof Tip> };

const componentMap:Record<Block["type"], (prop: any)=> JSX.Element> = {
  DemoCard: (props) => <DemoCard {...props} />,
  CodeExplanation: (props) => <CodeExplanation {...props} />,
  CodeCard: (props) => <CodeCard {...props} />,
  OutPutCard: (props) => <OutPutCard {...props} />,
  Note: (props) => <Note {...props} />,
  Tip: (props) => <Tip {...props} />,
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const slug = await params.slug;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <div className="text-center py-10">Post not found</div>;

  const related = posts.slice(0, 2)
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
        <PostHeader
          title={post.title}
          desc={post.description}
          date={post.date}
        />
        {(post.content as Block[]).map((block, index) => {
          const Component = componentMap[block.type];
          return <div key={index}>{Component(block.props)}</div>;
        })}
      </div>
      <div className="pt-12 md:pt-16 lg:pt-24 px-5 md:px-7 ">
        <h1 className="text-2xl mb-5">Related Animations</h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 ">
          {related.map((item) => (
            <BlogCard key={item.id} slug={item.slug} img={item.img} title={item.title} desc={item.description} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
