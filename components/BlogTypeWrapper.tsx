import { getAllPosts } from "@/lib/blog";
import BlogTypeClient from "./BlogTypeClient";

interface Blog {
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

const BlogTypeWrapper = async () => {
  const posts: Blog[] = await getAllPosts();

  return <BlogTypeClient posts={posts} />;
};

export default BlogTypeWrapper;
