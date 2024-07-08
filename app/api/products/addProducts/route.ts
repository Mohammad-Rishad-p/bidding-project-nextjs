import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { productName, imageSrc, descriptionOfImage, auctionType, minimumIncrease, bidResetTime, auctionDate, startingPrice, productDescription, delivery } = await request.json();
        await dbConnect();
        console.log("connected to db");

        console.log({ productName, imageSrc, descriptionOfImage, auctionType, minimumIncrease, bidResetTime, auctionDate, startingPrice, productDescription, delivery });

        const product = new Product({ productName, imageSrc, descriptionOfImage, auctionType, minimumIncrease, bidResetTime, auctionDate, startingPrice, productDescription, delivery });
        await product.validate(); // Validate the product before saving to catch any errors

        await product.save();
        return NextResponse.json({ message: "Product created" }, { status: 200 });

    } catch (err: any) {
        console.error("Error: ", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
