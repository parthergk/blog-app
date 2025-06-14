import React, { useState } from "react";
import ImageComparison from "./components/ImageComparison";

const index = () => {
  const [translateX, setTranslateX] = useState(187.5);
  return (
    <div className="bg-[#030712] p-5  flex justify-center items-center m-auto">
      <div className="h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/[2.5%] bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10">
        <div className=" w-full overflow-hidden">

          {/* Draggable Divider */}
          <div
            className="absolute inset-y-0 z-10 w-1 bg-sky-400 cursor-ew-resize"
            style={{ transform: `translateX(${translateX}px)` }}
          ></div>
          
          <ImageComparison translateX={translateX} />
        </div>
      </div>
    </div>
  );
};

export default index;
