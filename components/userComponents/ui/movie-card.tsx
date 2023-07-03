"use client";

import { Movie } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";


interface MovieCardProps{
    data:Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data,
  }) => {

    const router = useRouter();

    const handleClick = () => {
      router.push(`/user/movie/${data.id}`);
    }
    return (
      <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        <div className="relative aspect-square bg-gray-100 rounded-xl">
         <Image 
         //@ts-ignore
         src={data?.imageUrl}
         fill
         alt="movie poster"
           className="aspect-square rounded-md object-cover" 
         />
         <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <IconButton
          onClick={() => {}}
          icon={<Expand size={20} className="text-gray-600 "/>}
          />
          <div className="text-white text-lg uppercase ">{data.title}</div>
         </div>
        </div>
      </div>
    );
  }
export default MovieCard;