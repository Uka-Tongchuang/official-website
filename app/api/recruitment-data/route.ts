// app/api/get-data/route.ts
import { NextRequest, NextResponse } from "next/server";
import db from "@/components/utils/db";

export async function GET(req: NextRequest) {
    try {
        const [cardData] = await db.query("SELECT * FROM card WHERE page = 'recruitment outsource'");
        const [textData] = await db.query("SELECT * FROM text WHERE page = 'recruitment outsource'");
        // 将两个数组封装成一个对象
        const combinedData = {
        cards: cardData,
        texts: textData
        };
        return NextResponse.json(combinedData);
    } catch (error: any) {
        console.error('Database query error:', error); // Log the error to the server console
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
