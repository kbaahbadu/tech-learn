'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const courses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Master the basics of JavaScript programming from variables to advanced concepts',
    duration: '12 weeks',
    level: 'Beginner',
    students: 15420,
    rating: 4.8,
    price: 79,
    image: 'https://readdy.ai/api/search-image?query=JavaScript%20programming%20course%20with%20clean%20modern%20interface%20showing%20code%20editor%20with%20JavaScript%20syntax%20highlighting%2C%20purple%20and%20blue%20gradient%20background%2C%20professional%20educational%20design%20with%20coding%20symbols%20and%20modern%20typography&width=400&height=250&seq=js001&orientation=landscape',
    tags: ['JavaScript', 'Programming', 'Web Development']
  },
  {
    id: 2,
    title: 'React Development Mastery',
    description: 'Build modern web applications with React, hooks, and component architecture',
    duration: '16 weeks',
    level: 'Intermediate',
    students: 12890,
    rating: 4.9,
    price: 129,
    image: 'https://readdy.ai/api/search-image?query=React%20development%20course%20interface%20with%20component%20structure%20visualization%2C%20modern%20blue%20and%20purple%20gradients%2C%20clean%20educational%20design%20showing%20React%20logo%20and%20code%20components%2C%20professional%20learning%20platform%20aesthetic&width=400&height=250&seq=react001&orientation=landscape',
    tags: ['React', 'Frontend', 'Components']
  },
  {
    id: 3,
    title: 'Node.js Backend Development',
    description: 'Create scalable server-side applications with Node.js and Express',
    duration: '14 weeks',
    level: 'Intermediate',
    students: 9650,
    rating: 4.7,
    price: 149,
    image: 'https://readdy.ai/api/search-image?query=Node.js%20backend%20development%20course%20with%20server%20architecture%20diagrams%2C%20green%20and%20purple%20gradient%20background%2C%20modern%20educational%20interface%20showing%20API%20endpoints%20and%20database%20connections%2C%20professional%20tech%20learning%20design&width=400&height=250&seq=node001&orientation=landscape',
    tags: ['Node.js', 'Backend', 'API Development']
  },
  {
    id: 4,
    title: 'Python for Data Science',
    description: 'Analyze data and build machine learning models with Python',
    duration: '18 weeks',
    level: 'Beginner',
    students: 18750,
    rating: 4.8,
    price: 99,
    image: 'https://readdy.ai/api/search-image?query=Python%20data%20science%20course%20interface%20with%20data%20visualization%20charts%20and%20graphs%2C%20blue%20and%20orange%20gradient%20background%2C%20modern%20educational%20design%20showing%20pandas%20dataframes%20and%20matplotlib%20charts%2C%20professional%20analytics%20learning%20platform&width=400&height=250&seq=python001&orientation=landscape',
    tags: ['Python', 'Data Science', 'Machine Learning']
  },
  {
    id: 5,
    title: 'Full Stack Web Development',
    description: 'Complete web development bootcamp covering frontend and backend',
    duration: '24 weeks',
    level: 'Advanced',
    students: 7890,
    rating: 4.9,
    price: 299,
    image: 'https://readdy.ai/api/search-image?query=Full%20stack%20web%20development%20course%20with%20multiple%20technology%20stack%20icons%2C%20purple%20and%20pink%20gradient%20background%2C%20modern%20educational%20interface%20showing%20frontend%20and%20backend%20architecture%2C%20professional%20comprehensive%20learning%20design&width=400&height=250&seq=fullstack001&orientation=landscape',
    tags: ['Full Stack', 'MERN', 'DevOps']
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps with React Native',
    duration: '20 weeks',
    level: 'Advanced',
    students: 5430,
    rating: 4.6,
    price: 199,
    image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20course%20interface%20with%20smartphone%20mockups%20and%20React%20Native%20code%2C%20teal%20and%20purple%20gradient%20background%2C%20modern%20educational%20design%20showing%20mobile%20UI%20components%20and%20app%20architecture%2C%20professional%20mobile%20learning%20platform&width=400&height=250&seq=mobile001&orientation=landscape',
    tags: ['React Native', 'Mobile', 'Cross-platform']
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Data Science', 'Full Stack'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.tags.some(tag => 
      tag.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of tech courses designed to take you from beginner to expert
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-purple-500/30 focus:border-purple-400 focus:outline-none cursor-pointer pr-8"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-purple-500/30 focus:border-purple-400 focus:outline-none min-w-[250px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm font-medium">{course.duration}</span>
                    <div className="flex items-center text-yellow-400">
                      <i className="ri-star-fill mr-1 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{course.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <i className="ri-user-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="text-2xl font-bold text-white">
                      ${course.price}
                    </div>
                  </div>

                  <Link href="/login" className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer text-center block">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
              <h3 className="text-2xl font-semibold text-white mb-2">No courses found</h3>
              <p className="text-gray-400">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}