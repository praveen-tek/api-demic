import FooterSection from "@/components/(shared)/footer/footer";
import Navbar from "@/components/(shared)/navigation/navbar";

const values = [
	{
		title: "Coverage Without Overhead",
		description:
			"Manual test suites rot the moment an endpoint changes. apidemic explores your API surface continuously so coverage stays current without anyone maintaining it.",
	},
	{
		title: "Agentic, Not Scripted",
		description:
			"Instead of fixed test cases, an agent reasons about your API and decides what to probe next, finding edge cases a static suite would never think to check.",
	},
	{
		title: "Built for Developers",
		description:
			"No dashboards to babysit. Plug it into CI, point it at your API, and read structured reports that actually tell you something useful.",
	},
];

export default function AboutPage() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar stays full-width out here */}
			<Navbar />

			<div className="px-6 md:px-10 flex flex-col gap-0 flex-1">
				<div className="font-type-light text-[clamp(40px,6vw,80px)] leading-[0.88] tracking-[-0.03em] text-white py-12">
					About
				</div>

				<div className="py-8 border-t border-border">
					<p className="font-eightgon text-[12px] leading-[1.75] text-white/50 max-w-[560px]">
						apidemic is an automated agentic API testing platform. Instead of
						manually writing test cases or configuring static test suites, it
						uses an agent-driven approach to explore, validate, and stress your
						API endpoints intelligently.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
					{values.map((item) => (
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
					<h2 className="font-type-light text-[22px] tracking-[-0.02em] text-white mb-4">
						Status
					</h2>
					<p className="font-eightgon text-[12px] leading-[1.75] text-white/50">
						In active development. Core agentic testing loop in progress.
					</p>
				</div>

				{/* FIXED: Restored the broken <a> tags here */}
				<div className="py-8 border-t border-border flex items-center gap-3">
					<a
						href="/get-started"
						className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-(--fg) text-(--bg) hover:bg-blue-500 hover:text-white transition-colors"
					>
						[ Get Started ]
					</a>

					<a
						href="https://github.com"
						className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 border border-border text-white/80 hover:text-blue-500 transition-colors"
					>
						[ GitHub ]
					</a>
				</div>
			</div>

			<FooterSection />
		</div>
	);
}
