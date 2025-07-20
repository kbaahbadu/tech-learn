'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation Variants
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

export default function DashboardPage() {
  const [user] = useState({
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
    <motion.div
      className="min-h-screen bg-gray-900"
      variants={fadeInUp(0)}
      initial="hidden"
      animate="visible"
      viewport={{ once: false }}
    >
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
              <Link href="/dashboard" className="text-purple-400 font-medium">Dashboard</Link>
              <Link href="/courses" className="text-gray-300 hover:text-purple-400 transition-colors">Courses</Link>
              <Link href="/progress" className="text-gray-300 hover:text-purple-400 transition-colors">Progress</Link>
              <Link href="/community" className="text-gray-300 hover:text-purple-400 transition-colors">Community</Link>
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
        <motion.div variants={fadeInUp(0.1)} initial="hidden" animate="visible" viewport={{ once: false }} className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-400">Ready for your daily learning session?</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Learning Streak', value: user.streak, unit: 'days in a row', icon: 'ri-fire-line', color: 'text-orange-400' },
            { title: 'Total Lessons', value: user.totalLessons, unit: 'completed', icon: 'ri-book-open-line', color: 'text-blue-400' },
            { title: 'Courses Done', value: user.completedCourses, unit: 'certificates earned', icon: 'ri-trophy-line', color: 'text-yellow-400' },
            { title: "Today's Goal", value: '1/1', unit: 'lesson completed', icon: 'ri-target-line', color: 'text-green-400' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="glass-effect rounded-2xl p-6"
              variants={fadeInUp(0.1 * i)}
              initial="hidden"
              animate="visible"
              viewport={{ once: false }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">{stat.title}</h3>
                <i className={`${stat.icon} ${stat.color} text-xl w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.unit}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div variants={fadeInUp(0.2)} initial="hidden" animate="visible" viewport={{ once: false }} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Continue Learning</h2>
              <div className="space-y-4">
                {currentCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300"
                    variants={fadeInUp(0.1 * index)}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: false }}
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
                              className="bg-gradient-to-r from-purple-500 to-violet-600 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-400 text-sm">{course.progress}%</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-purple-400 text-sm font-medium mb-2">{course.timeLeft}</div>
                        <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-violet-700 transition-all">
                          Continue
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp(0.4)} initial="hidden" animate="visible" viewport={{ once: false }}>
              <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/courses" className="glass-effect rounded-2xl p-6 hover:border-purple-400/40 transition-all cursor-pointer">
                  <i className="ri-search-line text-purple-400 text-2xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                  <h3 className="text-white font-semibold mb-2">Browse Courses</h3>
                  <p className="text-gray-400 text-sm">Discover new skills to learn</p>
                </Link>
                <Link href="/practice" className="glass-effect rounded-2xl p-6 hover:border-purple-400/40 transition-all cursor-pointer">
                  <i className="ri-code-s-slash-line text-purple-400 text-2xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                  <h3 className="text-white font-semibold mb-2">Practice Lab</h3>
                  <p className="text-gray-400 text-sm">Code in interactive environment</p>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={fadeInUp(0.2)} initial="hidden" animate="visible" viewport={{ once: false }}>
              <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`glass-effect rounded-xl p-4 flex items-center space-x-3 ${achievement.unlocked ? 'border-purple-400/40' : 'opacity-50'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${achievement.unlocked
                      ? 'bg-gradient-to-r from-purple-500 to-violet-600'
                      : 'bg-gray-700'}`}>
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
            </motion.div>

            <motion.div variants={fadeInUp(0.4)} initial="hidden" animate="visible" viewport={{ once: false }}>
              <h2 className="text-xl font-bold text-white mb-6">Daily Challenge</h2>
              <div className="glass-effect rounded-2xl p-6">
                <div className="text-center mb-4">
                  <i className="ri-lightbulb-line text-yellow-400 text-3xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                  <h3 className="text-white font-semibold">CSS Flexbox Quiz</h3>
                  <p className="text-gray-400 text-sm">Test your layout skills</p>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all">
                  Start Challenge
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
