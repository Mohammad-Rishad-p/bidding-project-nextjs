import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
       <div className='px-[8%] mb-[4%]'>
       <ContactUs />
       </div>
       <Footer />
    </div>
  )
}

export default page