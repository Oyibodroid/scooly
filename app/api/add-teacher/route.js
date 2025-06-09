import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Incoming data:", body);

    return NextResponse.json({
      message: "Teacher added successfully!",
      data: body,
    });
  } catch (error) {
    console.error("❌ Error in API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
