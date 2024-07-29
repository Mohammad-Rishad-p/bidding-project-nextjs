"use client";

import React, { useEffect, useState } from "react";
import { Card } from './ui/card';
import { Button } from "./ui/button";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

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
  bidWinner: string,
}

const LiveAuctionNew = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [remainingTimes, setRemainingTimes] = useState<{ [key: string]: string }>({});
  const [userName, setUserName] = useState("");

  const fetchLiveProducts = async () => {
    const res = await fetch('/api/products/getProducts');
    const products: Product[] = await res.json();
    const liveProducts = products.filter(product => {
      const auctionDate = new Date(product.auctionDate);
      const currentDate = new Date();
      const oneDayBeforeCurrent = new Date(currentDate.getTime() - (1000 * 60 * 60 * 24));
      return auctionDate.getTime() <= currentDate.getTime() && auctionDate.getTime() > oneDayBeforeCurrent.getTime();
    });
    setProducts(liveProducts);
    updateRemainingTimes(liveProducts);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUserName(params.get('userName') || "");
    fetchLiveProducts();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTimes(products);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [products]);

  const updateRemainingTimes = (products: Product[]) => {
    const currentDate = new Date();
    const oneDayBeforeCurrent = new Date(currentDate.getTime() - (1000 * 60 * 60 * 24));

    const newRemainingTimes = products.reduce((acc, product) => {
      const auctionDate = new Date(product.auctionDate);
      const timeDifference = auctionDate.getTime() - oneDayBeforeCurrent.getTime();

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

  const performBid = async (productID: string, userName: string) => {
    if (!userName) {
      alert("Please login to bid.");
      return;
    }
    try {
      const res = await fetch(`/api/products/updateBid/${productID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName }),
      });
      if (res.ok) {
        // Re-fetch live products to reflect the new bid
        fetchLiveProducts();
        toast.success('you have successfully bidded', {
          position: 'top-center',
          autoClose: 3000, // Close toast after 3 seconds
          hideProgressBar: true, // Hide progress bar
      });
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const renderProductCards = () => {
    if (products.length === 0) {
      return;
    }

    return products.map((product) => (
      <div className='w-[350px] h-[450px] text-[#404d63]' key={product._id}>
        <Card className='w-full h-full'>
          <Card className='h-[15%] flex items-center justify-center'>
            <Link href={`/products/${product._id}`} className="hover:text-[#f7a040] ">{product.productName}</Link>
          </Card>
          <div className='flex flex-col h-[60%]'>
            <div className='h-[20%] items-center flex justify-center'>Starting Price : {product.startingPrice}</div>
            <div className='h-[80%]'>
              <img src={product.imageSrc} alt={product.descriptionOfImage} className='w-full h-full' />
            </div>
          </div>
          <Card className='h-[25%] flex flex-col items-center justify-center'>
            <div className=" flex justify-between w-full items-center px-6  bg-slate-200">
              <div className="flex flex-col">
                <div>₹ {product.currentBid}</div>
                <div>{product.bidWinner}</div>
              </div>
              <div className=" flex flex-col">
                <div>{remainingTimes[product._id] || 'Calculating...'}</div>
                <div>waiting for bid</div>
              </div>
            </div>
            <div className=" w-full px-8 py-2">
              <Button variant='destructive' className=" bg-[#f7a040] w-full rounded-sm"
                onClick={async () => performBid(product._id, userName)}
              >bid</Button>
              <ToastContainer />
            </div>
          </Card>
        </Card>
      </div>
    ));
  };

  return (
    <div className="mx-[10%] mt-[4%]">
      {products.length === 0 && (
        <div>
          <h1 className="text-5xl mb-12 items-center justify-center flex">Live Auctions</h1>
          <p className="text-xl"> No Products availble now</p>
        </div>
      )}
      {products.length >=1 && (
        <div>
        <h1 className="text-5xl mb-12 items-center justify-center flex">Live Auctions</h1>
        </div>
      )}
      <div className="flex gap-8 m-4 flex-wrap">
        {renderProductCards()}
      </div>
    </div>
  );
};

export default LiveAuctionNew;
