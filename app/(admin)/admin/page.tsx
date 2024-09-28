import React from 'react';
import { Metadata } from 'next';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import getSession from '@/lib/getSession';

export const metadata: Metadata = {
  title: "Admin"
}

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin")
  }

  if (user.role !== "Admin") {
    return (
      <main className='mx-auto my-10 space-y-3'>
        <p className="text-center">You Are Unauthorized To Access This Page</p>
        <button className='btn btm-md'>
          <Link href="/">Go Back Home</Link>
        </button>
      </main>
    )
  }

  return (
    <main className='mx-auto my-10 space-y-3'>
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Welcome Admin</p>
    </main>
  )
}
