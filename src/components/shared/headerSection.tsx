'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { AniLogoInv } from '../ui/animated-logo'

const menuItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Legal', href: '/legal' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const menuItemsRef = useRef<HTMLLIElement[]>([])

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const menu = mobileMenuRef.current
        if (!menu) return

        if (menuState) {
            gsap.set(menu, { display: 'block' })
            gsap.fromTo(
                menu,
                { opacity: 0, y: -16, scale: 0.97 },
                { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
            )
            gsap.fromTo(
                menuItemsRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.07, delay: 0.1 }
            )
        } else {
            gsap.to(menu, {
                opacity: 0,
                y: -10,
                scale: 0.97,
                duration: 0.25,
                ease: 'power2.in', onComplete: () => { gsap.set(menu, { display: 'none' }) },
            })
        }
    }, [menuState])

    return (
        <header>
            <nav
                className={cn(
                    'fixed z-20 w-full transition-all duration-300 backdrop-blur-md bg-black',
                    isScrolled && 'bg-background/75 border-b border-black backdrop-blur-lg'
                )}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-6 lg:gap-0">
                        <div className="flex w-full justify-between gap-6 lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <AniLogoInv className="w-fit" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn('m-auto size-6 duration-200 transition-all', menuState && 'rotate-180 scale-0 opacity-0')} />
                                <X className={cn('absolute inset-0 m-auto size-6 duration-200 transition-all -rotate-180 scale-0 opacity-0', menuState && 'rotate-0 scale-100 opacity-100')} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-1">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href={item.href} className="text-base">
                                                <span>{item.name}</span>
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden lg:flex items-center">
                            <Link
                                href="/auth"
                                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
                                <span>Get Started</span>
                            </Link>
                        </div>

                        <div
                            ref={mobileMenuRef}
                            style={{ display: 'none' }}
                            className="bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:hidden">
                            <div>
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li
                                            key={index}
                                            ref={el => { if (el) menuItemsRef.current[index] = el }}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden lg:flex items-center">
                                <Link
                                    href="/auth"
                                    className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition-colors">
                                    <span className="text-black">Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}