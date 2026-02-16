import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroHeader } from '@/components/local/header'

export default function Company() {
    return (
        <>
            <HeroHeader />
            <section className="bg-background @container py-24">

                <div className="mx-auto max-w-4xl px-6 space-y-24">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-balance geo-regular-italic text-5xl font-medium mb-4">Tek</h1>
                            <p className="text-muted-foreground text-lg rethink-sans">Building the future of robotics and intelligent systems through cutting-edge learning technologies.</p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-medium geo-regular-italic">Our Mission</h2>
                            <p className="text-muted-foreground rethink-sans">At Tek, we&apos;re dedicated to advancing robotics and artificial intelligence by developing innovative solutions in Retrieval-Augmented Generation (RAG) and autonomous learning systems. We believe in the power of technology to transform how machines learn and interact with the world.</p>
                        </div>
                    </div>

                    <div className="grid @xl:grid-cols-2 gap-6">
                        <Card variant="outline" className="p-8">
                            <h3 className="text-xl font-medium mb-4 rethink-sans">Robotics</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">We&apos;re building advanced robotic systems that leverage machine learning and autonomous decision-making. Our focus is on creating robots that can learn, adapt, and perform complex tasks in dynamic environments.</p>
                        </Card>

                        <Card variant="outline" className="p-8">
                            <h3 className="text-xl font-medium mb-4 rethink-sans">RAG Learning</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">Retrieval-Augmented Generation represents the next frontier in AI. We&apos;re developing systems that combine knowledge retrieval with generative models to create smarter, more contextual intelligent solutions.</p>
                        </Card>

                        <Card variant="outline" className="p-8">
                            <h3 className="text-xl font-medium mb-4 rethink-sans">Innovation Hub</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">Our dedicated team is constantly experimenting with emerging technologies and methodologies. We embrace learning as a core value and push the boundaries of what&apos;s possible.</p>
                        </Card>

                        <Card variant="outline" className="p-8">
                            <h3 className="text-xl font-medium mb-4 rethink-sans">Community Driven</h3>
                            <p className="text-muted-foreground text-sm rethink-sans">We believe in open collaboration and knowledge sharing. Our work contributes to the broader AI and robotics community, fostering innovation through transparency and partnership.</p>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-medium geo-regular-italic mb-4">Our Focus Areas</h2>
                            <div className="grid @md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <h3 className="font-medium rethink-sans">Autonomous Systems</h3>
                                    <p className="text-muted-foreground text-sm rethink-sans">Building intelligent agents that can operate independently and learn from their environment.</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-medium rethink-sans">Knowledge Integration</h3>
                                    <p className="text-muted-foreground text-sm rethink-sans">Combining external knowledge sources with machine learning models for enhanced intelligence.</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-medium rethink-sans">Continuous Learning</h3>
                                    <p className="text-muted-foreground text-sm rethink-sans">Developing systems that improve and adapt over time through ongoing learning mechanisms.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 bg-muted/30 p-8 rounded-lg">
                        <div>
                            <h2 className="text-2xl font-medium geo-regular-italic mb-4">Get Involved</h2>
                            <p className="text-muted-foreground rethink-sans mb-6">We&apos;re always looking for passionate individuals who share our vision of advancing robotics and AI. Whether you&apos;re interested in contributing, collaborating, or following our journey, we&apos;d love to connect.</p>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild>
                                    <Link href="#contact" className="gap-2">
                                        Get in Touch
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="#projects">View Projects</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-8 space-y-4">
                        <h2 className="text-2xl font-medium geo-regular-italic">Contact</h2>
                        <div className="space-y-2 rethink-sans">
                            <p className="text-muted-foreground">Email: hello@tek.dev</p>
                            <p className="text-muted-foreground">Website: tek.dev</p>
                            <p className="text-muted-foreground">Follow our progress and updates on our social channels</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}