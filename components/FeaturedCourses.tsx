
'use client';

import Link from 'next/link';

const courses = [
  {
    title: "JavaScript Fundamentals",
    description: "Master modern JavaScript with daily 10-minute lessons covering ES6+, async/await, and DOM manipulation.",
    duration: "30 days",
    level: "Beginner",
    students: "12,450",
    rating: "4.9",
    image: "Modern JavaScript code editor with colorful syntax highlighting, dark theme IDE, purple and blue accents, clean coding workspace, professional developer setup with multiple monitors"
  },
  {
    title: "React Development",
    description: "Build dynamic web applications with React hooks, components, and state management in bite-sized lessons.",
    duration: "45 days", 
    level: "Intermediate",
    students: "8,920",
    rating: "4.8",
    image: "React development environment with component tree visualization, modern IDE interface, purple theme with React logo, professional coding setup for frontend development"
  },
  {
    title: "UI/UX Design Essentials",
    description: "Learn design principles, user research, prototyping, and modern design tools through practical exercises.",
    duration: "35 days",
    level: "Beginner",
    students: "15,680",
    rating: "4.9",
    image: "UI/UX design workspace with Figma interface, design system components, purple and pink color palette, modern designer workspace with tablet and stylus"
  },
  {
    title: "Mobile App Design",
    description: "Design beautiful mobile interfaces with focus on user experience and modern design patterns.",
    duration: "40 days",
    level: "Intermediate", 
    students: "6,340",
    rating: "4.7",
    image: "Mobile app design mockups on smartphone screens, modern UI components, purple gradient backgrounds, clean mobile interface designs with gesture interactions"
  },
  {
    title: "Git & Version Control",
    description: "Master Git workflows, branching strategies, and collaboration techniques used by professional teams.",
    duration: "20 days",
    level: "Beginner",
    students: "9,750",
    rating: "4.8",
    image: "Git workflow visualization with branching diagrams, terminal interface with purple theme, professional developer workspace showing version control concepts"
  },
  {
    title: "API Development",
    description: "Build REST APIs with Node.js, handle authentication, and implement best practices for backend development.",
    duration: "50 days",
    level: "Advanced",
    students: "4,280",
    rating: "4.9",
    image: "API development environment with JSON data structures, RESTful endpoints visualization, dark theme IDE with purple accents, backend development workspace"
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Micro Courses
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start your learning journey with our most popular bite-sized courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover-scale group animate-slideUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div 
                className="h-48 bg-gradient-to-br from-purple-600 to-violet-600 relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=${course.image}&width=400&height=200&seq=course${index}&orientation=landscape')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center mr-1 text-yellow-400"></i>
                    {course.rating}
                  </div>
                </div>
                <Link href="/login">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                    Start Course
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
