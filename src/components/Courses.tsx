import { BookOpen, Users, Clock, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and databases from scratch to deployment.',
      duration: '12 weeks',
      students: '2,500+',
      rating: 4.9,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Mobile App Development',
      description: 'Build native iOS and Android apps using React Native and modern mobile development practices.',
      duration: '10 weeks',
      students: '1,800+',
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Cloud Architecture & DevOps',
      description: 'Learn AWS, Docker, Kubernetes, and CI/CD practices to become a cloud expert.',
      duration: '8 weeks',
      students: '1,200+',
      rating: 4.9,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Data Science & AI',
      description: 'Dive into machine learning, deep learning, and data analysis with Python and modern frameworks.',
      duration: '14 weeks',
      students: '3,000+',
      rating: 5.0,
      level: 'Intermediate to Advanced',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Learning & Development</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Professional Training Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upskill your team or advance your career with our industry-leading training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-900">
                  {course.level}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-600" />
                    {course.students} enrolled
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {course.rating} rating
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5" />
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
