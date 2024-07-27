import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
       <div className='px-[8%]'>
       <ContactUs />
       </div>
    </div>
  )
}

export default page