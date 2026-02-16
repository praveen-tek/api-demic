import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { FlutedGlass } from '@paper-design/shaders-react'

export default function ForgotPassword() {
    return (
        <section className="bg-background relative overflow-hidden grid min-h-screen grid-rows-[auto_1fr] px-4">
            <div className="absolute inset-0 h-full w-full">
                <FlutedGlass size={0.7} shape="lines" angle={0} distortionShape="cascade" distortion={0.75} shift={0} blur={0.25} edges={0.5} stretch={0} image="https://workers.paper.design/file-assets/01KAA2GZFSDFEH1RRF4G8FHFFC/01KHH6A160B8KF4H4KMV1P7DXB.webp" scale={1} fit="cover" highlights={0} shadows={0.4} marginLeft={0.1} marginRight={0.1} marginTop={0.1} marginBottom={0.1} colorBack="#00000000" colorHighlight="#FFFFFF" colorShadow="#000000" className="w-full h-full" />
            </div>

            <div className="mx-auto w-full max-w-7xl border-b py-3 relative z-10">
                <Link
                    href="/"
                    aria-label="go home"
                    className="inline-block border-t-2 border-transparent py-3">
                    <Logo className="w-fit" />
                </Link>
            </div>

            <div className="m-auto w-full max-w-sm relative z-10">
                <div className="text-center">
                    <h1 className="geo-regular-italic text-4xl font-medium">Forgot password?</h1>
                    <p className="text-muted-foreground mt-2 text-sm rethink-sans">Enter your email and we&apos;ll send you a reset link</p>
                </div>
                <Card
                    variant="outline"
                    className="mt-6 p-8">
                    <form
                        action=""
                        className="space-y-5">
                        <div className="space-y-3">
                            <Label
                                htmlFor="email"
                                className="text-sm rethink-sans">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <Button className="w-full">Send Reset Link</Button>
                    </form>
                </Card>

                <p className="text-muted-foreground mt-6 text-center text-sm rethink-sans">
                    Remember your password?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    )
}