import UserBillboard from "@/components/userComponents/ui/billboard";
import Container from "@/components/userComponents/ui/container";
import prismadb from "@/lib/prismadb";

export default async function User() {
  const Billboard = await prismadb.billboard.findUnique({
    where:{
        id:"b545be57-77be-4367-a914-804408b5240c"
    }
});
  return (
  <Container>
    <div className="space-y-10 pb-10">
      <UserBillboard data={Billboard}/>
    </div>
  </Container>
    );
}
