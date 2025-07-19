'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const learningTracks = [
  {
    id: 1,
    title: 'Frontend Developer Path',
    description: 'Master modern frontend development with HTML, CSS, JavaScript, and React',
    duration: '6 months',
    courses: 8,
    level: 'Beginner to Advanced',
    students: 25430,
    price: 299,
    image: 'https://readdy.ai/api/search-image?query=Frontend%20development%20learning%20path%20with%20modern%20web%20interface%20designs%2C%20colorful%20gradient%20backgrounds%2C%20HTML%20CSS%20JavaScript%20React%20logos%2C%20clean%20educational%20platform%20aesthetic%20with%20coding%20elements%20and%20browser%20mockups&width=500&height=300&seq=frontend001&orientation=landscape',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Responsive Design', 'Git', 'Webpack'],
    outcomes: ['Build responsive websites', 'Create React applications', 'Master modern JavaScript', 'Deploy web projects']
  },
  {
    id: 2,
    title: 'Backend Developer Path',
    description: 'Build scalable server-side applications and APIs with Node.js and databases',
    duration: '7 months',
    courses: 10,
    level: 'Intermediate to Advanced',
    students: 18750,
    price: 399,
    image: 'https://readdy.ai/api/search-image?query=Backend%20development%20learning%20path%20with%20server%20architecture%20diagrams%2C%20database%20connections%2C%20API%20endpoints%20visualization%2C%20dark%20professional%20interface%20with%20green%20and%20blue%20gradients%2C%20Node.js%20and%20database%20icons&width=500&height=300&seq=backend001&orientation=landscape',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Authentication', 'Docker'],
    outcomes: ['Build REST APIs', 'Design databases', 'Implement authentication', 'Deploy server applications']
  },
  {
    id: 3,
    title: 'Full Stack Developer Path',
    description: 'Complete web development mastery covering both frontend and backend technologies',
    duration: '12 months',
    courses: 18,
    level: 'Beginner to Expert',
    students: 32100,
    price: 599,
    image: 'https://readdy.ai/api/search-image?query=Full%20stack%20development%20learning%20path%20with%20comprehensive%20technology%20stack%20visualization%2C%20frontend%20and%20backend%20architecture%2C%20purple%20and%20pink%20gradients%2C%20modern%20educational%20interface%20showing%20complete%20web%20development%20workflow&width=500&height=300&seq=fullstack002&orientation=landscape',
    skills: ['JavaScript', 'React', 'Node.js', 'Databases', 'DevOps', 'Testing', 'Cloud Deployment', 'System Design'],
    outcomes: ['Build complete web applications', 'Deploy to cloud platforms', 'Implement CI/CD pipelines', 'Lead development projects']
  },
  {
    id: 4,
    title: 'Data Science Path',
    description: 'Analyze data and build machine learning models with Python and modern tools',
    duration: '8 months',
    courses: 12,
    level: 'Beginner to Advanced',
    students: 15680,
    price: 449,
    image: 'https://readdy.ai/api/search-image?query=Data%20science%20learning%20path%20with%20data%20visualization%20charts%2C%20machine%20learning%20algorithms%2C%20Python%20pandas%20dataframes%2C%20blue%20and%20orange%20gradient%20background%2C%20professional%20analytics%20interface%20with%20graphs%20and%20statistical%20models&width=500&height=300&seq=datascience001&orientation=landscape',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'SQL', 'Statistics'],
    outcomes: ['Analyze complex datasets', 'Build ML models', 'Create data visualizations', 'Make data-driven decisions']
  },
  {
    id: 5,
    title: 'Mobile App Developer Path',
    description: 'Create cross-platform mobile applications with React Native and Flutter',
    duration: '9 months',
    courses: 14,
    level: 'Intermediate to Advanced',
    students: 12340,
    price: 499,
    image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20learning%20path%20with%20smartphone%20mockups%2C%20React%20Native%20and%20Flutter%20interfaces%2C%20app%20store%20screenshots%2C%20teal%20and%20purple%20gradient%20background%2C%20modern%20mobile%20development%20educational%20design&width=500&height=300&seq=mobile002&orientation=landscape',
    skills: ['React Native', 'Flutter', 'Mobile UI/UX', 'Native APIs', 'App Store Deployment', 'Push Notifications', 'Performance Optimization'],
    outcomes: ['Build iOS and Android apps', 'Publish to app stores', 'Implement native features', 'Optimize app performance']
  },
  {
    id: 6,
    title: 'DevOps Engineer Path',
    description: 'Master deployment, automation, and infrastructure management for modern applications',
    duration: '10 months',
    courses: 16,
    level: 'Advanced',
    students: 8920,
    price: 549,
    image: 'https://readdy.ai/api/search-image?query=DevOps%20engineering%20learning%20path%20with%20CI%2FCD%20pipeline%20visualization%2C%20Docker%20containers%2C%20Kubernetes%20clusters%2C%20cloud%20infrastructure%20diagrams%2C%20dark%20professional%20interface%20with%20blue%20and%20green%20gradients&width=500&height=300&seq=devops001&orientation=landscape',
    skills: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Infrastructure as Code', 'Monitoring', 'Security', 'Automation'],
    outcomes: ['Deploy scalable applications', 'Manage cloud infrastructure', 'Implement CI/CD pipelines', 'Monitor system performance']
  }
];

export default function LearningTracksPage() {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learning <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Tracks</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Follow structured learning paths designed by industry experts to master specific technology stacks and advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {learningTracks.map((track, index) => (
              <div 
                key={track.id} 
                className="bg-gray-800/50 rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] cursor-pointer group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-purple-500/30 text-purple-300 text-sm rounded-full mb-2">
                      {track.level}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{track.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">{track.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-400">
                      <i className="ri-time-line mr-2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-sm">{track.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <i className="ri-book-line mr-2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-sm">{track.courses} courses</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <i className="ri-user-line mr-2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-sm">{track.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-white">${track.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
                    className="w-full mb-4 py-3 bg-gray-700/50 text-purple-400 rounded-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    <span>View Details</span>
                    <i className={`ri-arrow-${selectedTrack === track.id ? 'up' : 'down'}-line ml-2 w-4 h-4 flex items-center justify-center transition-transform duration-300`}></i>
                  </button>

                  {selectedTrack === track.id && (
                    <div className="border-t border-purple-500/20 pt-6 animate-slideUp">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Skills You'll Learn</h4>
                        <div className="flex flex-wrap gap-2">
                          {track.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Learning Outcomes</h4>
                        <ul className="space-y-2">
                          {track.outcomes.map(outcome => (
                            <li key={outcome} className="flex items-center text-gray-300">
                              <i className="ri-check-line text-green-400 mr-2 w-4 h-4 flex items-center justify-center"></i>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <Link href="/login" className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer text-center block">
                    Start Learning Path
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-3xl p-12 text-center border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">Not Sure Which Path to Choose?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take our career assessment quiz to find the perfect learning track based on your goals and experience
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              Take Career Quiz
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}