import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LiveAuctionNew from '@/components/LiveAuctionNew'
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

        <LiveAuctionNew />
        <UpcomingAuctions />
        <PastAuctions />
      </div>
      <Footer />
    </div>
  )
}

export default page