"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type MovieColumn = {
  id: string
  title: string
  description: string
  releaseAt:string
  director: string
  genres: string
  createdAt:string
  
}

export const columns: ColumnDef<MovieColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.original.description;
      return description.substring(0, 30) + "...";
    },
  },
  {
    accessorKey: "director",
    header: "Director",
  },
  {
    accessorKey: "genres",
    header: "Genres",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "releaseAt",
    header: "Release Date",
  },
  {
    id:"actions",
    cell:({row}) => <CellAction data={row.original}/>
  }
]
