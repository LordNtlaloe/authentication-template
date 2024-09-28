import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import Google from "next-auth/providers/google"
import logo from '@/public/logo.png'
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  theme:{
    logo: `${logo}`
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google
  ],
})