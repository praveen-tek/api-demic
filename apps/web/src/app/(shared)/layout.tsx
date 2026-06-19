import LogoSmoke from "@/components/(shared)/animated/logo-smoke";
import type { Metadata } from "next";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a]">
			<main className="flex-1 overflow-y-auto h-full">{children}</main>
			<aside className="hidden lg:block w-[45%] xl:w-[50%] relative shrink-0 border-l border-white">
				<Image
					src="/images/girl.png"
					alt=""
					fill
					priority
					className="object-cover object-center"
				/>
				{/* <LogoSmoke /> */}
				<div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 via-transparent to-transparent" />
			</aside>
		</div>
	);
}
