CREATE TYPE "public"."direction" AS ENUM('INCOMING', 'OUTGOING');--> statement-breakpoint
CREATE TYPE "public"."member_role" AS ENUM('ADMIN', 'EDITOR', 'VIEWER');--> statement-breakpoint
CREATE TYPE "public"."rest_method" AS ENUM('GET', 'POST', 'PUT', 'PATCH', 'DELETE');--> statement-breakpoint
CREATE TABLE "collection" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"workspace_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "environment" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"values" json NOT NULL,
	"workspace_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "request" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"method" "rest_method" DEFAULT 'GET' NOT NULL,
	"url" text NOT NULL,
	"parameters" json,
	"headers" json,
	"body" json,
	"response" json,
	"collection_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "request_run" (
	"id" text PRIMARY KEY NOT NULL,
	"request_id" text NOT NULL,
	"status" integer NOT NULL,
	"status_text" text,
	"headers" json,
	"body" text,
	"duration_ms" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "web_socket_preset" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"url" text NOT NULL,
	"protocols" json,
	"params" json,
	"workspace_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "websocket_message" (
	"id" text PRIMARY KEY NOT NULL,
	"preset_id" text,
	"connection_id" text,
	"direction" "direction" DEFAULT 'INCOMING' NOT NULL,
	"payload" text,
	"size" integer,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"meta" json
);
--> statement-breakpoint
CREATE TABLE "workspace" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"owner_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workspace_invite" (
	"id" text PRIMARY KEY NOT NULL,
	"workspace_id" text NOT NULL,
	"token" text NOT NULL,
	"expires_at" timestamp,
	"created_by_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "workspace_invite_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "workspace_member" (
	"id" text PRIMARY KEY NOT NULL,
	"role" "member_role" DEFAULT 'ADMIN' NOT NULL,
	"user_id" text NOT NULL,
	"workspace_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "collection" ADD CONSTRAINT "collection_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "environment" ADD CONSTRAINT "environment_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "request" ADD CONSTRAINT "request_collection_id_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "request_run" ADD CONSTRAINT "request_run_request_id_request_id_fk" FOREIGN KEY ("request_id") REFERENCES "public"."request"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "web_socket_preset" ADD CONSTRAINT "web_socket_preset_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "websocket_message" ADD CONSTRAINT "websocket_message_preset_id_web_socket_preset_id_fk" FOREIGN KEY ("preset_id") REFERENCES "public"."web_socket_preset"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace" ADD CONSTRAINT "workspace_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace_invite" ADD CONSTRAINT "workspace_invite_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace_invite" ADD CONSTRAINT "workspace_invite_created_by_id_user_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace_member" ADD CONSTRAINT "workspace_member_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace_member" ADD CONSTRAINT "workspace_member_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "workspace_name_ownerId_idx" ON "workspace" USING btree ("name","owner_id");--> statement-breakpoint
CREATE UNIQUE INDEX "workspace_member_userId_workspaceId_idx" ON "workspace_member" USING btree ("user_id","workspace_id");