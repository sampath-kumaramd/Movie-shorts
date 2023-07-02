"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { MovieColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface MovieClientProps{
  data:MovieColumn[]
}

export const MovieClient: React.FC<MovieClientProps> = ({
  data
}) => {
    const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Movies  (${data.length})`} description="Manage your Movies." />
        <Button onClick={()=>router.push("movies/new")}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data = {data}/>
    </>
  );
};
