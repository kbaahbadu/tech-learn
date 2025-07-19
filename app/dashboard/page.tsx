
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: 'Kurfass Baah Badu',
    email: 'sarah@example.com',
    streak: 12,
    totalLessons: 45,
    completedCourses: 3
  });

  const [currentCourses] = useState([
    {
      title: 'React Development',
      progress: 75,
      nextLesson: 'React Hooks Advanced',
      timeLeft: '5 min',
      image: 'React development workspace with component architecture, modern IDE with React DevTools, purple theme coding environment'
    },
    {
      title: 'UI/UX Design',
      progress: 45,
      nextLesson: 'Design Systems',
      timeLeft: '8 min',
      image: 'UI/UX design workspace with Figma interface, design components and purple color palette, modern designer setup'
    },
    {
      title: 'JavaScript Advanced',
      progress: 90,
      nextLesson: 'Async Programming',
      timeLeft: '7 min',
      image: 'Advanced JavaScript code editor with ES6+ syntax highlighting, dark theme with purple accents, professional coding setup'
    }
  ]);

  const [achievements] = useState([
    { title: '7-Day Streak', icon: 'ri-fire-line', unlocked: true },
    { title: 'First Course Complete', icon: 'ri-trophy-line', unlocked: true },
    { title: 'Speed Learner', icon: 'ri-flashlight-line', unlocked: true },
    { title: '30-Day Streak', icon: 'ri-medal-line', unlocked: false }
  ]);

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white">TechLearn</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard" className="text-purple-400 font-medium cursor-pointer">Dashboard</Link>
              <Link href="/courses" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Courses</Link>
              <Link href="/progress" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Progress</Link>
              <Link href="/community" className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Community</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm font-bold">SC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 animate-slideUp">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-400">Ready for your daily learning session?</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6 animate-slideInLeft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Learning Streak</h3>
              <i className="ri-fire-line text-orange-400 text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-1">{user.streak}</div>
            <div className="text-gray-400 text-sm">days in a row</div>
          </div>

          <div className="glass-effect rounded-2xl p-6 animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Total Lessons</h3>
              <i className="ri-book-open-line text-blue-400 text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-1">{user.totalLessons}</div>
            <div className="text-gray-400 text-sm">completed</div>
          </div>

          <div className="glass-effect rounded-2xl p-6 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Courses Done</h3>
              <i className="ri-trophy-line text-yellow-400 text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-1">{user.completedCourses}</div>
            <div className="text-gray-400 text-sm">certificates earned</div>
          </div>

          <div className="glass-effect rounded-2xl p-6 animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Today's Goal</h3>
              <i className="ri-target-line text-green-400 text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-1">1/1</div>
            <div className="text-gray-400 text-sm">lesson completed</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8 animate-slideUp">
              <h2 className="text-2xl font-bold text-white mb-6">Continue Learning</h2>
              <div className="space-y-4">
                {currentCourses.map((course, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover-scale animate-slideInLeft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex-shrink-0"
                        style={{
                          backgroundImage: `url('https://readdy.ai/api/search-image?query=${course.image}&width=100&height=100&seq=dash${index}&orientation=squarish')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold mb-1">{course.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">Next: {course.nextLesson}</p>

                        <div className="flex items-center space-x-4">
                          <div className="flex-1 bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-violet-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-400 text-sm">{course.progress}%</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-purple-400 text-sm font-medium mb-2">{course.timeLeft}</div>
                        <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/courses" className="glass-effect rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover-scale cursor-pointer">
                  <i className="ri-search-line text-purple-400 text-2xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                  <h3 className="text-white font-semibold mb-2">Browse Courses</h3>
                  <p className="text-gray-400 text-sm">Discover new skills to learn</p>
                </Link>

                <Link href="/practice" className="glass-effect rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover-scale cursor-pointer">
                  <i className="ri-code-s-slash-line text-purple-400 text-2xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                  <h3 className="text-white font-semibold mb-2">Practice Lab</h3>
                  <p className="text-gray-400 text-sm">Code in interactive environment</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-slideInRight">
              <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`glass-effect rounded-xl p-4 flex items-center space-x-3 ${achievement.unlocked ? 'border-purple-400/40' : 'opacity-50'
                      } transition-all duration-300`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${achievement.unlocked
                        ? 'bg-gradient-to-r from-purple-500 to-violet-600'
                        : 'bg-gray-700'
                      }`}>
                      <i className={`${achievement.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{achievement.title}</h4>
                      <p className="text-gray-400 text-xs">
                        {achievement.unlocked ? 'Unlocked!' : 'Keep learning to unlock'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold text-white mb-6">Daily Challenge</h2>
              <div className="glass-effect rounded-2xl p-6">
                <div className="text-center mb-4">
                  <i className="ri-lightbulb-line text-yellow-400 text-3xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                  <h3 className="text-white font-semibold">CSS Flexbox Quiz</h3>
                  <p className="text-gray-400 text-sm">Test your layout skills</p>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Start Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
