"use client";
import { Copy, CopyCheck } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "../post/CodeBlock";

const CodeCard = ({path, code}) => {
  const [isCopy, setIsCopy] = useState(false);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  async function handleCopy() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    await navigator.clipboard.writeText(code);
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
    <div className="border border-neutral-500 rounded mt-3">
      <div className="p-2 flex justify-between items-center dark:text-white text-black/80">
        <span>&lt;&gt; {path}</span>
        {isCopy ? (
          <CopyCheck className="h-6 w-6 cursor-pointer" />
        ) : (
          <Copy className="h-6 w-6 cursor-pointer" onClick={handleCopy} />
        )}
      </div>
      <CodeBlock codeString={code} />
    </div>
  );
};

export default CodeCard;
