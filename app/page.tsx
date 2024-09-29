import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany()
  return (
    <div className="w-screen">
      <Navbar />
      <ul className="list-disc list-inside">
        {users.map((user) => (
          <Link key={user.id} href={`user/${user.id}`} className="hover:text-indigo-800">
            <li>{user.name || `User: ${user.id}`}</li>
          </Link>
          
        ))}
      </ul>
    </div>
  );
}
