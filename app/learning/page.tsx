'use client';

import { useState } from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    currentLesson: 'Advanced Functions and Closures',
    estimatedTime: '2h 30m remaining',
    image: 'https://readdy.ai/api/search-image?query=JavaScript%20programming%20course%20interface%20with%20code%20editor%20showing%20JavaScript%20syntax%2C%20modern%20educational%20platform%20design%20with%20purple%20and%20blue%20gradients%2C%20clean%20learning%20environment%20with%20coding%20examples&width=300&height=200&seq=learn001&orientation=landscape'
  },
  {
    id: 2,
    title: 'React Development',
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    currentLesson: 'Component State Management',
    estimatedTime: '4h 15m remaining',
    image: 'https://readdy.ai/api/search-image?query=React%20development%20course%20interface%20with%20component%20structure%20visualization%2C%20modern%20blue%20and%20purple%20educational%20design%2C%20clean%20learning%20platform%20with%20React%20logo%20and%20JSX%20code&width=300&height=200&seq=learn002&orientation=landscape'
  },
  {
    id: 3,
    title: 'Node.js Backend',
    progress: 30,
    totalLessons: 28,
    completedLessons: 8,
    currentLesson: 'Express.js Routing',
    estimatedTime: '6h 45m remaining',
    image: 'https://readdy.ai/api/search-image?query=Node.js%20backend%20development%20course%20with%20server%20architecture%20diagrams%2C%20green%20and%20purple%20gradient%20educational%20interface%2C%20modern%20learning%20platform%20showing%20API%20endpoints%20and%20database%20connections&width=300&height=200&seq=learn003&orientation=landscape'
  }
];

const recentActivity = [
  { type: 'completed', content: 'Completed "Arrow Functions" lesson', time: '2 hours ago' },
  { type: 'achievement', content: 'Earned "JavaScript Basics" badge', time: '1 day ago' },
  { type: 'started', content: 'Started "React Development" course', time: '3 days ago' },
  { type: 'completed', content: 'Finished "HTML & CSS Fundamentals"', time: '1 week ago' }
];

const upcomingDeadlines = [
  { task: 'JavaScript Project Submission', dueDate: 'Tomorrow', priority: 'high' },
  { task: 'React Quiz Assessment', dueDate: 'In 3 days', priority: 'medium' },
  { task: 'Portfolio Review Session', dueDate: 'Next week', priority: 'low' }
];

export default function LearningPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800/50 border-b border-purple-500/20 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
                </div>
                <span className="text-xl font-bold text-white">TechLearn</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'overview' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'courses' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                My Courses
              </button>
              <button 
                onClick={() => setActiveTab('progress')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'progress' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Progress
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-notification-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <Link href="/dashboard" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center text-white cursor-pointer">
                <i className="ri-user-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-3xl p-8 border border-purple-500/20">
              <h1 className="text-3xl font-bold text-white mb-4">Welcome back to your learning journey!</h1>
              <p className="text-gray-300 text-lg mb-6">You're making great progress. Keep up the momentum!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
                  <div className="text-gray-400">Overall Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">12</div>
                  <div className="text-gray-400">Days Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">40</div>
                  <div className="text-gray-400">Lessons Completed</div>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Continue Learning</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map(course => (
                  <div key={course.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                      <p className="text-purple-400 text-sm mb-4">{course.currentLesson}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{course.estimatedTime}</span>
                        <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'completed' ? 'bg-green-400' :
                        activity.type === 'achievement' ? 'bg-yellow-400' :
                        'bg-blue-400'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-gray-300">{activity.content}</p>
                        <p className="text-gray-500 text-sm">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div>
                        <p className="text-gray-300">{deadline.task}</p>
                        <p className="text-gray-500 text-sm">{deadline.dueDate}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        deadline.priority === 'high' ? 'bg-red-400' :
                        deadline.priority === 'medium' ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">My Courses</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{course.title}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Lessons: {course.completedLessons}/{course.totalLessons}</span>
                        <span>{course.estimatedTime}</span>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Learning Progress</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
                <div className="text-gray-300">Overall Completion</div>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">40</div>
                <div className="text-gray-300">Lessons Completed</div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                <div className="text-gray-300">Day Streak</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
                <div className="text-gray-300">Certificates Earned</div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Course Progress Details</h3>
              <div className="space-y-6">
                {courses.map(course => (
                  <div key={course.id} className="border-b border-gray-700/50 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{course.title}</h4>
                        <p className="text-purple-400">{course.currentLesson}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{course.progress}%</div>
                        <div className="text-gray-400 text-sm">{course.completedLessons}/{course.totalLessons} lessons</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-violet-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}