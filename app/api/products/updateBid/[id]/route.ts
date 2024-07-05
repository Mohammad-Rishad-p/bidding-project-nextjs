import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request: any) {
    try {
        
        //Uncomment the following lines when you're ready to connect to the database and fetch data
        await dbConnect();
        console.log("connected to db in live auction");
        const url = new URL(request.url);
        const pathname = url.pathname;
        const productId = pathname.split('/').pop();
        console.log(productId);
        const product = await Product.findById(productId);
        console.log("product fetched successfully");

        //Example: handle product retrieval and modification
        if (!product) {
            console.log("No product found in the database.");
            return NextResponse.json({ message: "No product found with the given _id." });
        }
        product.currentBid = product.currentBid + product.minimumIncrease
        await product.save();

        return NextResponse.json(product);

    } catch (err: any) {
        console.error("Error fetching product:", err);
        return NextResponse.json({ error: err.message }); // Return error message in response
    }
}
