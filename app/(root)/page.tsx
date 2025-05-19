import React from "react";

const page = () => {
  return (
    <div className=" relative pt-[76px] md:pt-24 px-5  md:px-7 min-h-screen w-auto z-10">
      <div className=" min-h-[min-content] pt-32 flex justify-center">
        <div className=" min-h-[min-content] max-w-6xl w-full flex flex-col justify-center gap-4 text-neutral-700">
          <div className=" flex justify-center flex-col md:flex-row gap-3 items-center">
            <div className=" flex gap-3 justify-center items-center">
              <h1 className=" inline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Creative UI
              </h1>
              <div className=" inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400 rotate-12"></div>{" "}
            </div>
            <div className=" flex gap-2.5">
              <h1 className="inline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className=" text-neutral-500">Components</span>
              </h1>
              <h1 className="inline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                With
              </h1>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-center items-center gap-2">
            <div className=" flex gap-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className=" text-[#767676]">Tailwind</span> CSS
                <span className=" inline sm:hidden">,</span>
                <span className=" hidden sm:inline"> &</span>
              </h1>
              <div className=" flex justify-center items-center relative">
                <div className="inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400  bg-gray-300"></div>{" "}
                <div className="relative -left-1.5 inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400 rotate-1 bg-gray-300"></div>{" "}
                <div className="relative -left-2.5 bottom-0.5 inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400 -rotate-6 bg-gray-300"></div>{" "}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              Framer Motion.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
