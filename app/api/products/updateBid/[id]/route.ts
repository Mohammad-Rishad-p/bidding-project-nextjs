import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { userName } = await request.json();
        await dbConnect();
        console.log("Connected to DB in live auction");

        const url = new URL(request.url);
        const pathname = url.pathname;
        const productId = pathname.split('/').pop();
        console.log(`Product ID: ${productId}`);

        const product = await Product.findById(productId);
        console.log("Product fetched successfully");

        if (!product) {
            console.log("No product found in the database.");
            return NextResponse.json({ message: "No product found with the given _id." });
        }

        const currentTime = new Date();
        const auctionDate = new Date(product.auctionDate);
        console.log(`Current Time: ${currentTime.toISOString()}`);
        console.log(`Auction Date: ${auctionDate.toISOString()}`);

        const timeDifference = auctionDate.getTime() - currentTime.getTime();
        console.log(`Time Difference: ${timeDifference} ms`);

        // Check if the auction is ending within the bidResetTime
        if (timeDifference <= product.bidResetTime * 1000) {
            console.log("Condition met: Auction ending soon.");
            const increaseTime = product.bidResetTime * 1000;
            product.auctionDate = new Date(auctionDate.getTime() + increaseTime);
            console.log(`Auction date extended by ${product.bidResetTime} seconds. New auction date: ${product.auctionDate}`);
        } else {
            console.log("Condition not met: Auction not ending soon.");
        }

        product.currentBid = product.currentBid + product.minimumIncrease;
        product.bidWinner = userName;
        await product.save();
        console.log("Product updated successfully");

        return NextResponse.json(product);

    } catch (err: any) {
        console.error("Error updating product:", err);
        return NextResponse.json({ error: err.message }); // Return error message in response
    }
}
