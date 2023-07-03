"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Admin() {
  const { toast } = useToast();
  return (
    <>
      <div
        className=" items-center justify-center mx-a
       left-72 text-xl p-10"
      >
        {" "}
        <p>
          <b> Welcome, esteemed website admins,</b>
          to our movie database management system!{" "}
        </p>
        <p className="mt-7 text-xl-">
          {" "}
          Here, you have full control over the categories available to our
          users. The category table is your go-to resource to check if a
          specific category already exists. If it's not listed, you can
          effortlessly add it to expand our collection. Once you've ensured the
          category availability, proceed to add movies to our database. With
          your expertise, our users will have access to a diverse range of
          movies, TV series, and TV shows.
        </p>
        <p className="mt-3">
          We are excited to announce that we are continuously enhancing our
          movie database for an even better user experience. Currently, we are
          actively developing the functionality to add actors to our system. We
          understand the importance of including comprehensive information about
          the talented individuals who bring our favorite movies to life. Our
          dedicated team is working diligently to make this feature available as
          soon as possible. We appreciate your patience and look forward to
          providing you with a more enriched movie database, complete with actor
          details, in the near future.
        </p>
        <p className="mt-10">
          Thank you for your valuable contributions to our ever-evolving content
          library!
        </p>
      </div>
    </>
  );
}
