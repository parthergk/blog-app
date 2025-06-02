import Head from "next/head";
import CodeCard from "@/components/cards/CodeCard";
import CodeExplanation from "@/components/post/CodeExplanation";
import DemoCard from "@/components/cards/DemoCard";
import Note from "@/components/post/Note";
import OutPutCard from "@/components/cards/OutPutCard";
import PostHeader from "@/components/post/PostHeader";
import Tip from "@/components/post/Tip";
import BlogCard from "@/components/cards/BlogCard";
import { getAllPosts } from "@/lib/blog";

type Params = Promise<{ slug: string }>;

type Block =
  | { type: "DemoCard"; props: React.ComponentProps<typeof DemoCard> }
  | {
      type: "CodeExplanation";
      props: React.ComponentProps<typeof CodeExplanation>;
    }
  | { type: "CodeCard"; props: React.ComponentProps<typeof CodeCard> }
  | { type: "OutPutCard"; props: React.ComponentProps<typeof OutPutCard> }
  | { type: "Note"; props: React.ComponentProps<typeof Note> }
  | { type: "Tip"; props: React.ComponentProps<typeof Tip> };

const BlogPost = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <div className="text-center py-10">Post not found</div>;

  const related = posts.slice(0, 2);
  return (
    <>
      <Head>
        <title>{post.seo?.title || post.title}</title>
        <meta name="description" content={post.seo?.description || post.description} />
        <meta name="keywords" content={post.seo?.keywords?.join(", ")} />
        <meta property="og:title" content={post.seo?.title || post.title} />
        <meta property="og:description" content={post.seo?.description || post.description}/>
        <meta property="og:image" content={post.seo?.image || post.img} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo?.title} />
        <meta name="twitter:description" content={post.seo?.description} />
        <meta name="twitter:image" content={post.seo?.image} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.slug}`} />
      </Head>

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
            switch (block.type) {
              case "DemoCard":
                return <DemoCard key={index} {...block.props} />;
              case "CodeExplanation":
                return <CodeExplanation key={index} {...block.props} />;
              case "CodeCard":
                return <CodeCard key={index} {...block.props} />;
              case "OutPutCard":
                return <OutPutCard key={index} {...block.props} />;
              case "Note":
                return <Note key={index} {...block.props} />;
              case "Tip":
                return <Tip key={index} {...block.props} />;
              default:
                return null;
            }
          })}
        </div>
        <div className="pt-12 md:pt-16 lg:pt-24 px-5 md:px-7 ">
          <h1 className="text-2xl mb-5">Related Animations</h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 ">
            {related.map((item) => (
              <BlogCard
                key={item.id}
                videoUrl={item.videoUrl}
                slug={item.slug}
                img={item.img}
                title={item.title}
                desc={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
