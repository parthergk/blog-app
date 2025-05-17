import Image from "next/image";
import React from "react";

const Header = () => {
  const dark = false;
  return (
    <header className="absolute z-10 w-full flex justify-between items-center p-5 md:px-7 md:py-6">
      {/* logo */}
      <div className="flex justify-center items-center gap-1.5">
        <Image
          alt="logo img"
          src="/img/logo.JPG"
          width={44}
          height={44}
          className=" rounded-[5px] shadow-lg shadow-gray-400 h-[36px] sm:h-[44px] w-[36px] sm:w-[44px]"
        />
        <span className=" self-end text-[16px] sm:text-lg font-light leading-none">
          Parther
        </span>
      </div>

      {/* mode */}
      <div className="self-end">
        <button className="cursor-pointer text-[16px] sm:text-lg font-light leading-none">
          {dark ? "Go Dark" : "Go Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;
