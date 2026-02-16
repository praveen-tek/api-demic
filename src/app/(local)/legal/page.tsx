import { LogoInv } from '@/components/logo'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Legal() {
    return (
        <section className="bg-background @container relative overflow-hidden py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="mb-12">
                    <span className="text-balance geo-regular-italic text-4xl font-medium mb-4"><Link href="/home"><LogoInv /> Legal</Link></span>
                    <p className="text-muted-foreground rethink-sans">Our terms, privacy policies, and legal agreements.</p>
                </div>

                <div className="grid gap-6">
                    <Card variant="outline" className="p-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-medium rethink-sans">Terms of Service</h2>
                            <p className="text-muted-foreground text-sm rethink-sans">Last updated: January 2025</p>
                            <div className="prose prose-sm max-w-none">
                                <p className="text-muted-foreground text-sm rethink-sans">By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                                <h3 className="font-medium rethink-sans mt-4 mb-2">Use License</h3>
                                <p className="text-muted-foreground text-sm rethink-sans">Permission is granted to temporarily download one copy of the materials on our service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm rethink-sans">
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose or for any public display</li>
                                    <li>Attempt to decompile or reverse engineer any software contained on the service</li>
                                    <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <Card variant="outline" className="p-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-medium rethink-sans">Privacy Policy</h2>
                            <p className="text-muted-foreground text-sm rethink-sans">Last updated: January 2025</p>
                            <div className="prose prose-sm max-w-none">
                                <p className="text-muted-foreground text-sm rethink-sans">We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
                                <h3 className="font-medium rethink-sans mt-4 mb-2">Information We Collect</h3>
                                <p className="text-muted-foreground text-sm rethink-sans">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm rethink-sans">
                                    <li>Personal Data: Name, email address, phone number, billing information</li>
                                    <li>Device Data: Device type, IP address, browser type, operating system</li>
                                    <li>Usage Data: Pages visited, time spent, clickstream data</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <Card variant="outline" className="p-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-medium rethink-sans">Cookie Policy</h2>
                            <p className="text-muted-foreground text-sm rethink-sans">Last updated: January 2025</p>
                            <div className="prose prose-sm max-w-none">
                                <p className="text-muted-foreground text-sm rethink-sans">We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>
                                <h3 className="font-medium rethink-sans mt-4 mb-2">Types of Cookies</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm rethink-sans">
                                    <li>Essential Cookies: Required for basic functionality</li>
                                    <li>Performance Cookies: Help us understand how users interact with our service</li>
                                    <li>Marketing Cookies: Used to track and measure advertising effectiveness</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <Card variant="outline" className="p-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-medium rethink-sans">Disclaimer</h2>
                            <p className="text-muted-foreground text-sm rethink-sans">Last updated: January 2025</p>
                            <div className="prose prose-sm max-w-none">
                                <p className="text-muted-foreground text-sm rethink-sans">The materials on our service are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                            </div>
                        </div>
                    </Card>

                    <Card variant="outline" className="p-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-medium rethink-sans">Contact Us</h2>
                            <p className="text-muted-foreground text-sm rethink-sans">If you have any questions about these legal documents, please contact us at:</p>
                            <div className="space-y-2 text-sm rethink-sans">
                                <p className="text-muted-foreground">Email: legal@example.com</p>
                                <p className="text-muted-foreground">Address: 123 Business St, City, State 12345</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}