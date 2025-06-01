import Link from "next/link";
import React from "react";

const DemoCard = ({ previewUrl, links }) => {
  console.log("props", previewUrl, links);

  return (
    <div className=" mt-10">
      <h2 className="text-2xl">See It In Action</h2>
      <div className="bg-gray-200 h-64 rounded-lg mt-4"></div>

      <div className="flex gap-4 mt-4">
        {links.map((link) => (
          <Link href={link.url}>
          <button className="text-base bg-neutral-200 py-0.5 dark:bg-neutral-900 rounded-[5px] px-2 flex justify-center items-center cursor-pointer  shadow-neutral-400 dark:shadow-neutral-950 dark:hover:shadow-neutral-900 shadow-lg hover:shadow-neutral-500 hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out">
            {link.label}
          </button></Link>
        ))}
      </div>
    </div>
  );
};

export default DemoCard;
