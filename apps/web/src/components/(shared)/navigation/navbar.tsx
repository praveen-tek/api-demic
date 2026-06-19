import Image from "next/image";
import Link from "next/link";
import AuthButton from "../authentication/auth-button";

const links = [
	{ label: "Docs", href: "/docs" },
	{ label: "Development", href: "/development" },
	{ label: "About", href: "/about" },
];

export default function Navbar() {
	return (
		<nav className="w-full flex items-center justify-between px-6 md:px-10 py-4 border-b border-border bg-(--bg)">
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="apidemic"
					width={32}
					height={32}
					className="dark:invert"
				/>
			</Link>

			<div className="hidden md:flex items-center gap-8 ">
				{links.map(({ label, href }) => (
					<Link
						key={href}
						href={href}
						className="group font-eightgon text-[10px] tracking-[0.2em] uppercase text-white hover:text-blue-50 transition-colors"
					>
						<span className="group-hover:text-blue-500">[</span> {label}{" "}
						<span className="group-hover:text-blue-500">]</span>
					</Link>
				))}
			</div>
			<AuthButton />
		</nav>
	);
}
