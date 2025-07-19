
'use client';

const features = [
  {
    icon: "ri-time-line",
    title: "10-Minute Lessons",
    description: "Perfect bite-sized learning that fits into any schedule. Complete a lesson during your coffee break."
  },
  {
    icon: "ri-calendar-check-line",
    title: "Daily Learning Habit",
    description: "Build consistent learning habits with structured daily lessons and progress tracking."
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Hands-On Projects",
    description: "Apply what you learn immediately with practical exercises and real-world projects."
  },
  {
    icon: "ri-trophy-line",
    title: "Skill Certification",
    description: "Earn industry-recognized certificates upon completion of each course track."
  },
  {
    icon: "ri-community-line",
    title: "Learning Community",
    description: "Connect with fellow learners, share progress, and get support from our active community."
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile Learning",
    description: "Learn anywhere with our mobile-optimized platform and offline content access."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Choose Micro Learning?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven approach makes complex tech skills accessible through focused, daily practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 hover:bg-gray-900/70 transition-all duration-300 hover-scale animate-slideUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
