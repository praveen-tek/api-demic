export type ChangelogEntry = {
	version: string;
	date: string;
	title: string;
	description: string;
	status: "released" | "in-progress" | "planned";
};

export const changelog: ChangelogEntry[] = [
	{
		version: "v0.2",
		date: "2025-Q3",
		title: "CI/CD Integration",
		description:
			"Pipeline hooks for GitHub Actions, GitLab CI, and Bitbucket Pipelines.",
		status: "planned",
	},
	{
		version: "v0.1",
		date: "2025-Q2",
		title: "Agentic Test Loop",
		description:
			"Core agent loop that autonomously explores and validates REST endpoints.",
		status: "in-progress",
	},
	{
		version: "v0.0",
		date: "2025-Q1",
		title: "Project Init",
		description:
			"Repository initialized. Architecture and monorepo scaffolding complete.",
		status: "released",
	},
];
