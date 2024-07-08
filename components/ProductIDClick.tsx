"use client";
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

const ProductIDClick = () => {
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
    currentBid: number, // Changed type from string to number for arithmetic operations
    bidWinner: string,
    delivery: string,
  };

  const [product, setProduct] = useState<Product | null>(null);
  const [remainingTime, setRemainingTime] = useState('');
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }
  }, []);

  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

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

  const fetchProductDetails = async (productId: string) => {
    try {
      const res = await fetch(`/api/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch updated product details:", error);
    }
  };

  const performBid = async (productID: any, userName: any) => {
    try {
      const uName = { userName };
      const res = await fetch(`/api/products/updateBid/${productID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uName),
      });
      if (res.ok) {
        setUserName(userName);
        await fetchProductDetails(productID); // Fetch updated product details after a successful bid
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const isTimeFormat = (time: string) => {
    const timePattern = /^\d{1,2}:\d{2}:\d{2}$/; // pattern to match 'hh:mm:ss' format
    return timePattern.test(time);
  };

  return (
    <div>
      <div className='mx-[8%]'>
        {product && (
          <div className='flex-col'>
            {/* image, remaining time, bid button table */}
            <div className='flex gap-[100px]'>
            {/* part 1 image */}
            <div className='bg-red- w-[500px] h-[550px]'>
              {/* image of product */}
              <img src={product.imageSrc} alt={product.descriptionOfImage} className='w-full h-full' />
            </div>
            <div className='flex flex-col gap-8'>
              {/* product name */}
              <p className='text-6xl'>{product.productName}</p>
              <div className='flex gap-8'>
                {/* part 2 bid + remaining time */}
                <div className='w-[270px] bg-slate-200 p-6 text-4xl items-center justify-center h-[150px] flex'>
                  {remainingTime}
                </div>
                {/* bid + price */}
                <div className='flex flex-col w-[300px] h-[150px] bg-slate-200'>
                  <div className='flex justify-between text-xl p-6 mb-2'>
                    <h1>Auction price</h1>
                    <h4>₹ {product.startingPrice + product.currentBid}</h4>
                  </div>
                  {/* bid button */}
                  <div className=' px-4'>
                    <Button 
                      variant='destructive' 
                      className=" bg-[#f7a040] w-full rounded-sm"
                      onClick={async () => {
                        if (isTimeFormat(remainingTime)) {
                          await performBid(product._id, userName);
                        } else {
                          alert('Bidding is not allowed at this time.');
                        }
                      }}
                    >
                      Bid
                    </Button>
                  </div>
                </div>
              </div>
              {/* part 3 table */}
              <div>
                <div className='bg-slate-200 px-8 flex-wrap py-8'>
                  <table className='w-[500px]'>
                    {/* product/auction Id */}
                    <tr className='flex justify-between border-black border-b-[0.4px] mb-1'>
                      <td>Auction Id</td>
                      <td className='mb-1'>{product._id}</td>
                    </tr>
                    {/* product price */}
                    <tr className='flex justify-between border-black border-b-[0.4px] mb-1'>
                      <td>Price</td>
                      <td className='mb-1'>RS {product.startingPrice}</td>
                    </tr>
                    {/* auction type */}
                    <tr className='flex justify-between border-black border-b-[0.4px] mb-1'>
                      <td>Auction type</td>
                      <td className='mb-1'>{product.auctionType}</td>
                    </tr>
                    {/* bid reset time */}
                    <tr className='flex justify-between mb-1 border-black border-b-[0.4px] mb-1'>
                      <td>Bid reset time</td>
                      <td className='mb-1'>{product.bidResetTime}</td>
                    </tr>
                    {/* auction start */}
                    <tr className='flex justify-between mb-1'>
                      <td>Auction start time</td>
                      <td className='mb-1'>{formatDate(product.auctionDate)}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            {/* part 4 product details */}
          </div>
          {/* product detaliss */}
          <div className=' w-full mt-16'>
            <div className=' text-4xl flex items-center justify-center bg-slate-300 border-[0.52px]'>Product Detais</div>
            <div className=' text-xl flex items-center px-8 bg-slate-200 border-[0.52px]'>{product.productDescription}</div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductIDClick;
