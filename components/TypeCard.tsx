import React from "react";

const TypeCard = ({name}) => {
  return (
    <div className=" flex justify-between items-center border-b border-neutral-700 pb-4 mb-6 pr-3">
      <div className=" flex gap-3 justify-center items-center">
        <div className=" w-8 h-8 bg-neutral-700 rounded-[5px] shadow-lg shadow-neutral-600"></div>
        <div className=" text-2xl">{name}</div>
      </div>
      <div className=" text-2xl">Down</div>
    </div>
  );
};

export default TypeCard;
