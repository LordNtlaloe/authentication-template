import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany()
  return (
    <div className="w-screen">
      <Navbar />
      <ul className="list-disc list-inside">
        {users.map((user: any) => (
          <Link href={`user/${user.id}`} className="hover:text-indigo-800">
            <li key={user.id}>{user.name || `User: ${user.id}`}</li>
          </Link>
          
        ))}
      </ul>
    </div>
  );
}
