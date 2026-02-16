import Link from 'next/link'
import { LogoInv } from '@/components/local/logo'

const links = [
    { label: 'Legal', href: '/legal' },
    { label: 'About', href: 'https://www.typo.so/@praveen' },
    { label: 'Github', href: 'https://github.com/praveen-tek' },
    { label: 'x', href: '#' },
    { label: 'Linkedin', href: '#' },
    { label: 'Contact', href: 'https://cal.com/praveenj2x/30min' },
]


export default function Footer() {
    return (
        <footer className=" @container border-t py-8 bg-black">
            <div className="mx-auto max-w-3xl px-6">
                <div className="grid gap-8">
                    <div className="col-span-full border-b pb-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2">
                            <LogoInv className="h-5 w-fit" />
                        </Link>
                        <p className="text-muted-foreground mt-4 max-w-xs text-sm geo-regular-italic">Test your APIs with confidence before they reach production</p>

                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-2">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                </div>
            </div>
        </footer>
    )
}
