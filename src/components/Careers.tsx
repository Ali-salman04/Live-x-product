import { Briefcase, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time',
      description: 'Create beautiful, user-centered designs for web and mobile applications that delight our clients.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure system reliability.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco',
      type: 'Full-time',
      description: 'Lead product strategy and roadmap for our enterprise software solutions.',
    },
  ];

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Careers</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {openings.map((job, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Don't see the right role?</h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always open to meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
