import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import Google from "next-auth/providers/google"
import logo from '@/public/logo.png'
import { Adapter } from "next-auth/adapters"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  theme:{
    logo: '/logo.png'
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks:{
    session({session, user}){
      session.user.role = user.role;
      return session;
    }
  },
  providers: [
    Google
  ],
})