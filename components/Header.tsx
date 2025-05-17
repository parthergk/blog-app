import Image from 'next/image';
import React from 'react'

const Header = () => {
    const dark = false;
  return (
    <header className=' absolute z-10 w-full flex justify-between items-center px-7 py-6'>

        {/* logo */}
        <div className=' flex justify-center items-center'>
            <Image alt="logo img" src="/img/logo.JPG" width={45} height={44} className=' rounded-[5px] '/>
            <span className=' self-end'>Parther</span>
        </div>

        {/* mode */}
        <div className=' self-end '>
            <button className='cursor-pointer'>{ dark ? "Go Dark" : "Go Light"}</button>
        </div>
    </header>
  )
}

export default Header