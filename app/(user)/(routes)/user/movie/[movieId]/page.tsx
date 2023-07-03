import { SingleMovie } from "@/components/userComponents/SingleMovie";
import prismadb from "@/lib/prismadb";

const MoviePage = async ({ params }: { params: { movieId: string } }) => {
  const Movie = await prismadb.movie.findUnique({
    where: {
      id: params.movieId,
    },
  });
  if (Movie) {
    return (
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SingleMovie movies={Movie} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="space-y-10 pb-10">
        <p>No Movie found</p>
      </div>
    );
  }
};

export default MoviePage;
