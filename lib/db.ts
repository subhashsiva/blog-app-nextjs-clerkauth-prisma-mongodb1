import {PrismaClient} from "@prisma/client"
import { undefined } from "zod"

declare global{
    var prisma : PrismaClient | undefined
}

export const db = global.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;