import FooterSection from "@/components/(shared)/footer/footer";
import Navbar from "@/components/(shared)/navigation/navbar";
import { changelog } from "@/lib/changelog/changelog";

const statusStyles: Record<string, string> = {
	released: "text-green-500",
	"in-progress": "text-yellow-500",
	planned: "text-[var(--muted-dark)]",
};

export default function ChangelogPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			<div className="px-6 md:px-10 flex flex-col gap-0 flex-1">
				<div className="font-type-light text-[clamp(40px,6vw,80px)] leading-[0.88] tracking-[-0.03em] text-white py-12">
					Changelog
				</div>
				{changelog.map((entry) => (
					<div
						key={entry.version}
						className="py-8 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6"
					>
						<div className="flex flex-col gap-1">
							<span className="font-eightgon text-[11px] text-white">
								{entry.version}
							</span>
							<span className="font-eightgon text-[10px] text-(--muted-dark)">
								{entry.date}
							</span>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-3">
								<h2 className="font-type-light text-[22px] tracking-[-0.02em] text-white">
									{entry.title}
								</h2>
								<span
									className={`font-eightgon text-[10px] tracking-widest uppercase ${statusStyles[entry.status]}`}
								>
									{entry.status}
								</span>
							</div>
							<p className="font-eightgon text-[12px] leading-[1.75] text-white/50 max-w-[480px]">
								{entry.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<FooterSection />
		</div>
	);
}
