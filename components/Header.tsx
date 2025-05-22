"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme");
    console.log("savedThem", savedTheme);
    if (savedTheme === "light") {
      setTheme("light");
    }else{
      setTheme("dark");
    }
  },[]);

  useEffect(()=>{
    const htmlElement = document.documentElement;
    if (theme=="dark") {
      htmlElement.classList.add("dark");
    }else{
      htmlElement.classList.remove("dark");
    }    
    localStorage.setItem("theme", theme);
  },[theme]);

  function handleDarkMode (){
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  }

  return (
    <header className="fixed z-20 w-full flex justify-between items-center p-5 md:px-7 md:py-6">
      <div className="flex justify-center items-center gap-1.5">
        <Image
          alt="logo img"
          src="/img/logo.JPG"
          width={44}
          height={44}
          className=" rounded-[5px] shadow-lg shadow-gray-400 dark:shadow-neutral-700 h-[36px] sm:h-[44px] w-[36px] sm:w-[44px]"
        />
        <span className=" self-end text-lg font-light leading-none">
          Parther
        </span>
      </div>

      {/* mode */}
      <div className="self-end">
        <button onClick={handleDarkMode} className="cursor-pointer text-lg font-light leading-none">
          {theme === "dark" ? "Go Light" : "Go Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
