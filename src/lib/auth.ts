import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "@/lib/db";
import { env } from "./env";


export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql", 
    }),

    socialProviders:{
        github:{
            clientId:env.GITHUB_CLIENT_ID as string,
            clientSecret:env.GITHUB_CLIENT_SECRET as string
        },
        google:{
            clientId:env.GOOGLE_CLIENT_ID as string,
            clientSecret:env.GOOGLE_CLIENT_SECRET as string
        }
    }
});