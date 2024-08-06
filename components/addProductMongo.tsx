"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const AddProductMongo = () => {
    const router = useRouter();
    type Product = {
        _id: string;
        productName: string;
        imageSrc: string;
        descriptionOfImage: string;
        auctionType: string;
        minimumIncrease: number;
        bidResetTime: number;
        auctionDate: string; // Changed to string
        startingPrice: number;
        productDescription: string;
        delivery: string
    };

    const [productName, setProductName] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [descriptionOfImage, setDescriptionOfImage] = useState("");
    const [auctionType, setAuctionType] = useState("");
    const [minimumIncrease, setMinimumIncrease] = useState<number | "">("");
    const [bidResetTime, setBidResetTime] = useState<number | "">("");
    const [auctionDate, setAuctionDate] = useState("");
    const [startingPrice, setStartingPrice] = useState<number | "">("");
    const [productDescription, setProductDescription] = useState("");
    const [delivery, setDelivery] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        //validate auction date
        const currentDate = new Date();
        const minAuctionDate = new Date(currentDate);
        minAuctionDate.setDate(currentDate.getDate() + 2);

        if (new Date(auctionDate) < minAuctionDate) {
            alert("Auction date should be at least 2 days from today.");
            return;
        }

        if (!productName || !imageSrc || !descriptionOfImage || !auctionType || !startingPrice || !productDescription) {
            alert("Please fill in all fields");
            return;
        }
        const newProduct = {
            productName,
            imageSrc,
            descriptionOfImage,
            auctionType,
            minimumIncrease: Number(minimumIncrease),
            bidResetTime: Number(bidResetTime),
            startingPrice: Number(startingPrice),
            productDescription,
            auctionDate,
            delivery,
        };

        const res = await fetch('/api/products/addProducts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        if (res.ok) {
            alert("Product added successfully");
            setProductName("");
            setImageSrc("");
            setDescriptionOfImage("");
            setAuctionType("");
            setMinimumIncrease("");
            setBidResetTime("");
            setStartingPrice("");
            setProductDescription("");
            setAuctionDate("");
            setDelivery("");
            window.location.href = '/admin'
        } else {
            const errorData = await res.json();
            alert(`Error: ${errorData.error}`);
        }
    };

    return (
        <div className="p-4 dark:bg-gray-800 bg-slate-300 w-[50%]">
            <form onSubmit={handleSubmit}>
                {/* product name */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Product Name</label>
                    <input
                        type="text"
                        placeholder="Enter product name here"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="h-10 pl-7 rounded-md"
                        required
                        minLength={4}
                        // maxLength={50}
                    />
                </div>
                {/* image src */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Enter Product&apos;s Image Src</label>
                    <input
                        type="text"
                        placeholder="Enter image src"
                        value={imageSrc}
                        onChange={(e) => setImageSrc(e.target.value)}
                        className="h-10 pl-7 rounded-md"
                        required
                    />
                </div>
                {/* description of image */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Image Description</label>
                    <input
                        type="text"
                        placeholder="Enter description of the image"
                        value={descriptionOfImage}
                        onChange={(e) => setDescriptionOfImage(e.target.value)}
                        className="h-10 pl-7 rounded-md"
                        required
                    />
                </div>
                {/* starting price */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Starting price in MRP</label>
                    <input
                        type="number"
                        placeholder="Enter starting price to bid"
                        value={startingPrice}
                        onChange={(e) => setStartingPrice(Number(e.target.value))}
                        className="h-10 pl-7 rounded-md"
                        required
                    />
                </div>
                {/* bid reset time */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Bid reset time in seconds</label>
                    <input
                        type="number"
                        placeholder="Enter bid reset time in seconds"
                        value={bidResetTime}
                        onChange={(e) => setBidResetTime(Number(e.target.value))}
                        className="h-10 pl-7 rounded-md"
                    />
                </div>
                {/* minimum increase */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Minimum increase per bid</label>
                    <input
                        type="number"
                        placeholder="Enter minimum increase for bid"
                        value={minimumIncrease}
                        onChange={(e) => setMinimumIncrease(Number(e.target.value))}
                        className="h-10 pl-7 rounded-md"
                    />
                </div>
                {/* auction type */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Auction Type</label>
                    <input
                        type="text"
                        placeholder="Enter auction type"
                        value={auctionType}
                        onChange={(e) => setAuctionType(e.target.value)}
                        className="h-10 pl-7 rounded-md"
                        required
                    />
                </div>
                {/* delivery information */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Delivery Information</label>
                    <input
                        type="text"
                        placeholder="Enter auction type"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        className="h-10 pl-7 rounded-md"
                        required
                    />
                </div>
                {/* auction date */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Auction Date</label>
                    <input
                        type="datetime-local"
                        value={auctionDate}
                        onChange={(e) => setAuctionDate(e.target.value)}
                        className="h-10 pl-7 rounded-md"
                    />
                </div>
                {/* product description */}
                <div className="flex flex-col gap-2 mb-2">
                    <label>Product Description</label>
                    <textarea
                        placeholder="Enter product description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="h-20 pl-7 rounded-md"
                        required
                    />
                </div>
                {/* submit button */}
                <div className="flex flex-col gap-2 mb-2 mt-6 w-full flex items-center justify-center ">
                    <Button type="submit" className="btn btn-outline  bg-white text-black w-60 py-4 " variant='secondary'>
                        Add Product
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddProductMongo;
