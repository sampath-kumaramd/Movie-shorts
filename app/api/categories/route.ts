import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
){
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name , BillboardId } = body;

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!name){
            return new NextResponse("Name is required", { status: 400 });
        }

        if(!BillboardId){
            return new NextResponse("Billboard id is required", { status: 400 });
        }

        const category = await prismadb.category.create({
            data:{
                name,
                BillboardId,
            }
        });

        return NextResponse.json(category);
    } catch(error) {
        console.error('[CATEGORY_POST]', error);
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

        const category = await prismadb.category.findMany({
           
        });

        return NextResponse.json(category);
    } catch(error) {
        console.error('[CATEGORY_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}