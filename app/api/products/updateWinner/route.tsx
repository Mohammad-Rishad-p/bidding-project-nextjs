import dbConnect from "@/libs/dbConnect";
import { NextResponse } from "next/server";
import User from "@/models/users";
import Product from "@/models/product";

export async function POST(request: any) {
    try {
        const { productId, ubidWinner, auctionPrice, productName } = await request.json();
        await dbConnect();
        console.log("Connected to DB to update winner");

        const user = await User.findOne({ userName: ubidWinner });
        if (!user) {
            return NextResponse.json({ message: "Unable to find user" }, { status: 400 });
        }
        const product = await Product.findById(productId)
        if (!product) {
            console.log("No product found in the database.");
            return NextResponse.json({ message: "No product found with the given _id." });
        }
        
        product.bidStatus = 1
        if (user.bids.length === 0) {
            user.bids.push({
                productId,
                bidPrice: auctionPrice,
                productName,
            });
            await user.save();
        }
        await product.save();

        // // Add the new bid to the user's bids array
        // if(product.bidStatus === 1) {
        //     user.bids.push({
        //         productId,
        //         bidPrice: auctionPrice,
        //         productName,
        //     });
        //     await user.save();
        // }
        

        return NextResponse.json({ message: "Bid added to user" }, { status: 200 });
    } catch (err: any) {
        console.error("Error updating user with new bid:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
