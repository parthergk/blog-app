import {
  GithubIcon,
  InstagramIcon,
  Linkedin,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-[65px] md:mt-20 2xl:mt-28 ">
      <div className=" flex flex-col gap-2 sm:flex-row justify-between items-center px-5 py-3 border-t border-neutral-700">
        <div className=" flex justify-center items-center gap-4">
          <a href="/">
            <GithubIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
          <a href="/">
            <Linkedin />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
        </div>
        <div className=" text-lg">Copyright 2025 © Parther</div>
      </div>
    </div>
  );
};

export default Footer;
