
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20 lg:py-32 min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Dark%20futuristic%20workspace%20with%20purple%20and%20violet%20lighting%2C%20modern%20laptop%20setup%2C%20glowing%20screens%2C%20cyberpunk%20aesthetic%2C%20professional%20coding%20environment%2C%20dark%20background%20with%20purple%20neon%20accents%2C%20high-tech%20learning%20space%20for%20digital%20education&width=1200&height=700&seq=hero002&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-slideInLeft">
          <div className="inline-flex items-center glass-effect text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse-slow">
            <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
            10-Minute Daily Learning
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slideUp">
            Master Tech Skills in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 block animate-pulse-slow">Bite-Sized Lessons</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-slideUp" style={{animationDelay: '0.2s'}}>
            Learn UI/UX design, coding, and essential tech tools through focused 10-minute daily lessons. 
            Build real skills without overwhelming your schedule.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp" style={{animationDelay: '0.4s'}}>
            <Link href="/courses" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover-scale shadow-2xl">
              Start Learning Today
            </Link>
            <Link href="/demo" className="glass-effect text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600/20 transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover-scale">
              Watch Demo
            </Link>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-purple-300 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center">
              <i className="ri-user-line w-4 h-4 flex items-center justify-center mr-2"></i>
              50,000+ Students
            </div>
            <div className="flex items-center">
              <i className="ri-star-fill w-4 h-4 flex items-center justify-center mr-2 text-yellow-400"></i>
              4.9/5 Rating
            </div>
            <div className="flex items-center">
              <i className="ri-award-line w-4 h-4 flex items-center justify-center mr-2"></i>
              Industry Certified
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <i className="ri-arrow-down-line text-2xl text-purple-400"></i>
      </div>
    </section>
  );
}
