import React from "react";

const CodeExplanation = ({heading, explanation, list}) => {
  return (
    <div className=" mt-10">
{heading && <h2 className="text-2xl">{heading}</h2>}
      <p className="mt-4 text-sm sm:text-base text-black/60 dark:text-white/60">
        {explanation}
      </p>
      {
        list && (<ul className="list-disc text-sm sm:text-base ml-5 mt-2 text-black/60 dark:text-white/60">
        {
          list.map((item, index)=> <li key={index}>{item}</li>)
        }
      </ul>)
      
      }
    </div>
  );
};

export default CodeExplanation;
