import React, { useRef, useState } from "react";
import ImageComparison from "./components/ImageComparison";

const index = () => {
  const isDragging = useRef(false);
  const [translateX, setTranslateX] = useState(187.5);
  const startX = useRef(0);

  const containerWidth = 375;
  const barWidth = 4;

  function handleMouseDown(e) {
    isDragging.current = true;
    startX.current = e.clientX - translateX;
  }

  function handleMouseMove(e) {
    if (isDragging.current) {
      const newTranslateX = e.clientX - startX.current;
      const constrainedX = Math.max(
        0,
        Math.min(newTranslateX, containerWidth - barWidth)
      );
      setTranslateX(constrainedX);
    }
  }

  function handleMouseUp() {
    isDragging.current = false;
  }

  // Touch event handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleMouseDown(touch.clientX);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };
  return (
    <div className="bg-[#030712] p-5  flex justify-center items-center m-auto">
      <div className="h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/[2.5%] bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10">
        <div
          className=" w-full overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Draggable Divider */}
          <div
            className="absolute inset-y-0 z-10 w-1 bg-sky-400 cursor-ew-resize"
            style={{ transform: `translateX(${translateX}px)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          ></div>

          <ImageComparison translateX={translateX} />
        </div>
      </div>
    </div>
  );
};

export default index;
