import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HowItWorks from '@/components/HowItWorks'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <div className=' mb-[3%]'>
        <HowItWorks />
        </div>
        <Footer />
    </div>
  )
}

export default page