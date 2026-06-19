import Link from "next/link";
import { changelog } from "@/lib/changelog/changelog";
import { TextScramble } from "../animated/text-scramble";
import FooterSection from "../footer/footer";
import Navbar from "../navigation/navbar";
import FaqSection from "./faqs-section";
import FeaturesSection from "./features-section";

export default function HeroSection() {
	const recent = changelog.slice(0, 2);

	return (
		<section className="h-full flex flex-col bg-(--bg) text-(--fg) border-r border-border overflow-y-auto">
			<Navbar />

			<div className="px-10 py-12 border-b border-border">
				<h1 className="font-type-light text-[clamp(52px,8vw,108px)] leading-[0.88] tracking-[-0.03em] text-white mb-6">
					Agentic
					<br />
					API Testing
				</h1>
				<TextScramble
					duration={1.2}
					characterSet=". "
					className="font-eightgon text-[13px] leading-[1.75] text-white/80 max-w-120 mb-8"
				>
					An autonomous agent that explores, validates, and stress-tests your
					API endpoints giving you coverage without the overhead.
				</TextScramble>
				<div className="flex items-center gap-3">
					<Link
						href="/get-started"
						className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-(--fg) text-(--bg) hover:bg-blue-500 hover:text-white transition-colors"
					>
						[ Get Started ]
					</Link>
					<Link
						href="/docs"
						className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 border border-border text-white/80 hover:text-blue-500 transition-colors"
					>
						[ Read Docs ]
					</Link>
				</div>
			</div>

			<div className="grid grid-cols-2 border-b border-border">
				<div className="px-10 py-8 border-r border-border">
					<h2 className="font-type-light text-[28px] tracking-[-0.02em] text-white mb-4">
						Warning!
					</h2>
					<p className="font-eightgon text-[12px] leading-[1.75] text-white/80">
						If you experience false confidence in your API coverage, nihilism
						toward test suites, or gout from manual QA apidemic was built for
						you. Apply the agent immediately.
					</p>
				</div>
				<div className="px-10 py-8">
					<h2 className="font-type-light text-[28px] tracking-[-0.02em] text-white mb-4">
						Changelog
					</h2>
					<div className="flex flex-col gap-3">
						{recent.map((entry) => (
							<div key={entry.version} className="flex items-start gap-3">
								<span className="font-eightgon text-white/80 mt-0.5">↗</span>
								<span className="font-eightgon text-[12px] text-white/80 leading-[1.6]">
									{entry.version} — {entry.title}
								</span>
							</div>
						))}
						<Link
							href="/changelog"
							className="font-eightgon text-[10px] tracking-[0.15em] uppercase text-(--muted-dark) hover:text-blue-500 transition-colors mt-1"
						>
							View all →
						</Link>
					</div>
				</div>
			</div>

			<FeaturesSection />
			<FaqSection />
			<FooterSection />
		</section>
	);
}
