"use client";

import Link from "next/link";
// import { useSession } from "@/lib/auth-client";

export default function AuthButton() {
	// const { data: session, isPending } = useSession();

	// if (isPending) return null;

	// if (session) {
	// 	return (
	// 		<Link
	// 			href="/dashboard"
	// 			className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-[var(--fg)] text-[var(--bg)] hover:bg-white hover:text-black transition-colors"
	// 		>
	// 			[ Dashboard ]
	// 		</Link>
	// 	);
	// }

	return (
		<Link
			href="/get-started"
			className="font-eightgon text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-(--fg) text-(--bg) hover:bg-blue-500 hover:text-black transition-colors"
		>
			[ Get Started ]
		</Link>
	);
}
