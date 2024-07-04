import dbConnect from "@/libs/dbConnect";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await dbConnect();
        console.log("connected to db");
        try{
            const users = await User.find();
            console.log("fetched users");
            return NextResponse.json(users, {status:200})
        } catch(err:any) {}
    } catch (err: any) {
        console.error("Failed to fetch products", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}