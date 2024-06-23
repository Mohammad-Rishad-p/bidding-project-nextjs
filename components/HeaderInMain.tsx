import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import Login from './Login'

const HeaderInMain = () => {
  return (
    <header className=' w-full'>
        <div className='bg-[#5a686d] py-3 flex items-center justify-center  '>
        {/* title */}
        <div className='w-[30%]'>
          {/* title */}
          <div className=' text-5xl pl-6 text-white'>Easy <span className=' text-orange-600'>Bidder</span></div>
        </div>
        {/* login */}
        <div className=" w-[60%] pt"><Login /></div>
        {/* dark mode */}
        <div className=" w-[10%] flex justify-end pr-6"> <ThemeToggler /> </div>
      </div>
    </header>
  )
}

export default HeaderInMain