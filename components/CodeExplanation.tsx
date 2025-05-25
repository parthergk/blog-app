import React from "react";

const CodeExplanation = () => {
  return (
    <div className=" mt-10">
      {" "}
      <h2 className="text-2xl">Understanding Animation Basics</h2>
      <p className="mt-4 text-sm sm:text-base text-black/60 dark:text-white/60">
        Before diving into the code, let's understand the core concepts of
        animations in Framer Motion. The library is built around the motion
        component, which is a wrapper that enables animations for any HTML or
        SVG element.
      </p>
      <ul className="list-disc text-sm sm:text-base ml-5 mt-2 text-black/60 dark:text-white/60">
        <li>Access server-only resources (databases, file systems, etc.)</li>
        <li>Keep large dependencies on the server</li>
        <li>Automatically implement code-splitting</li>
        <li>Avoid sending unnecessary JavaScript to the client</li>
      </ul>
    </div>
  );
};

export default CodeExplanation;
