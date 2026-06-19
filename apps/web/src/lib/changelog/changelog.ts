export type ChangelogEntry = {
	version: string;
	date: string;
	title: string;
	description: string;
	status: "released" | "in-progress" | "planned";
};

export const changelog: ChangelogEntry[] = [
	{
		version: "v0.4",
		date: "2026-Q2",
		title: "Agentic Test Execution",
		description:
			"Agent-driven test execution loop wired into core runner. Endpoint exploration logic in progress.",
		status: "in-progress",
	},
	{
		version: "v0.3",
		date: "2025-Q4",
		title: "Structured Reporting",
		description:
			"Test reporting pipeline added with structured, actionable output format.",
		status: "released",
	},
	{
		version: "v0.2",
		date: "2025-Q3",
		title: "REST Coverage Layer",
		description: "Automated endpoint coverage across REST APIs implemented.",
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
