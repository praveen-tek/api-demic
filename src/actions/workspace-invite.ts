"use server"

import db from "@/db"
import { randomBytes } from "crypto"
import { currentUser } from "./user"
import { workspaceInvite, workspaceMember } from "@/db/schema"
import { eq } from "drizzle-orm"

export const generateWorkspaceInvite = async (workspaceId: string) => {
  const token = randomBytes(16).toString("hex")
  const user = await currentUser()
  if (!user) throw new Error("Unauthorized")

  const [invite] = await db.insert(workspaceInvite).values({
    workspaceId,
    token,
    createdById: user.id,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  }).returning()

  return `${process.env.NEXT_PUBLIC_APP_URL}/invite/${invite.token}`
}

export const acceptWorkspaceInvite = async (token: string) => {
  const user = await currentUser()
  if (!user) throw new Error("Unauthorized")

  const [invite] = await db
    .select()
    .from(workspaceInvite)
    .where(eq(workspaceInvite.token, token))

  if (!invite) throw new Error("Invalid invite")
  if (!invite.expiresAt || invite.expiresAt < new Date()) throw new Error("Invite expired")

  await db.insert(workspaceMember).values({
    userId: user.id,
    workspaceId: invite.workspaceId,
    role: "VIEWER",
  })

  await db.delete(workspaceInvite).where(eq(workspaceInvite.id, invite.id))

  return { success: true }
}

export const getAllWorkspaceMembers = async (workspaceId: string) => {
  return await db.query.workspaceMember.findMany({
    where: eq(workspaceMember.workspaceId, workspaceId),
    with: { user: true },
  })
}