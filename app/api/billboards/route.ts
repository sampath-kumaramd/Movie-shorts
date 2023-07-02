import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
){
    try {
        const { userId } = auth();
        const body = await req.json();

        const { label , imageUrl } = body;

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!label){
            return new NextResponse("Label is required", { status: 400 });
        }

        if(!imageUrl){
            return new NextResponse("Image URL is required", { status: 400 });
        }

        const banner = await prismadb.banner.create({
            data:{
                label,
                imageUrl,
            }
        });

        return NextResponse.json(banner);
    } catch(error) {
        console.error('[BILLBOARDS_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}


export async function GET(
    req: Request,
){
    try {
        const { userId } = auth();

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const banner = await prismadb.banner.findMany({
           
        });

        return NextResponse.json(banner);
    } catch(error) {
        console.error('[BILLBOARDS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}