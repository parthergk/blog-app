import React from "react";

interface Props{
  alt: string;
  img: string;
}
const OutPutCard:React.FC<Props> = ({alt, img}) => {
  return (
    <div className=" mt-10">
      {" "}
      <h2 className="text-xl">We should have something like this:</h2>
      <div className="bg-gray-200 h-64 rounded-lg mt-4"></div>
    </div>
  );
};

export default OutPutCard;
