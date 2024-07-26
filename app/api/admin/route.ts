import dbConnect from "@/libs/dbConnect";
import Admin from "@/models/admin";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { userName, password } = await request.json();
        await dbConnect();
        console.log("connected to db");
        const admin = await Admin.findOne({ userName });
        if (!admin) {
            return NextResponse.json({ message: "invalid user name or password 123" }, { status: 400 });
        }
        const isMatch = await admin.password == password;
        if (!isMatch) {
            return NextResponse.json({ message: "invalid user name or password" }, { status: 400 });
        }
        return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } catch (err: any) {
        console.error("Error: ", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}