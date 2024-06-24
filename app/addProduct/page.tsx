

import AddProductForm from '@/components/AddProductForm'
import Header from '@/components/Header'
import PCard from '@/components/PCard'
import ProductCard from '@/components/ProductCard'
import React from 'react'

const AddProduct = () => {
  return (
    <main>
      <Header />
  
      <AddProductForm />
      <br/>
      <br />
      {/* <ProductCard /> */}

    </main>
  )
}

export default AddProduct