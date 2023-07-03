import Link from "next/link";
import Container from "./ui/container";
import { UserButton } from "@clerk/nextjs";
import MainNavUser from "./main-nav";
import prismadb from "@/lib/prismadb";


const NavBar = async () => {
    const categories = await prismadb.category.findMany({
    });

    
    
  return (
    <div className=" border-b ">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/user" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl"> Movie Shorts</p>
          </Link>

        <MainNavUser data={categories}/>
          <div className="ml-auto flex items-center space-x-4"><UserButton afterSignOutUrl="http://localhost:3000/"/></div>
        </div>
        
      </Container>
    </div>
  );
};
export default NavBar;
