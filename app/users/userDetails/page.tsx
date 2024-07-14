import Footer from '@/components/Footer'
import Header from '@/components/Header'
import UserDetails from '@/components/userDetails'
import React from 'react'

const page = () => {
  return (
    <div className='font-serif'>
        <Header />
        <UserDetails />
        <Footer />
    </div>
  )
}

export default page