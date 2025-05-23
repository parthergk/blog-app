"use client"
import Image from "next/image";
import Link from "next/link";
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
      <Link href="/" className="flex justify-center items-center gap-1.5">
        <Image
          alt="logo img"
          src="/img/logo.JPG"
          width={44}
          height={44}
          className=" rounded-[5px] shadow-lg shadow-neutral-600 dark:shadow-neutral-950 h-[36px] sm:h-[44px] w-[36px] sm:w-[44px]"
        />
        <span className=" self-end text-lg sm:text-xl font-light leading-none">
          Parther
        </span>
      </Link>

      {/* mode */}
      <div className="self-end">
        <button onClick={handleDarkMode} className="cursor-pointer text-lg sm:text-xl font-light leading-none">
          {theme === "dark" ? "Go Light" : "Go Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
