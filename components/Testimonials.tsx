
'use client';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Google",
    avatar: "Professional Asian woman developer in modern tech office, purple lighting, confident smile, coding workspace background",
    content: "The 10-minute format is perfect for my busy schedule. I've learned React and landed my dream job at Google within 6 months!",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "UX Designer at Airbnb", 
    avatar: "Professional Black male UX designer in creative workspace, purple and blue lighting, design tools visible, modern office environment",
    content: "These micro lessons helped me transition from graphic design to UX. The practical projects gave me a solid portfolio.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Full Stack Developer",
    avatar: "Professional Latina woman developer at computer setup, purple ambient lighting, multiple monitors, modern coding environment",
    content: "I love how each lesson builds on the previous one. The community support and daily habit tracking kept me motivated.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how micro learning has transformed careers and lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover-scale animate-slideUp"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 mr-4"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Btestimonial.avatar%7D&width=100&height=100&seq=avatar${index}&orientation=squarish')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
