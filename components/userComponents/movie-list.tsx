import { Movie } from "@/types";
import exp from "constants";
import NoResults from "./ui/no-results";
import { Key } from "react";
import MovieCard from "./ui/movie-card";

interface MovieListProps {
  title: string;
  data: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ title, data }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <p>{data[0].title}</p>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-col-4 gap-4">
        {data.map((item) => (
          <MovieCard key={item.id as Key} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
