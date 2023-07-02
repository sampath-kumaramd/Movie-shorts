import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    request: Request,
    { params } : { params: { billboardId: string } }
) {
    try{
        if(!params.billboardId){
            return new NextResponse("Billboard Id is required", { status: 400 });
        }

        const billboard = await prismadb.banner.findUnique({
            where:{
                id: params.billboardId,
            },
        });

        return NextResponse.json(billboard);
    } catch (err) {
        console.error('[BILLBOARDS_G]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function PATCH(
    req: Request,
    { params } : { params: { billboardId: string } }
){
    try{
        const { userId } = auth();
        const body = await req.json();

        const { label, imageUrl } = body;
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!label){
            return new NextResponse("Label is required", { status: 400 });
        }

        if(!imageUrl){
            return new NextResponse("Image URL is required", { status: 400 });
        }

        if(!params.billboardId){
            return new NextResponse("Billboard Id is required", { status: 400 });
        }

        const billboard = await prismadb.banner.updateMany({
            where:{
                id: params.billboardId,
            },
            data:{
                label,
                imageUrl,
            }
        });

        return NextResponse.json(billboard);
    } catch(error) {
        console.error('[BILLBOARDS_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function DELETE(
    request: Request,
    { params } : { params: { billboardId: string } }
) {
    try{
        const { userId } = auth();
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!params.billboardId){
            return new NextResponse("Billboard Id is required", { status: 400 });
        }

        const billboard = await prismadb.banner.delete({
            where:{
                id: params.billboardId,
            },
        });

        return NextResponse.json(billboard);
    } catch (err) {
        console.error('[BILLBOARDS_DELETE]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};