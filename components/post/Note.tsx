import React from 'react'

const Note = () => {
  return (
    <div className="bg-[#dcdcdc] p-4 mt-8 rounded dark:bg-neutral-800">
        <h3 className="text-sm sm:text-base font-semibold mb-1 ">Note</h3>
        <p className="text-black/60 dark:text-white/60 text-sm">
          Framer Motion handles all the complex animation logic under the hood, including
          physics-based transitions, gesture recognition, and accessibility features.
        </p>
      </div>
  )
}

export default Note