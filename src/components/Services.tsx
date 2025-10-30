import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      color: 'from-cyan-500 to-blue-500',
      link: '/web-development',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions that engage users and drive business growth.',
      color: 'from-blue-500 to-indigo-500',
      link: '/mobile-development',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to power your digital transformation.',
      color: 'from-indigo-500 to-purple-500',
      link: '/cloud-solutions',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and business intelligence.',
      color: 'from-purple-500 to-pink-500',
      link: '/data-analytics',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      color: 'from-pink-500 to-rose-500',
      link: '/cybersecurity',
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description: 'Intelligent automation and AI-powered solutions to streamline operations and boost productivity.',
      color: 'from-rose-500 to-orange-500',
      link: '/ai-automation',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we offer end-to-end technology services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="mt-6">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-cyan-600 font-medium group-hover:text-cyan-700"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
