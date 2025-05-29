import React from "react";

const PostHeader = () => {
  return (
    <div className="mt-10">
      {" "}
      {/* title  */}
      <h1 className="dark:text-white text-2xl sm:text-3xl lg:text-[40px] text-neutral-800 leading-tight">
        Creating Smooth Page
        <br />
        Transitions with Framer Motion
      </h1>
      {/* data  */}
      <p className="text-sm text-black/40 dark:text-white/50 mt-2">
        April 8, 2025
      </p>
      {/* description */}
      <p className="mt-6 text-sm sm:text-base text-black/60 dark:text-white/60">
        Page transitions can significantly enhance the user experience of your
        React application. With Framer Motion, you can create beautiful,
        physics-based animations with minimal code. In this tutorial, we'll
        build a smooth page transition effect that you can easily integrate into
        your Next.js or React projects.
      </p>
    </div>
  );
};

export default PostHeader;
