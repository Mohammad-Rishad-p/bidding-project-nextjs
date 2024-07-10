import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LiveAuctions from '@/components/LiveAuctions'
import PastAuctions from '@/components/PastAuctions'
import UpcomingAuctions from '@/components/UpcomingAuctions'

// import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col gap-12'>
        
        <Header />
        <div className=' px-[10%]'>
        <LiveAuctions />
        <UpcomingAuctions />
        <PastAuctions />
        </div>
        <Footer />
        {/* <ProductCard /> */}
      
    </div>
  )
}

export default page