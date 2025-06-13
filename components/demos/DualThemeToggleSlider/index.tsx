import React from "react";
import ImageComparison from "./components/ImageComparison";

const index = () => {
  return (
    <div className="bg-[#030712] p-5  flex justify-center items-center m-auto">
      <div className="h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/[2.5%] bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10">
        <div className=" w-full overflow-hidden">
          <ImageComparison/>
        </div>
      </div>
    </div>
  );
};

export default index;
