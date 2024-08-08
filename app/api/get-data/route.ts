// app/api/get-data/route.ts
import { NextRequest, NextResponse } from "next/server";
import db from "@/components/utils/db";

export async function GET(req: NextRequest) {
    try {
        const [rows] = await db.query("SELECT * FROM card");
        return NextResponse.json(rows);
    } catch (error: any) {
        console.error('Database query error:', error); // Log the error to the server console
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
