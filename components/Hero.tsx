import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" relative pt-[65px] md:pt-20 2xl:pt-28 px-5  md:px-7 min-h-screen w-auto z-10">
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
              <div className="relative flex justify-center items-center ">
                <div className=" z-10 hover:z-20 relative inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400 hover:shadow-emerald-500 -rotate-6 hover:rotate-0 hover:scale-110 cursor-pointer bg-gray-300 transition-all duration-150 ease-in-out">
                  <Image
                    alt="logo"
                    src="/img/framer.png"
                    fill
                    sizes="48"
                    className=" object-center object-contain rounded-[5px]"
                  />
                </div>{" "}
                <div className=" z-10 hover:z-20 relative -left-1.5 inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400 hover:shadow-neutral-500 rotate-3 hover:rotate-0 hover:scale-110 cursor-pointer bg-gray-300 transition-all duration-150 ease-in-out">
                  <Image
                    alt="logo"
                    src="/img/next.png"
                    fill
                    sizes="48"
                    className=" object-center object-contain rounded-[5px]"
                  />
                </div>{" "}
                <div className=" z-10 hover:z-20 relative -left-2.5 inline border-2 border-white w-9 h-[34px] md:w-10 md:h-[38px] lg:w-12 lg:h-[46px] rounded-[5px] shadow-lg shadow-gray-400 hover:shadow-blue-500 -rotate-3 hover:rotate-0 hover:scale-110 cursor-pointer bg-gray-300 transition-all duration-150 ease-in-out">
                  <Image
                    alt="logo"
                    src="/img/tailwind.png"
                    fill
                    sizes="48"
                    className=" object-center object-contain rounded-[5px]"
                  />
                </div>{" "}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              Framer Motion.
            </h1>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center mt-7">
        <p className=" text-center text-sm sm:text-lg max-w-xl">
          Hello, I’m Parther Welcome to my creative space I craft dynamic UI
          components with Tailwind CSS & Framer Motion.
        </p>
      </div>

      <div className=" flex justify-center gap-5 mt-8">
        <button className="border-2 rounded-[5px] px-2 flex justify-center items-center cursor-pointer text-lg shadow-neutral-400 shadow-lg hover:shadow-neutral-500 hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out">
          About me
        </button>
        <button className="text-white bg-neutral-900 rounded-[5px] px-2 flex justify-center items-center cursor-pointer text-lg shadow-neutral-400 shadow-lg hover:shadow-neutral-500  hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out">
          Email
        </button>
      </div>
    </div>
  );
};

export default Hero;