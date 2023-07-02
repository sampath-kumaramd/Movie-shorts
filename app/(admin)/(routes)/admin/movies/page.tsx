import prismadb from "@/lib/prismadb";
import { MovieClient } from "./components/client";
import { MovieColumn } from "./components/columns";
import { format } from "date-fns";
const MoviesPage = async () => {

  const movies = await prismadb.movie.findMany({
    orderBy:{
      createdAt: 'desc'
    },
    include: {
      category: true,
    },
  });

  const formattedMovie: MovieColumn[] = movies.map((item) => ({
    id : item.id,
    title : item.title,
    description: item.description,
    releaseAt : format(item.releaseDate,"MMMM do,yyyy"),
    director: item.director,
    genres: item.genres,
    category: item.category.name,
    createdAt : format(item.createdAt,"MMMM do,yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <MovieClient data={formattedMovie}/>
      </div>
    </div>
  );
}

export default MoviesPage;
