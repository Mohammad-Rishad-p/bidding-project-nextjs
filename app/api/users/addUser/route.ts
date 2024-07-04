import dbConnect from "@/libs/dbConnect";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try{
        const { firstName, lastName, userName, password, email,phoneNumber, aadhar,pan } = await request.json();
        await dbConnect();
        console.log("connected to db")

        console.log({ firstName, lastName, userName, password, email,phoneNumber, aadhar,pan });

        const user = new User({ firstName, lastName, userName, password, email,phoneNumber, aadhar,pan });
        await user.validate();
        await user.save();
        return NextResponse.json({ message: "user created" }, { status: 200 });
    } catch (err: any) {
        console.error("Error: ", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}