import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    request: Request,
    { params } : { params: { categoryId: string } }
) {
    try{
        if(!params.categoryId){
            return new NextResponse("Billboard Id is required", { status: 400 });
        }

        const category = await prismadb.category.findUnique({
            where:{
                id: params.categoryId,
            },
        });

        return NextResponse.json(category);
    } catch (err) {
        console.error('[CATEGORY_GET]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function PATCH(
    req: Request,
    { params } : { params: { categoryId: string } }
){
    try{
        const { userId } = auth();
        const body = await req.json();

        const { name, BillboardId } = body;
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!name){
            return new NextResponse("Name is required", { status: 400 });
        }

        if(!BillboardId){
            return new NextResponse("Billboard id is required", { status: 400 });
        }

        if(!params.categoryId){
            return new NextResponse("Category Id is required", { status: 400 });
        }

        const category = await prismadb.category.updateMany({
            where:{
                id: params.categoryId,
            },
            data:{
                name,
                BillboardId,
            }
        });

        return NextResponse.json(category);
    } catch(error) {
        console.error('[CATEGORY_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function DELETE(
    request: Request,
    { params } : { params: { categoryId: string } }
) {
    try{
        const { userId } = auth();
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!params.categoryId){
            return new NextResponse("Billboard Id is required", { status: 400 });
        }

        const category = await prismadb.category.delete({
            where:{
                id: params.categoryId,
            },
        });

        return NextResponse.json(category);
    } catch (err) {
        console.error('[CATEGORY_DELETE]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};