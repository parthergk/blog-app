import React from "react";

const page = () => {
  return (
    <div className=" relative pt-[76px] md:pt-24 px-5  md:px-7 min-h-screen w-auto z-10">
      <div className=" min-h-[min-content] pt-32 flex justify-center">
        <div className=" min-h-[min-content] max-w-6xl w-full flex flex-col justify-center gap-4">
          <div className=" flex justify-center gap-3 items-center">
            <h1 className=" inline text-6xl">Creative UI </h1>
            <div className=" inline border-2 border-white w-12 h-[46px] rounded-[5px] shadow-lg shadow-gray-400 rotate-12"></div>{" "}
            <h1 className=" inline text-6xl"> <span className=" text-neutral-500">Components</span> With </h1>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <h1 className=" text-6xl"><span className=" text-neutral-500">Tailwind</span> CSS & </h1>{" "}
            <div className=" flex relative">
              <div className="inline border-2 border-white w-12 h-[46px] rounded-[5px] shadow-lg shadow-gray-400  bg-gray-300"></div>{" "}
              <div className="relative -left-1.5 inline border-2 border-white w-12 h-[46px] rounded-[5px] shadow-lg shadow-gray-400 rotate-1 bg-gray-300"></div>{" "}
              <div className="relative -left-2.5 bottom-0.5 inline border-2 border-white w-12 h-[46px] rounded-[5px] shadow-lg shadow-gray-400 -rotate-6 bg-gray-300"></div>{" "}
            </div>
            <h1 className=" text-6xl">Framer Motion.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
