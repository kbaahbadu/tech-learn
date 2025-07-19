
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-slideInLeft">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white">TechLearn</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Master tech skills through focused 10-minute daily lessons. Build your future, one micro lesson at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>
          <div className="animate-slideUp" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Courses</h3>
            <ul className="space-y-3">
              <li><Link href="/courses/uiux" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">UI/UX Design</Link></li>
              <li><Link href="/courses/javascript" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">JavaScript</Link></li>
              <li><Link href="/courses/react" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">React Development</Link></li>
              <li><Link href="/courses/mobile" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Mobile Design</Link></li>
              <li><Link href="/courses/git" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Git & Version Control</Link></li>
            </ul>
          </div>
          <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/tracks" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Learning Tracks</Link></li>
              <li><Link href="/certificates" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Certificates</Link></li>
              <li><Link href="/mobile-app" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Mobile App</Link></li>
              <li><Link href="/api" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">API Access</Link></li>
            </ul>
          </div>
          <div className="animate-slideUp" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Community</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between animate-fadeIn">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            2024 TechLearn. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
