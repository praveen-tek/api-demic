import { changelog } from "./lib/changelog";

const statusStyles: Record<string, string> = {
	released: "text-green-500",
	"in-progress": "text-yellow-500",
	planned: "text-[var(--muted-dark)]",
};

export default function ChangelogPage() {
	return (
		<div className="px-10 py-12 flex flex-col gap-0">
			<h1 className="font-type-light text-[clamp(40px,6vw,80px)] leading-[0.88] tracking-[-0.03em] text-white mb-10">
				Changelog
			</h1>
			{changelog.map((entry) => (
				<div
					key={entry.version}
					className="border-t border-[var(--border)] py-8 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6"
				>
					<div className="flex flex-col gap-1">
						<span className="font-eightgon text-[11px] text-white">
							{entry.version}
						</span>
						<span className="font-eightgon text-[10px] text-[var(--muted-dark)]">
							{entry.date}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-3">
							<h2 className="font-type-light text-[22px] tracking-[-0.02em] text-white">
								{entry.title}
							</h2>
							<span
								className={`font-eightgon text-[10px] tracking-[0.1em] uppercase ${statusStyles[entry.status]}`}
							>
								{entry.status}
							</span>
						</div>
						<p className="font-eightgon text-[12px] leading-[1.75] text-[var(--muted)] max-w-[480px]">
							{entry.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
