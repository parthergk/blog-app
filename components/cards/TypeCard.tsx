import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  content: any[];
}


interface Prop {
  name: string;
  blogs: Blog[];
  Itemindex: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const TypeCard: React.FC<Prop> = ({
  name,
  blogs,
  Itemindex,
  openIndex,
  setOpenIndex,
}) => {
  const handleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log("blogs", blogs);
  

  return (
    <div className="w-full border-b border-neutral-700 pb-4 mb-6 pr-3">
      <button
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={() => handleAccordion(Itemindex)}
      >
        <div className="flex gap-3 justify-center items-center">
          <div className="w-8 h-8 bg-neutral-700 rounded-[5px] shadow-lg shadow-neutral-600 dark:shadow-neutral-950"></div>
          <div className="text-lg sm:text-xl">{name}</div>
        </div>
        <div className="text-lg sm:text-xl">
          {openIndex === Itemindex ? <ChevronDown /> : <ChevronRight />}
        </div>
      </button>
      {openIndex === Itemindex && (
        <div className=" flex flex-col mt-5 px-4 gap-5 text-sm sm:text-base text-black/60 dark:text-white/60 w-full">
          {
            blogs.map((blog)=> <Link
            key={blog.id}
            href={`/post/${blog.slug}`}
            className="hover:bg-neutral-400 hover:text-black px-2 rounded-sm underline"
          >{`Blog : ${blog.title}`}</Link>)
          }
        </div>
      )}
    </div>
  );
};

export default TypeCard;
