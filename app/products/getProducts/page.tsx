import Header from '@/components/Header'
import LiveAuctions from '@/components/LiveAuctions'
import UpcomingAuctions from '@/components/UpcomingAuctions'
// import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <LiveAuctions />
        <UpcomingAuctions />
        {/* <ProductCard /> */}
    </div>
  )
}

export default page