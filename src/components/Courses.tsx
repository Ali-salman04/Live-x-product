import { BookOpen, Users, Clock, Star, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Courses = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const courses = [
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Master ethical hacking, penetration testing, network security, and threat analysis to protect organizations from cyber attacks.',
      duration: '10 weeks',
      students: '2,100+',
      rating: 4.9,
      level: 'Beginner to Intermediate',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Ethical Hacking', 'Network Security', 'Threat Detection'],
      whatsapp: '923181469544'
    },
    {
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, statistical modeling, and machine learning to transform raw data into actionable insights.',
      duration: '14 weeks',
      students: '3,200+',
      rating: 5.0,
      level: 'Intermediate to Advanced',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Machine Learning', 'Data Visualization', 'Big Data'],
      whatsapp: '923181469544'
    },
    {
      title: 'Python Programming Mastery',
      description: 'From basics to advanced concepts - master Python for web development, automation, data science, and AI applications.',
      duration: '8 weeks',
      students: '4,500+',
      rating: 4.8,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Core Python', 'Django/Flask', 'Automation'],
      whatsapp: '923181469544'
    },
    {
      title: '3D Game Development',
      description: 'Create immersive games using Unity and Unreal Engine. Learn game physics, AI, multiplayer systems, and monetization.',
      duration: '16 weeks',
      students: '1,800+',
      rating: 4.9,
      level: 'Intermediate to Advanced',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Unity/Unreal', 'Game Physics', 'AI Programming'],
      whatsapp: '923181469544'
    },
    {
      title: '3D Animation & VFX',
      description: 'Master 3D modeling, character animation, visual effects, and motion graphics using Blender, Maya, and After Effects.',
      duration: '12 weeks',
      students: '1,500+',
      rating: 4.8,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['3D Modeling', 'Character Rigging', 'VFX'],
      whatsapp: '923181469544'
    },
    {
      title: 'Full Stack Web Development',
      description: 'Build modern web applications with React, Node.js, databases, and deployment. From frontend to backend mastery.',
      duration: '12 weeks',
      students: '3,800+',
      rating: 4.9,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['React', 'Node.js', 'MongoDB'],
      whatsapp: '923181469544'
    },
    {
      title: 'Cloud Architecture & DevOps',
      description: 'Master AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code for scalable cloud solutions.',
      duration: '10 weeks',
      students: '2,400+',
      rating: 4.9,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['AWS/Azure', 'Kubernetes', 'CI/CD'],
      whatsapp: '923181469544'
    },
    {
      title: 'Mobile App Development',
      description: 'Create native iOS and Android applications using React Native, Flutter, and modern mobile development best practices.',
      duration: '10 weeks',
      students: '2,600+',
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['React Native', 'Flutter', 'App Store Deploy'],
      whatsapp: '923181469544'
    },
  ];

  const handleEnroll = (course) => {
    const message = `Hi, I'm interested in enrolling for the ${course.title} course. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${course.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-600 text-sm font-medium mb-4">
            🎓 Learning & Development
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Professional Training
            <span className="block mt-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Upskill your team or advance your career with our industry-leading training programs. Learn from experts and build real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group bg-white backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-white shadow-lg">
                  {course.level}
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                    <div className="flex gap-2 flex-wrap justify-center px-4">
                      {course.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-white/90 text-slate-900 text-xs font-medium rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{course.description}</p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-cyan-600" />
                    <span>{course.students} enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{course.rating} rating</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleEnroll(course)}
                  className="w-full group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium overflow-hidden hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <BookOpen className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Enroll Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
                      <div className="inline-block bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-3xl shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-cyan-600" />
              <h3 className="text-2xl font-bold text-gray-900">Get Certified</h3>
            </div>
            <p className="text-gray-600 mb-6">
              All courses include industry-recognized certifications upon completion. Boost your career with credentials that matter.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-2 border-cyan-500 rounded-lg font-medium hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              <TrendingUp className="w-5 h-5" />
              View All Courses
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Courses;