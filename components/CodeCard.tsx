import { Copy, CopyCheck } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "./CodeBlock";

const CodeCard = () => {
  const codeString = `useEffect(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}, [])`;
  const [isCopy, setIsCopy] = useState(false);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  async function handleCopy() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    await navigator.clipboard.writeText("gaurav kumar");
    setIsCopy(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopy(false);
      timeoutRef.current = null;
    }, 2000);
  }

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-2xl ">Setting Up Framer Motion</h2>
      <p className="mt-4 text-sm sm:text-base text-black/60 dark:text-white/60">
        First, let's install Framer Motion in your React project:
      </p>

      <div className="border border-neutral-500 rounded mt-3">
        <div className="p-2 flex justify-between items-center dark:text-white text-black/80">
          <span>&lt;&gt; components/page-transition.tsx</span>
          {isCopy ? (
            <CopyCheck className="h-6 w-6 cursor-pointer" />
          ) : (
            <Copy className="h-6 w-6 cursor-pointer" onClick={handleCopy} />
          )}
        </div>
        <CodeBlock codeString={codeString} />
      </div>
    </div>
  );
};

export default CodeCard;
