import Row from "@/components/userComponents/Row";
import prismadb from "@/lib/prismadb";

const MovieByCategoryPage = async ({
  params
}: {
  params: {categoryId: string}
}) => {
  const ActionMovies = await prismadb.movie.findMany({
    where: {
      categoryId: params.categoryId,
      genres:"Action"
    }
  });

  const AdventureMovies = await prismadb.movie.findMany({
    where: {
      categoryId: params.categoryId,
      genres:"Adventure"
    }
  });

  const CrimeMovies = await prismadb.movie.findMany({
    where: {
      categoryId: params.categoryId,
      genres:"Crime"
    }
  });

  const HorrorMovies = await prismadb.movie.findMany({
    where: {
      categoryId: params.categoryId,
      genres:"Horror"
    }
  });

  const RomanceMovies = await prismadb.movie.findMany({
    where: {
      categoryId: params.categoryId,
      genres:"Romance"
    }
  });

  const movieCategories = [ActionMovies, AdventureMovies, CrimeMovies, HorrorMovies, RomanceMovies];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
      {movieCategories.map((movieCategory, index) => {
        if (movieCategory.length > 0) {
          return <Row key={index} title={movieCategory[0].genres} movies={movieCategory}/>;
        }
      })}
      </div>
    </div>
  );
};

export default MovieByCategoryPage;