"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const footerLinks = [
	{ label: "GitHub", href: "https://github.com/praveen-tek/api-demic" },
	{ label: "Docs", href: "/docs" },
	{ label: "Changelog", href: "/changelog" },
	{ label: "About", href: "/about" },
];

export default function FooterSection() {
	return (
		<footer className="border-t border-border bg-black">
			<div className="overflow-hidden border-b border-border py-10 px-10 flex items-end bg-black">
				<h2
					className="font-type-light leading-[0.82] tracking-[-0.04em] text-white select-none w-full"
					style={{ fontSize: "clamp(72px, 16vw, 200px)" }}
				>
					apidemic
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-border">
				<div className="bg-black px-10 py-10 flex flex-col gap-8">
					<span className="font-eightgon text-[10px] tracking-[0.2em] uppercase text-[var(--muted-dark)]">
						Contact
					</span>
					<div className="flex flex-col gap-3">
						<Input
							placeholder="Your email"
							className="bg-black border-border rounded-none font-eightgon text-[12px] text-white placeholder:text-[var(--muted-dark)] focus-visible:ring-0 focus-visible:border-white h-10"
						/>
						<Textarea
							placeholder="Your message"
							rows={4}
							className="bg-black border-border rounded-none font-eightgon text-[12px] text-white placeholder:text-[var(--muted-dark)] focus-visible:ring-0 focus-visible:border-white resize-none"
						/>
						<Button className="self-start font-eightgon text-[10px] tracking-[0.15em] uppercase rounded-none bg-white text-black hover:bg-white/90 px-6 h-10">
							[ Send ]
						</Button>
					</div>
				</div>

				<div className="bg-black px-10 py-10 flex flex-col justify-between gap-10">
					<div className="flex flex-col gap-4">
						<span className="font-eightgon text-[10px] tracking-[0.2em] uppercase text-[var(--muted-dark)]">
							Links
						</span>
						<div className="flex flex-col gap-3">
							{footerLinks.map(({ label, href }) => (
								<Link
									key={href}
									href={href}
									className="font-eightgon text-[12px] text-white/50 hover:text-white transition-colors w-fit"
								>
									↗ {label}
								</Link>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-1">
						<span className="font-eightgon text-[10px] text-(--muted-dark)">
							apidemic — AGPLv3 Open Source
						</span>
						<span className="font-eightgon text-[10px] text-[var(--muted-dark)]">
							© {new Date().getFullYear()} Automated agentic API testing
							platform
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
