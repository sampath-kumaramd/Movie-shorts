
import { Movie } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation';



interface Props {
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/user/movie/${movie.id}`);
  }

  return (
    <div onClick={handleClick}
      className="relative h-[300px] min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-[300px] md:min-w-[260px] md:hover:scale-105"
     
    >
       <Image 
         //@ts-ignore
         src={movie?.imageUrl}
         fill
         alt="movie poster"
           className="aspect-square rounded-md object-cover" 
         />
    </div>
  )
}

export default Thumbnail
function useRecoilState(modalState: any): [any, any] {
  throw new Error('Function not implemented.')
}

