'use client';

import dynamic from "next/dynamic";
import React from "react";

const DynamicDemo = ({ slug }: { slug: string }) => {
  const DemoComponent = dynamic(() => import(`@/components/demos/${slug}`), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });

  return <DemoComponent />;
};

export default DynamicDemo;
