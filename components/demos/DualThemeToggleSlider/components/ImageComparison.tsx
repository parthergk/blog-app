import React from "react";

const ImageComparison = ({ translateX }: { translateX: number }) => {
  return (
    <div className="isolate flex h-full w-full items-center justify-center">
      <div className="h-[30.5rem] w-[375px] relative grid grid-cols-1 grid-rows-1 overflow-hidden rounded-t-4xl bg-gray-950/10 outline outline-gray-950/10 dark:outline-white/10">
        <div className="col-start-1 row-start-1">
          <img
            src="/DualThemeToggleSlider/img/light.png"
            className={`absolute inset-0`}
            alt="Light"
            style={{clip: `rect(0px, ${translateX - 1}px, 488px, 0px)`,}}
          />
        </div>
        <div className="col-start-1 row-start-1">
          <img src="/DualThemeToggleSlider/img/dark.png" alt="Dark" />
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
