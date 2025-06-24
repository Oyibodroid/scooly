import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Incoming data", body)

        return NextResponse.json({
            message: "Student successfully added",
            data: body
        });

    } catch (error) {
        console.error("error in api", error)
        return NextResponse.json({
            error: "internal server error",
            status: 500
        })
    }
}