
'use client';

const stats = [
  {
    number: "50,000+",
    label: "Active Students",
    icon: "ri-user-line"
  },
  {
    number: "150+",
    label: "Micro Courses",
    icon: "ri-book-open-line"
  },
  {
    number: "4.9/5",
    label: "Average Rating",
    icon: "ri-star-fill"
  },
  {
    number: "95%",
    label: "Completion Rate",
    icon: "ri-trophy-line"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-violet-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Thousands of Learners
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join a community of learners who are advancing their tech careers through micro learning
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slideUp hover-scale"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 animate-pulse-slow">{stat.number}</div>
              <div className="text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
