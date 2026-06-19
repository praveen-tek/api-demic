const features = [
	{
		label: "01",
		title: "Autonomous Exploration",
		description:
			"The agent navigates your API surface without manual test definitions, discovering endpoints and their behaviors on its own.",
	},
	{
		label: "02",
		title: "Edge Case Detection",
		description:
			"Automatically probes for boundary conditions, malformed inputs, and failure modes that static suites never reach.",
	},
	{
		label: "03",
		title: "Coverage Mapping",
		description:
			"Maintains a structured map of every endpoint tested, schema validated, and status code observed across each run.",
	},
	{
		label: "04",
		title: "Structured Reporting",
		description:
			"Outputs actionable test reports with failure context, reproducible payloads, and integration-ready formats.",
	},
];

export default function FeaturesSection() {
	return (
		<div className="px-10 py-10 border-b border-border">
			<span className="font-eightgon text-[10px] tracking-[0.2em] uppercase text-(--muted-dark) block mb-8">
				Features
			</span>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
				{features.map((f) => (
					<div key={f.label} className="bg-(--bg) p-6 flex flex-col gap-3">
						<span className="font-eightgon text-[10px] tracking-[0.2em] text-(--muted-dark)">
							{f.label}
						</span>
						<h3 className="font-type-light text-[20px] tracking-[-0.02em] text-white leading-tight">
							{f.title}
						</h3>
						<p className="font-eightgon text-[12px] leading-[1.75] text-white/80">
							{f.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
