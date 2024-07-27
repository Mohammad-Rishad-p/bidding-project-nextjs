import React from 'react';

const HowItWorks = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-[4%]'>
        <h1 className='text-5xl'>How It Works</h1>
      </div>
      
      <div className='mt-[4%] mx-[10%]'>
        <ol className='list-decimal text-2xl text-gray-600'>
          <li className='mb-4'>
            Auction starts with Rs.0/-. Each new bid raises the item price by 20 Rupees or such smaller amount.
          </li>
          <li className='mb-4'>
            The auction clock restarts from 10 or 15 seconds every time someone bids.
          </li>
          <li className='mb-4'>
            If no new bids are placed before the clock runs out, the last bidder wins.
          </li>
        </ol>
      </div>
      
      <div className='flex items-center justify-center mt-[4%]'>
        <h2 className='text-4xl'>How Auctions Work at Easy Bidder</h2>
      </div>
      
      <div className='mt-[4%] mx-[10%]'>
        <p className='text-2xl text-gray-600'>
          At Easy Bidder, the auction process begins with users signing up and logging in. Once logged in, users can explore various sections:
        </p>
        <ul className='list-disc text-2xl text-gray-600 mt-4 ml-6'>
          <li className='mb-2'>Live Auctions: Place bids on products currently available for auction.</li>
          <li className='mb-2'>Featured Upcoming Auctions: Get a sneak peek at products that will be auctioned soon.</li>
          <li className='mb-2'>Closed Auctions: View completed auctions and see the winning bids.</li>
        </ul>
        <p className='text-2xl text-gray-600 mt-4'>
          Users can actively participate in live auctions by placing bids on the products available in this section.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
