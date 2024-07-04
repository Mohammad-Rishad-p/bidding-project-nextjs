"use client"

import React, { useEffect, useState } from "react";
import { Card } from './ui/card';
import { Button } from "./ui/button";
import Link from "next/link";
import mongoose from "mongoose";
import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";

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
  currentBid: number,
}

const LiveAuctions = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [remainingTimes, setRemainingTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products/getProducts');
      const products: Product[] = await res.json();
      const liveProducts = products.filter(product => {
        const auctionDate = new Date(product.auctionDate);
        return (auctionDate.getTime() - new Date().getTime()) <= 1000 * 60 * 60 * 24;
      });
      setProducts(liveProducts);
      updateRemainingTimes(liveProducts);
    };

    fetchProducts();

    const intervalId = setInterval(() => {
      updateRemainingTimes(products);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [products]);

  const updateRemainingTimes = (products: Product[]) => {
    const currentDate = new Date();
    const newRemainingTimes = products.reduce((acc, product) => {
      const auctionDate = new Date(product.auctionDate);
      const timeDifference = auctionDate.getTime() - currentDate.getTime();

      if (timeDifference > 0) {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        acc[product._id] = `${hours} : ${minutes} : ${seconds}`;
      } else {
        acc[product._id] = 'The auction has ended';
      }

      return acc;
    }, {} as { [key: string]: string });

    setRemainingTimes(newRemainingTimes);
  };

  const filteredProducts = products.filter(product => {
    const auctionDate = new Date(product.auctionDate);
    return auctionDate.getTime() > new Date().getTime();
  });

  const liveAuctions = filteredProducts.filter(product => {
    const auctionDate = new Date(product.auctionDate);
    return (auctionDate.getTime() - new Date().getTime()) <= 1000 * 60 * 60 * 24;
  });

  const renderProductCards = (products: Product[]) => {
    if (products.length === 0) {
      return <p>No products available</p>;
    }

    return products.map((product) => (
      <div className='w-[350px] h-[450px]' key={product._id}>
        <Card className='w-full h-full'>
          <Card className='h-[15%] flex items-center justify-center font-semibold'>
            <Link href={`/products/${product._id}`}>{product.productName}</Link>
          </Card>
          <div className='flex flex-col h-[60%]'>
            <div className='h-[20%] items-center flex justify-center'>Starting Price : {product.startingPrice}</div>
            <div className='h-[80%]'>
              <img src={product.imageSrc} alt={product.descriptionOfImage} className='w-full h-full' />
            </div>
          </div>        
          <Card className='h-[25%] flex flex-col items-center justify-center'>
            <div className=" flex justify-between w-full items-center px-6  bg-gray-400">
              {/* grey part 1 */}
            <div>{product.currentBid}</div>
            {/* grey part2 */}
            <div className=" flex flex-col">
              <div>{remainingTimes[product._id] || 'Calculating...'}</div>
              <div>waiting for bid</div>
            </div>
            
            </div>
            {/* after grey */}
            <div className=" w-full px-8 py-2">
              <Button variant='destructive' className=" bg-[#f7a040] w-full rounded-sm"
              onClick={async () => {
                const productId = product._id
                await fetch(`/api/products/updateBid/${productId}`);
              }}
              >bid</Button>
            </div>
          </Card>
        </Card>
      </div>
    ));
  };

  return (
    <div className="mx-[10%] mt-[4%]">
      <h1>Live Auctions</h1>
      <div className="flex gap-8 m-4 flex-wrap">
        {liveAuctions.length > 0 ? renderProductCards(liveAuctions) : <p>No live auctions available</p>}
      </div>
    </div>
  );
};

export default LiveAuctions;
