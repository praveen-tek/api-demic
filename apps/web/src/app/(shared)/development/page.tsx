import Navbar from "@/components/(shared)/navigation/navbar";
import FooterSection from "@/components/(shared)/footer/footer";

const stack = [
	{ label: "Frontend", value: "Next.js, Tailwind" },
	{ label: "Backend", value: "Hono.js, Cloudflare Workers" },
	{ label: "Database", value: "PostgreSQL, Drizzle ORM" },
	{ label: "Auth", value: "Better Auth" },
];

const principles = [
	{
		title: "Open Source",
		description:
			"apidemic is fully open source under the MIT license. Fork it, modify it, ship it.",
	},
	{
		title: "Built in Public",
		description:
			"Development happens transparently. Every commit, issue, and decision is visible on GitHub.",
	},
	{
		title: "Community Driven",
		description:
			"Feature direction is shaped by real usage and contributor feedback, not a closed roadmap.",
	},
];

export default function DevelopmentPage() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar stays outside the padded wrapper for full-width scaling */}
			<Navbar />

			<div className="px-6 md:px-10 flex flex-col gap-0 flex-1">
				<div className="font-type-light text-[clamp(40px,6vw,80px)] leading-[0.88] tracking-[-0.03em] text-white py-12">
					Development
				</div>

				<div className="py-8 border-t border-border">
					<p className="font-eightgon text-[12px] leading-[1.75] text-white/50 max-w-[560px]">
						apidemic is developed in the open. The source is available on
						GitHub, contributions are welcome, and the project follows a
						simple philosophy: agentic API testing should be accessible to
						everyone, not locked behind a paywall.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
					{principles.map((item) => (
						<div
							key={item.title}
							className="py-8 px-0 md:px-6 border-b md:border-b-0 md:border-r border-border last:border-r-0"
						>
							<h2 className="font-type-light text-[22px] tracking-[-0.02em] text-white mb-3">
								{item.title}
							</h2>
							<p className="font-eightgon text-[12px] leading-[1.75] text-white/50">
								{item.description}
							</p>
						</div>
					))}
				</div>

				<div className="py-8 border-t border-border">
					<h2 className="font-type-light text-[22px] tracking-[-0.02em] text-white mb-6">
						Tech Stack
					</h2>
					<div className="flex flex-col gap-3">
						{stack.map((item) => (
							<div
								key={item.label}
								className="flex items-center gap-6 font-eightgon text-[12px]"
							>
								<span className="text-(--muted-dark) w-[100px]">
									{item.label}
								</span>
								<span className="text-white/80">{item.value}</span>
							</div>
						))}
					</div>
				</div>

				{/* FIXED: Reconstructed the broken <a> tags below */}
				<div className="py-8 border-t border-border flex items-center gap-3">
					<a
						href="https://github.com"
						className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-(--fg) text-(--bg) hover:bg-blue-500 hover:text-white transition-colors"
					>
						[ View on GitHub ]
					</a>
					
					<a
						href="/docs"
						className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 border border-border text-white/80 hover:text-blue-500 transition-colors"
					>
						[ Read Docs ]
					</a>
				</div>
			</div>

			<FooterSection />
		</div>
	);
}