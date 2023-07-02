import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const {
      title,
      imageUrl,
      bannerImageUrl,
      description,
      releaseDate,
      director,
      genres,
      isFeatured,
      isArchived,
      categoryId,
    } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Image is required", { status: 400 });
    }

    if (!bannerImageUrl) {
      return new NextResponse("banner image is required", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!releaseDate) {
      return new NextResponse("Release date is required", { status: 400 });
    }
    if (!director) {
      return new NextResponse("Director is required", { status: 400 });
    }

    if (!genres) {
      return new NextResponse("Genres is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Category Id is required", { status: 400 });
    }
    const movie = await prismadb.movie.create({
      data: {
        title,
        imageUrl,
        bannerImageUrl,
        description,
        releaseDate,
        director,
        genres,
        categoryId,
        isFeatured,
        isArchived,
      },
    });

    return NextResponse.json(movie);
  } catch (error) {
    console.error("[BILLBOARDS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;
    const genres = searchParams.get("genres") || undefined;
    const isFeatured = searchParams.get("isFeatured");

    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const movie = await prismadb.movie.findMany({
      where: {
        categoryId,
        genres,
        isFeatured: isFeatured === "true" ? true : undefined,
        isArchived: false,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return NextResponse.json(movie);
  } catch (error) {
    console.error("[BILLBOARDS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
