"use client";
import React, { useEffect, useState } from "react";
import { Card } from '../../../components/ui/card';

type Product = {
    _id: string,
    productName: string,
    imageSrc: string, 
    descriptionOfImage: string, 
    auctionType: string, 
    minimumIncrease: number, 
    bidResetTime: number, 
    auctionDate: string, // Changed to string
    startingPrice: number,
}

export default function Page() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products/getProducts');
            let products: Product[] = await res.json();

            // Convert auctionDate to string
            products = products.map(product => ({
                ...product,
                auctionDate: new Date(product.auctionDate).toLocaleString(), // Format date
            }));

            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
       <div className="mx-[10%] mt-[4%]">
        <h1>Products</h1>
        <div className="flex gap-8 m-4 flex-wrap">
        {products.map((product) => (
            <div className='w-[350px]  h-[400px]' key={product._id}>
            <Card className=' w-full, h-full'>
                {/* product title */}
                <Card className=' h-[15%] flex items-center justify-center font-semibold'>
                    {product.productName}
                </Card>
                {/* price,image */}
                <div className=' flex flex-col h-[70%] '>
                    {/* price */}
                    <div className=' h-[20%] items-center flex justify-center '>MRP: {product.startingPrice}</div>
                    {/* image */}
                    <div className=' h-[80%]'>
                        <img src={product.imageSrc} alt={product.descriptionOfImage} className=' w-full h-full ' />
                    </div>
                </div>        
                {/* card footer */}
                <Card className=' h-[15%] flex items-center justify-center'>
                    {product.auctionDate}
                </Card>
            </Card>
        </div>
        ))}
        </div>
       </div>
    );
}
