import dbConnect from "@/libs/dbConnect";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { userName, password } = await request.json();
        await dbConnect();
        console.log("connected to db");
        const user = await User.findOne({ userName });
        if (!user) {
            return NextResponse.json({ message: "invalid user name or password 123" }, { status: 400 });
        }
        const isMatch = await user.password == password;
        if (!isMatch) {
            return NextResponse.json({ message: "invalid user name or password" }, { status: 400 });
        }
        return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } catch (err: any) {
        console.error("Error: ", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}