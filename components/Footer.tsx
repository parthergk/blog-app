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
          <Link href="https://github.com/parthergk">
            <GithubIcon />
          </Link>
          <Link href="https://x.com/parther_gk">
            <TwitterIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/gaurav-kumar-b5a76626b/">
            <Linkedin />
          </Link>
          <Link href="https://www.instagram.com/parther_gk">
            <InstagramIcon />
          </Link>
        </div>
        <div className=" text-lg">Copyright 2025 © Parther</div>
      </div>
    </div>
  );
};

export default Footer;
