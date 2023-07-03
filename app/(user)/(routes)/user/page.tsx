import Row from "@/components/userComponents/Row";
import MovieList from "@/components/userComponents/movie-list";
import UserBillboard from "@/components/userComponents/ui/billboard";
import Container from "@/components/userComponents/ui/container";
import prismadb from "@/lib/prismadb";

export default async function Movie() {
  const billboards = await prismadb.billboard.findMany({        
  });

  const billboardId = billboards[0].id;

  const Billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  const movies = await prismadb.movie.findMany({
    where:{
      isFeatured: true
    }
  });
  
  if (Billboard ) {
    return (
      <Container>
        <div className="space-y-10 pb-10">
          <UserBillboard data={Billboard} />
        </div>
        <div className="flex flex-col gap-y-8 ">
          <MovieList  title="Featured Movies" data={movies} />
        
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="space-y-10 pb-10">
          <p>No billboard found</p>
        </div>
      </Container>
    );
  }
}
