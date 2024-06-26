import React from 'react'
import { Button } from './ui/button'
import ItemInHeader from './ItemInHeader'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    <header className=' bg-[#5a686d] py-3 '>
      <div className=' flex w-full pl-14'>
        {/* first part in header */}
        <div className='w-[30%]'>
          {/* title */}
          <div className=' text-5xl text-white'>Easy <span className=' text-orange-600'>Bidder</span></div>
        </div>
        {/* second part in header */}
        <div className='flex w-[60%] items-center gap-12 justify-start'>
          {/* Auction Home */}
          <ItemInHeader text='Auction Home'/>
          {/* How it works */}
          <ItemInHeader text='How It Works'/>
          {/* contact us */}
          <ItemInHeader text='Contact Us'/>
          {/* my Account */}
          <ItemInHeader text='My Account'/>
        </div>
        {/* third part */}
        <div className=' rounded-full w-[10%] flex justify-center items-center'>
        <ThemeToggler />
        </div>
      </div>
    </header>
  )
}

export default Header