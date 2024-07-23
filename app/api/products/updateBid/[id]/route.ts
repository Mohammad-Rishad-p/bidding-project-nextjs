import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { userName } = await request.json();
        await dbConnect();
        console.log("connected to db in live auction");

        const url = new URL(request.url);
        const pathname = url.pathname;
        const productId = pathname.split('/').pop();
        console.log(productId);

        const product = await Product.findById(productId);
        console.log("product fetched successfully");

        if (!product) {
            console.log("No product found in the database.");
            return NextResponse.json({ message: "No product found with the given _id." });
        }

        const currentTime = new Date();
        const auctionDate = product.auctionDate;

        // Check if the difference is less than one minute and greater than zero seconds
        const timeDifference = auctionDate.getTime() - currentTime.getTime();

        if (timeDifference < 60000 && timeDifference > 0) {
            const increaseTime = product.minimumIncrease * 1000
            product.auctionDate = new Date(auctionDate.getTime() + increaseTime);
        }

        product.currentBid = product.currentBid + product.minimumIncrease;
        product.bidWinner = userName;
        await product.save();

        return NextResponse.json(product);

    } catch (err: any) {
        console.error("Error fetching product:", err);
        return NextResponse.json({ error: err.message }); // Return error message in response
    }
}
