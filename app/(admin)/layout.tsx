import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (userId !== "user_2Rxkffrisy9rx7TwRxwWZy5zEsn") {
    redirect("/user");
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
