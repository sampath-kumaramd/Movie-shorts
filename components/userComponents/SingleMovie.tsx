"use client";

import { Movie } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Moment from "react-moment";

interface Props {
  movies: Movie;
}

export const SingleMovie: React.FC<Props> = ({ movies }) => {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12">
      <div className="absolute top-20 left-8 h-[90vh] w-[95vw]">
        <Image
          //@ts-ignore
          src={movies?.bannerImageUrl}
          fill
          alt="movie poster"
          className="aspect-square rounded-md object-cover"
        />
      </div>

      <div className="absolute bg-black opacity-60 w-[70vw] h-[30vh] left-[10vw] top-[65vh] rounded-lg  "></div>
      <div className="absolute bg-transparent  w-[70vw] h-[30vh] left-[10vw] top-[65vh] p-7">
        <h1 className="  text-sm font-bold md:text-md lg:text-lg text-yellow-300 ">
          {movies?.title} || {movies?.genres}
        </h1>
        <h3 className="text-red-100 text-lg text-shadow-md font-bold opacity-100 ">
          {movies?.director} || Release : 
          <Moment format="D MMM YYYY" withTitle>
            {movies?.releaseDate.toString()}
          </Moment>{" "}
        </h3>
        <p className="  text-slate-50 max-w-xs mx-auto text-justify text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-7xl lg:text-lg">
          {movies?.description}
        </p>
      </div>
    </div>
  );
};
