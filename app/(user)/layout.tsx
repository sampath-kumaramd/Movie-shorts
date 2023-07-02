import NavBar from "@/components/userComponents/navbar";
import Footer from "@/components/userComponents/user-footer";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (userId === "user_2Rxkffrisy9rx7TwRxwWZy5zEsn") {
    redirect("/admin");
  }
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
