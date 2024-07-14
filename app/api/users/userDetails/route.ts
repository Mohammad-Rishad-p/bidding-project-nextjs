import { NextResponse } from "next/server";
import User from "@/models/users";

export async function POST(request: any) {
    try {
        const { userName } = await request.json();
        const user = await User.findOne({ userName });
        if (!user) {
            return NextResponse.json({ message: "Unable to find user" }, { status: 400 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch (err: any) {
        console.error("Error fetching user details:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
