import React from "react";
interface Prop{
  title: string
  desc: string
  date: string
}
const PostHeader:React.FC<Prop> = ({title, desc, date}) => {
  return (
    <div className="mt-10">
      {" "}
      {/* title  */}
      <h1 className="dark:text-white text-2xl sm:text-3xl lg:text-[40px] text-neutral-800 leading-tight">
        {title}
      </h1>
      {/* data  */}
      <p className="text-sm text-black/40 dark:text-white/50 mt-2">
        {date}
      </p>
      {/* description */}
      <p className="mt-6 text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed tracking-wide">
        {desc}
      </p>
    </div>
  );
};

export default PostHeader;
