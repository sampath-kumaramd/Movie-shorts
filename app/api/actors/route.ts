import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
){
    try {
        const { userId } = auth();
        const body = await req.json();

        const { Name , imageUrl } = body;

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!Name){
            return new NextResponse("Name is required", { status: 400 });
        }

        if(!imageUrl){
            return new NextResponse("Image URL is required", { status: 400 });
        }

        const actor = await prismadb.actor.create({
            data:{
                Name,
                imageUrl,
            }
        });

        return NextResponse.json(actor);
    } catch(error) {
        console.error('[ACTOR_POST]', error);
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

        const actor = await prismadb.actor.findMany({
           
        });

        return NextResponse.json(actor);
    } catch(error) {
        console.error('[ACTOR_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}