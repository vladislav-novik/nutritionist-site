import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log('POST', body);
}