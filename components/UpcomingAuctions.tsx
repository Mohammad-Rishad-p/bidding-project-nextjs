"use client";

import React, { useEffect, useState } from "react";
import { Card } from './ui/card';
import Link from "next/link";

// Define the Product type
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

// UpcomingAuctions component
const UpcomingAuctions = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      const res = await fetch('/api/products/getProducts');
      const products: Product[] = await res.json();
      
      // Filter products to show only upcoming auctions that are not live
      const upcomingProducts = products.filter(product => {
        const auctionDate = new Date(product.auctionDate);
        const currentDate = new Date();
        return auctionDate > currentDate; // Show only products with auction dates in the future
      });
      
      setProducts(upcomingProducts);
    };

    fetchProducts();
  }, []);

  // Function to calculate remaining time until auction starts
  const calculateRemainingTime = (auctionDate: string) => {
    const now = new Date().getTime();
    const auctionStartTime = new Date(auctionDate).getTime();
    
    // Calculate remaining time
    const timeDifference = auctionStartTime - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days} days`;
    }
    
    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  // Function to render product cards
  const renderProductCards = (products: Product[]) => {
    if (products.length === 0) {
      return <p>No products available</p>;
    }

    return products.map((product) => (
      <div className='w-[350px] h-[400px]' key={product._id}>
        <Card className='w-full h-full'>
          <Card className='h-[15%] flex items-center justify-center font-semibold pl-5'>
            <Link href={`/products/${product._id}`}>{product.productName}</Link>
          </Card>
          <div className='flex flex-col h-[70%]'>
            <div className='h-[20%] items-center flex justify-center'>Starting Price : {product.startingPrice}</div>
            <div className='h-[80%]'>
              <img src={product.imageSrc} alt={product.descriptionOfImage} className='w-full h-full' />
            </div>
          </div>        
          <Card className='h-[15%] flex items-center justify-center'>
            Starts in {calculateRemainingTime(product.auctionDate)}
          </Card>
        </Card>
      </div>
    ));
  };

  return (
    <div className=" mt-[4%]">
      <h1 className=" text-5xl mb-12 items-center justify-center flex">Featured Upcoming Auctions</h1>
      <div className="flex gap-8 m-4 flex-wrap">
        {renderProductCards(products)}
      </div>
    </div>
  );
};

export default UpcomingAuctions;
