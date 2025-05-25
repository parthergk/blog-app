import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


const CodeBlock = () => {
  const codeString = `useEffect(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}, [])`
  return (
   <div className="bg-[#212121] border-t border-neutral-500 m-0 p-0">
  <SyntaxHighlighter
    language="javascript"
    customStyle={{
      backgroundColor: "transparent",
      margin: 0,
    }}
    style={dracula}
  >
    {codeString}
  </SyntaxHighlighter>
</div>

  );
};

export default CodeBlock;
