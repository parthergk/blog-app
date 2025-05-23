import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Prop {
  name: string;
  Itemindex: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const TypeCard: React.FC<Prop> = ({ name, Itemindex, openIndex, setOpenIndex }) => {
  const handleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border-b border-neutral-700 pb-4 mb-6 pr-3">
      <button
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={() => handleAccordion(Itemindex)}
      >
        <div className="flex gap-3 justify-center items-center">
          <div className="w-8 h-8 bg-neutral-700 rounded-[5px] shadow-lg shadow-neutral-600 dark:shadow-neutral-950"></div>
          <div className="text-lg sm:text-xl">{name}</div>
        </div>
        <div className="text-lg sm:text-xl">
          {
            openIndex === Itemindex ? <ChevronDown />: <ChevronRight/>
          }
        </div>
      </button>
      {openIndex === Itemindex && (
        <div className="mt-5 px-4 text-sm sm:text-base text-black/60 dark:text-white/60 w-full"><Link href="/" className="hover:bg-neutral-400 px-2 py-0.5 rounded-sm">{`Content: ${name}`}</Link></div>
      )}
    </div>
  );
};

export default TypeCard;