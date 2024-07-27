"use client"
import HeaderAdmin from '@/components/HeaderAdmin';
import LiveAuctionNew from '@/components/LiveAuctionNew';
import PastAuctions from '@/components/PastAuctions';
import { Button } from '@/components/ui/button';
import UpcomingAuctionsAdmin from '@/components/UpcomingAuctionsAdmin';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <HeaderAdmin />
      <div className='mx-[8%]'>
      <LiveAuctionNew />
      <UpcomingAuctionsAdmin />
      <PastAuctions />
      <div className='fixed bottom-0 right-0 mb-4 mr-4 w-16 h-16 rounded-full flex items-center justify-center'>
        <Button 
          variant='destructive' 
          className='w-full h-full rounded-full bg-red-400 text-white text-4xl'
          onClick={() => {
            router.push('/products/addProduct')
          }}
        >
          +
        </Button>
      </div></div>
    </div>
  );
}

export default Page;
