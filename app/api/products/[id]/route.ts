import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request: any) {
    try {
        await dbConnect();
        console.log("connected to db");
        const url = new URL(request.url);
        const pathname = url.pathname;
        const productId = pathname.split('/').pop(); //extract the last segment of url
        console.log(productId);
        const product = await Product.findById(productId);
        console.log("product fetched successfully");

        if (!product) {
            console.log("No product found in the database.");
            return NextResponse.json({ message: "No product found with the given _id." });
        }

        return NextResponse.json(product);
    } catch (err: any) {
        console.error("Error fetching product:", err);
        return NextResponse.json({ error: err.message });
    }
}
