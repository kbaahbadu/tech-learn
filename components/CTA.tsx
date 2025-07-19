
'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10"></div>
      <div className="relative max-w-4xl mx-auto text-center px-6 lg:px-8">
        <div className="animate-slideUp">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 block">Tech Career?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-slideUp" style={{animationDelay: '0.2s'}}>
            Join 50,000+ learners who are advancing their careers through micro learning. 
            Start your journey today with a free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp" style={{animationDelay: '0.4s'}}>
            <Link href="/register" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer hover-scale shadow-2xl">
              Start Free Trial
            </Link>
            <Link href="/courses" className="glass-effect text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600/20 transition-all duration-300 whitespace-nowrap cursor-pointer hover-scale">
              Browse Courses
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <p>✓ 7-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
