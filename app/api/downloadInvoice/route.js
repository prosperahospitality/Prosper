import { NextResponse } from "next/server";
import generateMultiplePdfs from "@/_lib/util/generatePdf";

export async function GET(req) {

    const success = false;

    return NextResponse.json({ success: true })

}

export async function POST(req) {
    const success = false;
    const payload = await req.json();

    

    await generateMultiplePdfs(payload.pdfRequests);

    return NextResponse.json({ success: true })


}