import prismadb from "@/lib/prismadb";
import { MovieForm } from "./components/movie-form";


const MoviePage = async ({
    params
}:{
    params: {movieId: string}
}) => {
    const Movie = await prismadb.movie.findUnique({
        where:{
            id: params.movieId
        }
    });

    const categories = await prismadb.category.findMany({
     
    });
  
  
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <MovieForm 
        categories={categories}
        initialData={Movie}
        />
      </div>
    </div>
  );
};

export default MoviePage;
