import dbConnect from "@/libs/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function DELETE(request: any) {
    try {
        const url = new URL(request.url);
        const pathname = url.pathname;
        const productID = pathname.split('/').pop();
        await dbConnect();
        console.log("Connected to DB in delete product");

        const product = await Product.findByIdAndDelete(productID);

        if (!product) {
            console.log("No product found in the database.");
            return NextResponse.json({ message: "No product found with the given _id." }, { status: 404 });
        }

        console.log("Product deleted successfully.");
        return NextResponse.json({ message: "Product deleted successfully." });
    } catch (err: any) {
        console.error("Error: ", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
