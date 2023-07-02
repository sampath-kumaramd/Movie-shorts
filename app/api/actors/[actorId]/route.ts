import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    request: Request,
    { params } : { params: { actorId: string } }
) {
    try{
        if(!params.actorId){
            return new NextResponse("Actor Id is required", { status: 400 });
        }

        const actor = await prismadb.actor.findUnique({
            where:{
                id: params.actorId,
            },
        });

        return NextResponse.json(actor);
    } catch (err) {
        console.error('[ACTOR_GET]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function PATCH(
    req: Request,
    { params } : { params: { actorId: string } }
){
    try{
        const { userId } = auth();
        const body = await req.json();

        const { Name, imageUrl } = body;
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!Name){
            return new NextResponse("Name is required", { status: 400 });
        }

        if(!imageUrl){
            return new NextResponse("Image URL is required", { status: 400 });
        }

        if(!params.actorId){
            return new NextResponse("Actor Id is required", { status: 400 });
        }

        const actor = await prismadb.actor.updateMany({
            where:{
                id: params.actorId,
            },
            data:{
                Name,
                imageUrl,
            }
        });

        return NextResponse.json(actor);
    } catch(error) {
        console.error('[ACTOR_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function DELETE(
    request: Request,
    { params } : { params: { actorId: string } }
) {
    try{
        const { userId } = auth();
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!params.actorId){
            return new NextResponse("Billboard Id is required", { status: 400 });
        }

        const actor = await prismadb.actor.delete({
            where:{
                id: params.actorId,
            },
        });

        return NextResponse.json(actor);
    } catch (err) {
        console.error('[ACTOR_DELETE]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};