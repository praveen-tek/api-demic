'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AD</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">API-demic</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Home
            </Link>
            <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Features
            </Link>
            <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Blog
            </Link>
            <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Resources
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="#" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 transition">
              Home
            </Link>
            <Link href="#" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 transition">
              Features
            </Link>
            <Link href="#" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 transition">
              Blog
            </Link>
            <Link href="#" className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 transition">
              Resources
            </Link>
            <button className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}