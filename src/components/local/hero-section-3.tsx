import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import {  ChevronRight, MessageCircle, Plus, Radar } from 'lucide-react'
import { Dithering } from '@paper-design/shaders-react'


export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="max-h-screen overflow-hidden">
                <section className="bg-background">
                    <div className="relative py-40">
                        <div className="absolute inset-0 m-auto h-full w-full">
                            <Dithering speed={0.38} shape="warp" type="2x2" size={1.9} scale={1} colorBack="#00000000" colorFront="#7B7B7B" className="w-full h-full" /></div>
                        <div className="relative z-10 mx-auto w-full max-w-5xl sm:pl-6">
                            <div className="flex items-center justify-between max-md:flex-col">
                                <div className="max-w-md max-sm:px-6">
                                    <h1 className="text-balance geo-regular-italic text-4xl font-medium sm:text-5xl">Ship faster. Integrate smarter.</h1>
                                    <p className="text-muted-foreground mt-4 text-balance geo-regular">Veil is your all-in-one engine for adding seamless integrations to your app.</p>

                                    <Button
                                        asChild
                                        className="mt-6 pr-1.5">
                                        <Link href="/dashboard">
                                            <span className="text-nowrap rethink-sans">Start Building</span>
                                            <ChevronRight className="opacity-50" />
                                        </Link>
                                    </Button>
                                </div>
                                <div
                                    aria-hidden
                                    className="mask-y-from-50% relative max-md:mx-auto max-md:*:scale-90 ">
                                    {[
                                        'How to test Supabase auth tokens and roles?',
                                        'How to validate Firebase real-time subscriptions?',
                                        'How to verify Slack notification delivery?',
                                        'How to test Twilio SMS verification?',
                                        'How to test Linear webhook sync?',
                                        'How to validate Figma design sync?',
                                        'How to test Vercel env variables?',
                                        'How to test Clerk sessions and permissions?',
                                        'How to test Claude AI API reliability?',
                                        'How to validate Stripe webhooks?',
                                        'How to test multi-provider OAuth?',
                                        'How to test API rate limiting?',

                                    ].map((prompt, index) => (
                                        <div
                                            key={index}
                                            className="text-muted-foreground flex items-center gap-2 px-14 py-2 text-sm">
                                            <MessageCircle className="size-3.5 opacity-50" />
                                            <span className="text-nowrap rethink-sans">{prompt}</span>
                                        </div>
                                    ))}
                                    <div className="bg-card min-w-sm ring-border shadow-foreground/6.5 dark:shadow-black/6.5 absolute inset-0 m-auto mt-auto flex h-fit justify-between gap-3 rounded-0 p-2 shadow-xl ring-1 sm:inset-2">
                                        <div className="flex items-center gap-2">
                                            <div className="hover:bg-muted flex size-9 cursor-pointer rounded-0 *:m-auto *:size-4">
                                                <Plus />
                                            </div>
                                            <div className="text-muted-foreground text-sm rethink-sans">Ask anything...</div>
                                        </div>
                                        <div className="flex items-center gap-0.5">

                                            <div className="bg-foreground text-background flex size-9 cursor-pointer rounded-0 *:m-auto *:size-4 hover:brightness-110">
                                                <Radar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}


