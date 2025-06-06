import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Prop {
  codeString: string;
}
const CodeBlock: React.FC<Prop> = ({ codeString }) => {
  return (
    <div className="bg-[#212121] border-t border-neutral-500 m-0 p-0">
      <SyntaxHighlighter
        language="javascript"
        customStyle={{
          margin: 0,
        }}
        style={oneDark}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
