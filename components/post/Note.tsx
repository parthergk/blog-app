import React from 'react'

const Note = ({text}:{text:string}) => {
  return (
    <div className="bg-[#dcdcdc] p-4 mt-8 rounded dark:bg-neutral-800">
        <h3 className="text-sm sm:text-base font-semibold mb-1 ">Note</h3>
        <p className="text-black/60 dark:text-white/60 text-sm tracking-wide">
          {text}
        </p>
      </div>
  )
}

export default Note