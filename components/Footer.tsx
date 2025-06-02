import {
  GithubIcon,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-12 md:mt-16 lg:mt-24">
      <div className=" flex flex-col gap-2 sm:flex-row justify-between items-center px-5 py-3 border-t border-neutral-700">
        <div className=" flex justify-center items-center gap-4">
          <Link href="/">
            <GithubIcon />
          </Link>
          <Link href="/">
            <TwitterIcon />
          </Link>
          <Link href="/">
            <Linkedin />
          </Link>
          <Link href="/">
            <InstagramIcon />
          </Link>
        </div>
        <div className=" text-lg">Copyright 2025 © Parther</div>
      </div>
    </div>
  );
};

export default Footer;
