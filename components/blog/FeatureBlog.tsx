import { getAllPosts } from "@/lib/blog";
import FeatureBogCard from "../cards/FeatureBogCard";

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  img: string;
  videoUrl: string;
  isFeatured?: boolean;
}

const FeatureBlog = () => {
  const posts:Post[] = getAllPosts();
  const featureBlog = posts.find((blog) => blog.isFeatured);

  return (
    <div className="py-12 md:py-16 lg:py-24 px-5 md:px-7">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Feature Article
        </h1>
      </div>
      <FeatureBogCard featureBlog = {featureBlog}/>
    </div>
  );
};

export default FeatureBlog;
