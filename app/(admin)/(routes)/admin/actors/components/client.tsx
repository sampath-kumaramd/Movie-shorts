"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ActorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface ActorClientProps{
  data:ActorColumn[]
}

export const ActorClient: React.FC<ActorClientProps> = ({
  data
}) => {
    const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Actors  (${data.length})`} description="Manage your actors." />
        <Button onClick={()=>router.push("actors/new")}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data = {data}/>
    </>
  );
};
