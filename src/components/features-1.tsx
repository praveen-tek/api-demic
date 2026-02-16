import { Card } from '@/components/ui/card'
import { Shield } from 'lucide-react'
import { Vercel } from '@/components/ui/svgs/vercel'
import { Supabase } from '@/components/ui/svgs/supabase'
import { Linear } from '@/components/ui/svgs/linear'
import { Slack } from '@/components/ui/svgs/slack'
import { Firebase } from '@/components/ui/svgs/firebase'
import { ClerkIconDark as Clerk } from '@/components/ui/svgs/clerk'
import { Dithering } from '@paper-design/shaders-react'

export default function Features() {
    return (
        <section className="bg-background @container relative overflow-hidden py-24">
            <div className="absolute inset-0  h-full w-full">
                <Dithering speed={0.38} shape="warp" type="2x2" size={1.9} scale={1} colorBack="#00000000" colorFront="#7B7B7B" className="w-full h-full" />
            </div>

            <div className="mx-auto max-w-2xl px-6 relative z-10">
                <div>
                    <h2 className="text-balance geo-regular-italic text-4xl font-medium">Powerful Features for Modern Teams</h2>
                    <p className="text-muted-foreground mt-4 text-balance rethink-sans">Everything you need to build, connect, and scale your integrations effortlessly.</p>
                </div>
                <div className="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
                    <Card
                        variant="outline"
                        className="row-span-2 grid grid-rows-subgrid">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium rethink-sans">Seamless Integrations</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">Connect your favorite tools and services with just a few clicks.</p>
                        </div>
                        <div
                            aria-hidden
                            className="**:fill-foreground flex h-44 flex-col justify-between pt-8">
                            <div className="relative flex h-10 items-center gap-12 px-6">
                                <div className="bg-border absolute inset-0 my-auto h-px"></div>

                                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                                    <Vercel className="size-3.5" />
                                </div>
                                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                                    <Slack className="size-3.5" />
                                </div>
                            </div>
                            <div className="pl-17 relative flex h-10 items-center justify-between gap-12 pr-6">
                                <div className="bg-border absolute inset-0 my-auto h-px"></div>

                                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                                    <Clerk className="size-3.5" />
                                </div>
                                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                                    <Linear className="size-3.5" />
                                </div>
                            </div>
                            <div className="relative flex h-10 items-center gap-20 px-8">
                                <div className="bg-border absolute inset-0 my-auto h-px"></div>

                                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                                    <Supabase className="size-3.5" />
                                </div>
                                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                                    <Firebase className="size-3.5" />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        variant="outline"
                        className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium rethink-sans">Real-time Sync</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">Keep your data synchronized across all platforms automatically.</p>
                        </div>
                        <div
                            aria-hidden
                            className="relative h-44 translate-y-6">
                            <div className="bg-foreground/15 absolute inset-0 mx-auto w-px"></div>
                            <div className="absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
                            <div className="border-primary mask-l-from-50% mask-l-to-90% mask-r-from-50% mask-r-to-50% absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
                            <div className="absolute -inset-x-8 top-24 aspect-square rounded-full border"></div>
                            <div className="mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50% absolute -inset-x-8 top-24 aspect-square rounded-full border border-lime-500"></div>
                        </div>
                    </Card>
                    <Card
                        variant="outline"
                        className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium rethink-sans">Developer First</h3>
                            <p className="text-muted-foreground mt-2 text-sm rethink-sans">Built with developers in mind, featuring comprehensive APIs and SDKs.</p>
                        </div>
                        <div
                            aria-hidden
                            className="*:bg-foreground/15 flex h-44 justify-between pb-6 pt-12 *:h-full *:w-px">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                        </div>
                    </Card>
                    <Card
                        variant="outline"
                        className="row-span-2 grid grid-rows-subgrid">
                        <div className="space-y-2">
                            <h3 className="font-medium rethink-sans">Enterprise Ready</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">Scale confidently with enterprise-grade security and reliability.</p>
                        </div>

                        <div className="pointer-events-none relative -ml-7 flex size-44 items-center justify-center pt-5">
                            <Shield className="absolute inset-0 top-2.5 size-full stroke-[0.1px] opacity-15" />
                            <Shield className="size-32 stroke-[0.1px]" />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}