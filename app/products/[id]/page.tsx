"use client";
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';

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
  };

  const [product, setProduct] = useState<Product | null>(null);
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchProduct = async () => {
      try {
        const pathname = window.location.pathname;
        const productId = pathname.split('/').pop();
        const res = await fetch(`/api/products/${productId}`);
        const data = await res.json();
        setProduct(data);
        calculateRemainingTime(data.auctionDate);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    const calculateRemainingTime = (auctionDate: string) => {
      intervalId = setInterval(() => {
        const currentDate = new Date();
        const dayBeforeCurrentDate = new Date();
        dayBeforeCurrentDate.setDate(currentDate.getDate() - 1);

        const auctionDateObj = new Date(auctionDate);
        const timeDifference = auctionDateObj.getTime() - dayBeforeCurrentDate.getTime();

        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          if (days > 0) {
            setRemainingTime(`${days} days`);
          } else {
            setRemainingTime(`${hours}:${minutes}:${seconds}`);
          }
        } else {
          setRemainingTime('Auction ended');
          clearInterval(intervalId);
        }
      }, 1000);
    };

    fetchProduct();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
      hour: 'numeric', minute: 'numeric', second: 'numeric' 
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div>
        <Header />
        <div className=' mx-[8%]'>
          {product && (
            <div className=' flex gap-[100px]'>
              <div className=' bg-red- w-[500px] h-[550px]'>
                <img src={product.imageSrc} alt={product.descriptionOfImage} className=' w-full h-full' />
              </div>
              <div>
                <p className=' text-6xl'>{product.productName}</p>
                <div className='bg-red-500 px-8 flex-wrap' >
                  <table className=' w-[500px]'>
                    <tr className=' flex justify-between border-black border-b-[0.4px] mb-1'>
                      <td>Auction Id</td>
                      <td className='mb-1'>{product._id}</td>
                    </tr>
                    <tr className=' flex justify-between border-black border-b-[0.4px] mb-1'>
                      <td>Price</td>
                      <td className='mb-1'>RS {product.startingPrice}</td>
                    </tr>
                    <tr className=' flex justify-between border-black border-b-[0.4px] mb-1'>
                      <td>Auction type</td>
                      <td className='mb-1'>{product.auctionType}</td>
                    </tr>
                    <tr className=' flex justify-between mb-1'>
                      <td>Bid reset time</td>
                      <td className='mb-1'>{product.bidResetTime}</td>
                    </tr>
                    <tr className=' flex justify-between mb-1'>
                      <td>Remaining Time</td>
                      <td className='mb-1'>{remainingTime}</td>
                    </tr>
                    <tr className=' flex justify-between mb-1'>
                      <td>Auction start</td>
                      <td className='mb-1'>{formatDate(product.auctionDate)}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
