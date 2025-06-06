import DynamicDemo from "@/components/demos/DynamicDemo";
import React from "react";

const Demo = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
})=> {
  const {slug} = await params;
  return (
    <div className="w-full min-h-screen">
      <div className="w-full mx-auto px-8 py-6 font-serif mt-12 md:mt-16 lg:mt-24">
        <div
          className="hidden dark:block h-full min-h-screen overflow-hidden absolute top-0 left-0 right-0 z-0 pointer-events-none flex-none order-[1008]"
          style={{
            WebkitMask:
              "linear-gradient(0deg, rgba(0, 0, 0, 0) 7.5%, rgba(0, 0, 0, 1) 86%)",
            mask:
              "linear-gradient(0deg, rgba(0, 0, 0, 0) 7.5%, rgba(0, 0, 0, 1) 86%)",
          }}
        >
          <div
            className="w-full h-full opacity-5"
            style={{
              backgroundImage:
                "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
              backgroundSize: "128px",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
        <DynamicDemo slug={slug}/>
      </div>
    </div>
  );
};

export default Demo;
