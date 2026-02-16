import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined
}

const db = global.prisma || new PrismaClient(
    {
        log: ['query', 'error', 'warn', 'error'],
    }
)

if (process.env.NODE_ENV === 'development'){ global.prisma = db}

export default db;