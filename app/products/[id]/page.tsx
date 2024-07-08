"use client"
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'

const Page = () => {
  type Product = {
    _id: string,
    productName: string,
    imageSrc: string, 
    descriptionOfImage: string, 
    auctionType: string, 
    minimumIncrease: number, 
    bidResetTime: number, 
    auctionDate: string,
    startingPrice: number,
    productDescription: string,
  }

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const pathname = window.location.pathname;
        const productId = pathname.split('/').pop();
        const res = await fetch(`/api/products/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
    <div>
      <Header />
    <div>
      {product && (
        // for image and auction information box
        <div className=' flex gap-10'>
          {/* for image */}
          <div className=' bg-red- w-[400px] h-[550px]'>
            {product.productName}
            <img src={product.imageSrc} alt={product.descriptionOfImage} className=' w-full h-full' />
          </div>
          {/* auction information */}
          <div>
            
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  )
}

export default Page
