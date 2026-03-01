import type { workspaceMember } from "@/db/schema";

export type UserProps = {
  id: string;
  name: string;
  image: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type MemberProps = {
  id: string;
  role: typeof workspaceMember.$inferSelect.role;
  userId: string;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type WorkspaceProps = {
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  members: MemberProps[];
};