import Header from '@/components/Header'
import ProductIDClick from '@/components/ProductIDClick'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className=' flex flex-col gap-12'>
      <Header />
      <ProductIDClick />
      <Footer />
    </div>
  )
}

export default page