export type ChangelogEntry = {
	version: string;
	date: string;
	title: string;
	description: string;
	status: "released" | "in-progress" | "planned";
};

export const changelog: ChangelogEntry[] = [
	{
		version: "v0.3",
		date: "2025-Q1",
		title: "Project Init",
		description:
			"Repository initialized. Architecture and monorepo scaffolding complete.",
		status: "released",
	},
	{
		version: "v0.2",
		date: "2025-Q1",
		title: "Project Init",
		description:
			"Repository initialized. Architecture and monorepo scaffolding complete.",
		status: "released",
	},
	{
		version: "v0.1",
		date: "2025-Q1",
		title: "Project Init",
		description:
			"Repository initialized. Architecture and monorepo scaffolding complete.",
		status: "released",
	},
];
