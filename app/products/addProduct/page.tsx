

// import AddProductForm from '@/components/AddProductForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import AddProductMongo from '@/components/addProductMongo'
import React from 'react'

const AddProduct = () => {
  return (
    <main>
      <div className=' flex flex-col gap-12'>
        <Header />
        {/* <AddProductForm /> */}
        <div className=' w-full'>
          <div className=' mt-[4%] ml-[30%] font-serif'>
            <AddProductMongo />
          </div>
        </div>
        <Footer />
        {/* <ProductCard /> */}
      </div>
    </main>
  )
}

export default AddProduct