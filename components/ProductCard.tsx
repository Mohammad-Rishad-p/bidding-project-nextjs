"use client";
import React, { useEffect, useState } from "react";
import { Card } from './ui/card';

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

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [remainingTimes, setRemainingTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products/getProducts');
      const products: Product[] = await res.json();
      setProducts(products);
      updateRemainingTimes(products);
    };

    fetchProducts();

    const intervalId = setInterval(() => {
      updateRemainingTimes(products);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [products]);

  const updateRemainingTimes = (products: Product[]) => {
    const currentDate = new Date();
    const newRemainingTimes = products.map(product => {
      const auctionDate = new Date(product.auctionDate);
      const timeDifference = auctionDate.getTime() - currentDate.getTime();

      if (timeDifference > 0) {
        if (timeDifference > 1000 * 60 * 60 * 24) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          return `${days} days`;
        } else {
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          return `${hours} hours ${minutes} minutes ${seconds} seconds`;
        }
      } else {
        return 'The auction has ended';
      }
    });

    setRemainingTimes(newRemainingTimes);
  };

  return (
    <div className="mx-[10%] mt-[4%]">
      <h1>Products</h1>
      <div className="flex gap-8 m-4 flex-wrap">
        {products.map((product, index) => (
          <div className='w-[350px] h-[400px]' key={product._id}>
            <Card className='w-full h-full'>
              {/* product title */}
              <Card className='h-[15%] flex items-center justify-center font-semibold'>
                {product.productName}
              </Card>
              {/* price, image */}
              <div className='flex flex-col h-[70%]'>
                {/* price */}
                <div className='h-[20%] items-center flex justify-center'>MRP: {product.startingPrice}</div>
                {/* image */}
                <div className='h-[80%]'>
                  <img src={product.imageSrc} alt={product.descriptionOfImage} className='w-full h-full' />
                </div>
              </div>        
              {/* card footer */}
              <Card className='h-[15%] flex items-center justify-center'>
                {remainingTimes[index] || 'Calculating...'}
              </Card>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
