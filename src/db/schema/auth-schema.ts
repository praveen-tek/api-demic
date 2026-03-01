import { relations } from "drizzle-orm";
import {
  pgTable,
  pgEnum,
  text,
  timestamp,
  boolean,
  integer,
  json,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const workspace = pgTable(
  "workspace",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    ownerId: text("owner_id")
      .notNull()
      .references(() => user.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [uniqueIndex("workspace_name_ownerId_idx").on(table.name, table.ownerId)],
);

export const workspaceInvite = pgTable("workspace_invite", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  workspaceId: text("workspace_id")
    .notNull()
    .references(() => workspace.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at"),
  createdById: text("created_by_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const directionEnum = pgEnum("direction", ["INCOMING", "OUTGOING"]);

export const webSocketPreset = pgTable("web_socket_preset", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  url: text("url").notNull(),
  protocols: json("protocols"),
  params: json("params"),
  workspaceId: text("workspace_id").references(() => workspace.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date())
    .notNull(),
});

export const websocketMessage = pgTable("websocket_message", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  presetId: text("preset_id").references(() => webSocketPreset.id, { onDelete: "set null" }),
  connectionId: text("connection_id"),
  direction: directionEnum("direction").default("INCOMING").notNull(),
  payload: text("payload"),
  size: integer("size"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  meta: json("meta"),
});

export const memberRoleEnum = pgEnum("member_role", ["ADMIN", "EDITOR", "VIEWER"]);

export const workspaceMember = pgTable(
  "workspace_member",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    role: memberRoleEnum("role").default("ADMIN").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id),
    workspaceId: text("workspace_id")
      .notNull()
      .references(() => workspace.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [uniqueIndex("workspace_member_userId_workspaceId_idx").on(table.userId, table.workspaceId)],
);

export const collection = pgTable("collection", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  workspaceId: text("workspace_id")
    .notNull()
    .references(() => workspace.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const restMethodEnum = pgEnum("rest_method", ["GET", "POST", "PUT", "PATCH", "DELETE"]);

export const request = pgTable("request", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  method: restMethodEnum("method").default("GET").notNull(),
  url: text("url").notNull(),
  parameters: json("parameters"),
  headers: json("headers"),
  body: json("body"),
  response: json("response"),
  collectionId: text("collection_id")
    .notNull()
    .references(() => collection.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const requestRun = pgTable("request_run", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  requestId: text("request_id")
    .notNull()
    .references(() => request.id, { onDelete: "cascade" }),
  status: integer("status").notNull(),
  statusText: text("status_text"),
  headers: json("headers"),
  body: text("body"),
  durationMs: integer("duration_ms"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const environment = pgTable("environment", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  values: json("values").notNull(),
  workspaceId: text("workspace_id")
    .notNull()
    .references(() => workspace.id, { onDelete: "cascade" }),
});

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  workspaces: many(workspace),
  memberships: many(workspaceMember),
  workspaceInvites: many(workspaceInvite),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, { fields: [account.userId], references: [user.id] }),
}));

export const workspaceRelations = relations(workspace, ({ one, many }) => ({
  owner: one(user, { fields: [workspace.ownerId], references: [user.id] }),
  collections: many(collection),
  members: many(workspaceMember),
  invites: many(workspaceInvite),
  environments: many(environment),
  websocketPresets: many(webSocketPreset),
}));

export const workspaceInviteRelations = relations(workspaceInvite, ({ one }) => ({
  workspace: one(workspace, { fields: [workspaceInvite.workspaceId], references: [workspace.id] }),
  createdBy: one(user, { fields: [workspaceInvite.createdById], references: [user.id] }),
}));

export const webSocketPresetRelations = relations(webSocketPreset, ({ one, many }) => ({
  workspace: one(workspace, { fields: [webSocketPreset.workspaceId], references: [workspace.id] }),
  websocketMessages: many(websocketMessage),
}));

export const websocketMessageRelations = relations(websocketMessage, ({ one }) => ({
  preset: one(webSocketPreset, { fields: [websocketMessage.presetId], references: [webSocketPreset.id] }),
}));

export const workspaceMemberRelations = relations(workspaceMember, ({ one }) => ({
  user: one(user, { fields: [workspaceMember.userId], references: [user.id] }),
  workspace: one(workspace, { fields: [workspaceMember.workspaceId], references: [workspace.id] }),
}));

export const collectionRelations = relations(collection, ({ one, many }) => ({
  workspace: one(workspace, { fields: [collection.workspaceId], references: [workspace.id] }),
  requests: many(request),
}));

export const requestRelations = relations(request, ({ one, many }) => ({
  collection: one(collection, { fields: [request.collectionId], references: [collection.id] }),
  runs: many(requestRun),
}));

export const requestRunRelations = relations(requestRun, ({ one }) => ({
  request: one(request, { fields: [requestRun.requestId], references: [request.id] }),
}));

export const environmentRelations = relations(environment, ({ one }) => ({
  workspace: one(workspace, { fields: [environment.workspaceId], references: [workspace.id] }),
}));