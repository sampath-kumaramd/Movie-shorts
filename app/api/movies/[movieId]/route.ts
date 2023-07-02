import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    request: Request,
    { params } : { params: { movieId: string } }
) {
    try{
        if(!params.movieId){
            return new NextResponse("Movie Id is required", { status: 400 });
        }

        const movie = await prismadb.movie.findUnique({
            where:{
                id: params.movieId,
            },
        });

        return NextResponse.json(movie);
    } catch (err) {
        console.error('[MOVIES_GET]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function PATCH(
    req: Request,
    { params } : { params: { movieId: string } }
){
    try{
        const { userId } = auth();
        const body = await req.json();

        const { title , imageUrl ,bannerImageUrl ,  description , releaseDate , director , genres ,isFeatured , isArchived} = body;

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!title){
            return new NextResponse("Title is required", { status: 400 });
        }

        if(!imageUrl){
            return new NextResponse("Image is required", { status: 400 });
        }

        if(!bannerImageUrl){
            return new NextResponse("banner image is required", { status: 400 });
        }

        if(!description){
            return new NextResponse("Description is required", { status: 400 });
        }

        if(!releaseDate){
            return new NextResponse("Release date is required", { status: 400 });
        }
        if(!director){
            return new NextResponse("Director is required", { status: 400 });
        }

        if(!genres){
            return new NextResponse("Genres is required", { status: 400 });
        }

        const movie = await prismadb.movie.updateMany({
            where:{
                id: params.movieId,
            },
            data:{
                title,
                imageUrl,
                bannerImageUrl, 
                description,
                releaseDate,
                director,
                genres,
                isFeatured,
                isArchived
            }
        });

        return NextResponse.json(movie);
    } catch(error) {
        console.error('[movieS_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function DELETE(
    request: Request,
    { params } : { params: { movieId: string } }
) {
    try{
        const { userId } = auth();
       
        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!params.movieId){
            return new NextResponse("movie Id is required", { status: 400 });
        }

        const movie = await prismadb.movie.delete({
            where:{
                id: params.movieId,
            },
        });

        return NextResponse.json(movie);
    } catch (err) {
        console.error('[MOVIES_DELETE]', err);
        return new NextResponse("Internal error", { status: 500 });
    }
};