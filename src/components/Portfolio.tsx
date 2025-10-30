import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinTech Platform Redesign',
      client: 'Global Financial Services',
      category: 'Web Development',
      description: 'Complete redesign and development of a banking platform serving 2M+ users.',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AWS'],
    },
    {
      title: 'Healthcare Mobile App',
      client: 'MediCare Solutions',
      category: 'Mobile Development',
      description: 'Patient management and telemedicine app with HIPAA compliance.',
      image: 'https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Security'],
    },
    {
      title: 'E-commerce Platform',
      client: 'Retail Giant',
      category: 'Full Stack',
      description: 'Scalable e-commerce solution handling 100K+ daily transactions.',
      image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Stripe', 'Microservices'],
    },
    {
      title: 'AI Analytics Dashboard',
      client: 'Enterprise Corp',
      category: 'Data & AI',
      description: 'Real-time analytics dashboard with ML-powered insights.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'D3.js'],
    },
    {
      title: 'IoT Smart Home System',
      client: 'Home Automation Inc',
      category: 'IoT',
      description: 'Integrated smart home platform with voice control and automation.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['IoT', 'Cloud', 'Mobile'],
    },
    {
      title: 'SaaS Project Management',
      client: 'Startup Accelerator',
      category: 'SaaS',
      description: 'Cloud-based project management tool for distributed teams.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'GraphQL', 'PostgreSQL'],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-600 font-medium mb-3">{project.client}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
