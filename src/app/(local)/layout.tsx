'use client'

import Footer from "@/components/local/footer-4";
import { HeroHeader } from "@/components/local/header";
import { Dithering } from "@paper-design/shaders-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Define pages that should not have scrolling
    const noScrollPages = ["/home", "/features", "/pricing", "/"];
    const isNoScroll = noScrollPages.includes(pathname);

    return (
        <div className={cn(
            "relative flex flex-col",
            isNoScroll ? "h-screen overflow-hidden" : "min-h-screen"
        )}>
            {/* Background Shader */}
            <div className="fixed inset-0 -z-10 bg-background pointer-events-none">
                <Dithering
                    speed={0.38}
                    shape="warp"
                    type="2x2"
                    size={0.9}
                    scale={1}
                    colorBack="#00000000"
                    colorFront="#7B7B7B"
                    className="w-full h-full opacity-50"
                />
            </div>

            {/* Header */}
            <HeroHeader />

            {/* Page Content */}
            <main className={cn(
                "flex-1 flex flex-col pt-24",
                isNoScroll ? "overflow-hidden" : "overflow-y-auto"
            )}>
                <div className={cn(
                    "flex-1 flex flex-col",
                    isNoScroll && "overflow-hidden"
                )}>
                    <div className="flex-1">
                        {children}
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </main>
        </div>
    );
}