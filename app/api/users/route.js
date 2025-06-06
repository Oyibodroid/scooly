import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.teachers.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('GET /api/users error:', error); // 👈 Check this in your terminal
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
