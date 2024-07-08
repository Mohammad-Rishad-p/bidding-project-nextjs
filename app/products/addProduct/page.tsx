

import AddProductForm from '@/components/AddProductForm'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import AddProductMongo from '@/components/addProductMongo'
import React from 'react'

const AddProduct = () => {
  return (
    <main>
      
      <Header />
      {/* <AddProductForm /> */}
      <AddProductMongo />
      <br/>
      <br />
      {/* <ProductCard /> */}
    </main>
  )
}

export default AddProduct