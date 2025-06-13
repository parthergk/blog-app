import React from "react";

const index = () => {
  return (
    <div className="bg-[#030712] p-5  flex justify-center items-center m-auto">
      <div className="h-112 p-4 sm:p-8 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/[2.5%] bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10">
        <div className=" w-full overflow-hidden">
          <div className="isolate flex h-full w-full items-center justify-center">
            <div className="h-[30.5rem] w-[375px] relative grid grid-cols-1 grid-rows-1 overflow-hidden rounded-t-4xl bg-gray-950/10 outline outline-gray-950/10 dark:outline-white/10">
              <div className="col-start-1 row-start-1">
                <img
                  src="/DualThemeToggleSlider/img/light.png"
                  className={`absolute inset-0`}
                  alt="Light"
                />
              </div>
              <div className="col-start-1 row-start-1">
                <img src="/DualThemeToggleSlider/img/dark.png" alt="Dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
