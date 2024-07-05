// api/users/addUser/route.ts
import dbConnect from "@/libs/dbConnect";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { firstName, lastName, userName, password, email, phoneNumber, aadhar, pan } = await request.json();
        await dbConnect();
        console.log("Connected to DB");

        console.log({ firstName, lastName, userName, password, email, phoneNumber, aadhar, pan });
        
        // Check if the username already exists in the database
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return NextResponse.json({ message: "Username already exists" }, { status: 400 });
        }

        const user = new User({ firstName, lastName, userName, password, email, phoneNumber, aadhar, pan });
        await user.validate();
        await user.save();
        return NextResponse.json({ message: "User created" }, { status: 200 });
    } catch (err: any) {
        console.error("Error: ", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
