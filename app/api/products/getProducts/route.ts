import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        // console.log("connected to database");

        const products = await Product.find({});
        // console.log("fetched product successfully");

        if (products.length === 0) {
            console.log("no products found");
        }

        return NextResponse.json(products, { status: 200 });

    } catch (err: any) {
        console.error("Failed to fetch products", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
