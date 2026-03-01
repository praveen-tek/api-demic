import { Card } from '@/components/ui/card'

export default function Features() {
    return (
        <div className=" @container relative overflow-hidden py-12 pt-16 flex flex-1">
            <div className="mx-auto max-w-2xl px-6 relative z-10">
                <div>
                    <h2 className="text-balance geo-regular-italic text-4xl font-medium">Powerful Features for Modern Teams</h2>
                    <p className="text-muted-foreground mt-4 text-balance rethink-sans">Everything you need to build, connect, and scale your integrations effortlessly.</p>
                </div>
                <div className="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
                    <Card variant="outline" className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium rethink-sans">Real-time Sync</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">Keep your data synchronized across all platforms automatically.</p>
                        </div>
                        <div aria-hidden className="relative h-44 translate-y-6">
                            <div className="bg-foreground/15 absolute inset-0 mx-auto w-px"></div>
                            <div className="absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
                            <div className="border-primary mask-l-from-50% mask-l-to-90% mask-r-from-50% mask-r-to-50% absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
                            <div className="absolute -inset-x-8 top-24 aspect-square rounded-full border"></div>
                            <div className="mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50% absolute -inset-x-8 top-24 aspect-square rounded-full border border-lime-500"></div>
                        </div>
                    </Card>
                    <Card variant="outline" className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium rethink-sans">Developer First</h3>
                            <p className="text-muted-foreground mt-2 text-sm rethink-sans">Built with developers in mind, featuring comprehensive APIs and SDKs.</p>
                        </div>
                        <div aria-hidden className="*:bg-foreground/15 flex h-44 justify-between pb-6 pt-12 *:h-full *:w-px">
                            <div></div><div></div><div></div><div></div>
                            <div className="bg-primary!"></div>
                            <div></div><div></div><div></div><div></div>
                            <div className="bg-primary!"></div>
                            <div></div><div></div><div></div>
                            <div className="bg-primary!"></div>
                            <div></div><div></div><div></div><div></div>
                            <div className="bg-primary!"></div>
                            <div></div><div></div><div></div><div></div>
                            <div className="bg-primary!"></div>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div>
                            <div className="bg-primary!"></div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}