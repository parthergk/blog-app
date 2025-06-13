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
        <DynamicDemo slug={slug}/>
      </div>
    </div>
  );
};

export default Demo;
