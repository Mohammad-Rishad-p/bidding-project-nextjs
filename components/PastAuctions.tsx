"use client"
import React, { useEffect, useState } from "react";
import { Card } from './ui/card';
import Link from "next/link";

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
  bidWinner: string
}

const PastAuctions = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products/getProducts');
        const products: Product[] = await res.json();
        const pastProducts = products.filter(product => {
          const auctionDate = new Date(product.auctionDate);
          const oneDayBefore = new Date();
          oneDayBefore.setDate(oneDayBefore.getDate() - 1); // One day before current date
          return auctionDate.getTime() < oneDayBefore.getTime();
        });
        setProducts(pastProducts);
      } catch (error) {
        console.error("Failed to fetch past products:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderRemainingTime = (auctionDate: string) => {
    const currentDate = new Date();
    const auctionEndDate = new Date(auctionDate);
    const timeDifference = auctionEndDate.getTime() - currentDate.getTime();

    if (timeDifference <= 0) {
      return "Auction ended";
    } else {
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
      if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
      } else {
        return `${hours}h ${minutes}m ${seconds}s ago`;
      }
    }
  };

  const renderProductCards = (products: Product[]) => {
    if (products.length === 0) {
      return <p>No products available</p>;
    }

    return products.map((product) => (
      <div className='w-[350px] h-[400px]' key={product._id}>
        <Card className='w-full h-full'>
          <Card className='h-[15%] flex items-center justify-center font-semibold'>
            <Link href={`/products/${product._id}`}>{product.productName}</Link>
          </Card>
          <div className='flex flex-col h-[70%]'>
            <div className='h-[20%] items-center flex justify-center'>Starting Price : {product.startingPrice}</div>
            <div className='h-[80%]'>
              <img src={product.imageSrc} alt={product.descriptionOfImage} className='w-full h-full' />
            </div>
            <div className="flex justify-between px-3">
              <p>Bid Winner</p>
              <p>{product.bidWinner}</p>
            </div>
          </div>
          <Card className='h-[15%] flex items-center justify-center'>
            {renderRemainingTime(product.auctionDate)}
          </Card>
        </Card>
      </div>
    ));
  };

  return (
    <div className="mx-[10%] mt-[4%]">
      <h1>closed Auctions</h1>
      <div className="flex gap-8 m-4 flex-wrap">
        {renderProductCards(products)}
      </div>
    </div>
  );
};

export default PastAuctions;