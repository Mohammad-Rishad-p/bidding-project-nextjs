
"use client";

// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

import React from 'react'
import { DatePicker } from "./DatePicker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const addProductForm = () => {
  return (
    <div className="p-4  w-[50%]">
     <form>
      {/* product name */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Product Name</label>
        <Input type="text" placeholder="enter product name here" name="productName" className=" h-10 pl-7 rounded-md" required minLength={6} maxLength={50} />
      </div>
      {/* image src */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Enter Product's Image Src</label>
        <Input type="text" placeholder="Enter image src" name="productImage" className=" h-10 pl-7 rounded-md" required />
      </div>
      {/* starting price */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Starting price in MRP</label>
        <Input type="number" placeholder="enter starting price to bid" name="startingPriceForBid" className=" h-10 pl-7 rounded-md" required  />
      </div>
      {/* bid reset time */}
      <div className="flex flex-col gap-2 mb-2">
        <label>bid reset time in seconds</label>
        <Input type="number" placeholder="enter bid reset time in seconds" name="bidResetTime" className=" h-10 pl-7 rounded-md" required  />
      </div>

      {/* bid reset time */}
      <div className="flex flex-col gap-2 mb-2">
        <label>delivery information</label>
        <Input type="enter delivery information" placeholder="enter bid reset time in seconds" name="bidResetTime" className=" h-10 pl-7 rounded-md" required  />
      </div>

      {/* minimum increase */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Minimum increase per bid in seconds</label>
        <Input type="number" placeholder="enter minimum increase for bid" name="minimumBidIncrease" className=" h-10 pl-7 rounded-md" required />
      </div>
      {/* auction type */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Auction Type</label>
        <Input type="text" placeholder="enter auction type" name="auctionType" className=" h-10 pl-7 rounded-md" required />
      </div>
      {/* auction date */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Auction date</label>
        <input type='datetime-local' />
        {/* <DatePicker /> */}
      </div>
      {/* auction time */}
      <div className="flex flex-col gap-2 mb-2">
        <label>Auction Time</label>
        <Input type="time" placeholder="enert auction time" name="auctionTime" className=" h-10 pl-7 rounded-md w-[240px]" required />
      </div>
      {/* product details */}
      {/* submit button */}
      <div className="flex flex-col gap-2 mb-2 ">
        <Button variant='outline'  type="submit">Add Product</Button>
      </div>
     </form>
    </div>
  );
}

export default addProductForm
// export function AddProductForm() {

// }
