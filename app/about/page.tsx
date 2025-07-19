'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const features = [
  {
    icon: 'ri-code-line',
    title: 'Hands-on Learning',
    description: 'Build real projects while learning with our interactive coding environment'
  },
  {
    icon: 'ri-team-line',
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of practical experience'
  },
  {
    icon: 'ri-certificate-line',
    title: 'Industry Certificates',
    description: 'Earn recognized certifications that boost your career prospects'
  },
  {
    icon: 'ri-24-hours-line',
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with lifetime access to course materials'
  }
];

const achievements = [
  { number: '50,000+', label: 'Students Trained' },
  { number: '95%', label: 'Job Placement Rate' },
  { number: '100+', label: 'Industry Partners' },
  { number: '$85K', label: 'Average Salary Increase' }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Frontend Instructor',
    image: 'https://readdy.ai/api/search-image?query=Professional%20female%20instructor%20teaching%20frontend%20development%2C%20modern%20educational%20environment%20with%20purple%20lighting%2C%20confident%20and%20approachable%20demeanor%2C%20clean%20professional%20headshot%20style%20with%20tech%20background&width=300&height=300&seq=instructor001&orientation=squarish'
  },
  {
    name: 'Michael Chen',
    role: 'Senior Backend Engineer',
    image: 'https://readdy.ai/api/search-image?query=Professional%20male%20instructor%20teaching%20backend%20development%2C%20modern%20tech%20educational%20setting%20with%20blue%20and%20purple%20lighting%2C%20experienced%20software%20engineer%20appearance%2C%20clean%20professional%20headshot%20with%20coding%20background&width=300&height=300&seq=instructor002&orientation=squarish'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Science Lead',
    image: 'https://readdy.ai/api/search-image?query=Professional%20female%20data%20science%20instructor%2C%20modern%20analytics%20environment%20with%20data%20visualization%20screens%2C%20expert%20and%20knowledgeable%20appearance%2C%20clean%20professional%20headshot%20with%20tech%20data%20background&width=300&height=300&seq=instructor003&orientation=squarish'
  },
  {
    name: 'David Kim',
    role: 'Mobile Development Expert',
    image: 'https://readdy.ai/api/search-image?query=Professional%20male%20mobile%20development%20instructor%2C%20modern%20app%20development%20workspace%20with%20multiple%20devices%2C%20experienced%20mobile%20engineer%20appearance%2C%20clean%20professional%20headshot%20with%20mobile%20tech%20background&width=300&height=300&seq=instructor004&orientation=squarish'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20tech%20education%20platform%20hero%20background%20with%20purple%20and%20blue%20gradients%2C%20professional%20learning%20environment%20with%20holographic%20displays%20and%20coding%20elements%2C%20futuristic%20educational%20workspace%20with%20clean%20minimalist%20design&width=1920&height=800&seq=about001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-violet-900/30"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">TechLearn</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize tech education and empower the next generation of developers, data scientists, and tech innovators through hands-on, practical learning experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At TechLearn, we believe that quality tech education should be accessible to everyone. We've designed our platform to bridge the gap between theoretical knowledge and practical skills that employers actually need.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our comprehensive curriculum is constantly updated to reflect the latest industry trends and technologies, ensuring our students graduate with relevant, in-demand skills.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{achievement.number}</div>
                    <div className="text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-3xl p-8 border border-purple-500/20">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20tech%20learning%20environment%20with%20students%20coding%20on%20laptops%2C%20collaborative%20workspace%20with%20purple%20and%20blue%20lighting%2C%20diverse%20group%20of%20learners%20working%20on%20projects%2C%20professional%20educational%20setting%20with%20clean%20design&width=600&height=400&seq=mission001&orientation=landscape"
                  alt="Students learning together"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose TechLearn?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've reimagined tech education to be more practical, engaging, and career-focused
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry veterans who have worked at top tech companies and built successful products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-2xl mx-auto object-cover border-4 border-purple-500/20 group-hover:border-purple-400/40 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our graduates have gone on to work at leading tech companies and build successful startups
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Thompson',
                role: 'Software Engineer at Google',
                story: 'Started as a complete beginner and landed my dream job at Google after completing the Full Stack Developer path.',
                image: 'https://readdy.ai/api/search-image?query=Professional%20young%20software%20engineer%20success%20story%2C%20modern%20tech%20office%20environment%20with%20Google%20branding%2C%20confident%20and%20successful%20appearance%2C%20clean%20professional%20headshot%20with%20tech%20background&width=300&height=300&seq=success001&orientation=squarish'
              },
              {
                name: 'Maria Santos',
                role: 'Data Scientist at Netflix',
                story: 'The Data Science path transformed my career from marketing to machine learning. Now I build recommendation systems at Netflix.',
                image: 'https://readdy.ai/api/search-image?query=Professional%20female%20data%20scientist%20success%20story%2C%20modern%20Netflix%20office%20environment%20with%20data%20visualization%20screens%2C%20confident%20and%20accomplished%20appearance%2C%20clean%20professional%20headshot%20with%20analytics%20background&width=300&height=300&seq=success002&orientation=squarish'
              },
              {
                name: 'James Wilson',
                role: 'Mobile App Founder',
                story: 'After completing the Mobile Development track, I launched my own app which now has over 1 million downloads.',
                image: 'https://readdy.ai/api/search-image?query=Professional%20male%20mobile%20app%20entrepreneur%20success%20story%2C%20modern%20startup%20office%20environment%20with%20mobile%20devices%20and%20app%20interfaces%2C%20confident%20entrepreneur%20appearance%2C%20clean%20professional%20headshot%20with%20mobile%20tech%20background&width=300&height=300&seq=success003&orientation=squarish'
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{story.name}</h3>
                <p className="text-purple-400 text-center mb-4">{story.role}</p>
                <p className="text-gray-300 leading-relaxed text-center italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have accelerated their tech careers with TechLearn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 text-center">
                Start Learning Today
              </Link>
              <Link href="/courses" className="border border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 text-center">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}