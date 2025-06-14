import React, { useRef, useState } from "react";
import ImageComparison from "./components/ImageComparison";

const index = () => {
  const isDragging = useRef(false);
  const [translateX, setTranslateX] = useState(187.5);
  const startX = useRef(0);

  const containerWidth = 375;
  const barWidth = 4;

  function handleStart(clientX: number) {
    isDragging.current = true;
    startX.current = clientX - translateX;
  }

  function handleMove(clientX: number) {
    if (isDragging.current) {
      const newTranslateX = clientX - startX.current;
      const constrainedX = Math.max(
        0,
        Math.min(newTranslateX, containerWidth - barWidth)
      );
      setTranslateX(constrainedX);
    }
  }

  function handleEnd() {
    isDragging.current = false;
  }

  // Mouse Event Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch Event Handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <div className="bg-[#030712] p-5 flex justify-center items-center m-auto">
      <div className="h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/[2.5%] bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10">
        <div
          className="w-full overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
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
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          ></div>

          <ImageComparison translateX={translateX} />
        </div>
      </div>
    </div>
  );
};

export default index;
