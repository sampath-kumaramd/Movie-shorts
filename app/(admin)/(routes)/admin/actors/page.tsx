import prismadb from "@/lib/prismadb";
import { ActorClient } from "./components/client";
import { ActorColumn } from "./components/columns";
import { format } from "date-fns";
const ActorsPage = async () => {

  const actors = await prismadb.actor.findMany({
    orderBy:{
      createdAt: 'desc'
    }
  });

  const formattedActor: ActorColumn[] = actors.map((item) => ({
    id : item.id,
    name : item.Name,
    character: item.character,
    createdAt : format(item.createdAt,"MMMM do,yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ActorClient data={formattedActor}/>
      </div>
    </div>
  );
}

export default ActorsPage;
