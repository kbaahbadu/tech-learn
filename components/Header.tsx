
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center animate-slideInLeft">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white">TechLearn</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-fadeIn">
            <Link href="/courses" className="text-gray-300 hover:text-purple-400 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              Courses
            </Link>
            <Link href="/tracks" className="text-gray-300 hover:text-purple-400 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              Learning Tracks
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-purple-400 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4 animate-slideInRight">
            <Link href="/login" className="text-gray-300 hover:text-purple-400 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              Sign In
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 shadow-lg">
              Start Learning
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-purple-400 hover:text-purple-300 transition-colors"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20 animate-slideUp">
            <div className="space-y-3">
              <Link href="/courses" className="block text-gray-300 hover:text-purple-400 cursor-pointer transition-colors">
                Courses
              </Link>
              <Link href="/tracks" className="block text-gray-300 hover:text-purple-400 cursor-pointer transition-colors">
                Learning Tracks
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 cursor-pointer transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-purple-400 cursor-pointer transition-colors">
                About
              </Link>
              <div className="pt-3 border-t border-purple-500/20 space-y-3">
                <Link href="/login" className="block text-gray-300 hover:text-purple-400 cursor-pointer transition-colors">
                  Sign In
                </Link>
                <Link href="/register" className="block bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 text-center cursor-pointer">
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
