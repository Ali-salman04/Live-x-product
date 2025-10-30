import { Package, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'TechVision CRM',
      tagline: 'Customer Relationship Management Reimagined',
      description: 'A powerful CRM platform that helps you manage customer relationships, track sales pipelines, and grow your business with intelligent insights.',
      features: ['Contact Management', 'Sales Pipeline', 'Analytics Dashboard', 'Email Integration'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'CloudSync Pro',
      tagline: 'Seamless Cloud Collaboration',
      description: 'Enterprise-grade file sharing and collaboration platform with advanced security, real-time sync, and team productivity features.',
      features: ['File Sharing', 'Real-time Collaboration', 'Version Control', 'Enterprise Security'],
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'DataInsight Analytics',
      tagline: 'Transform Data into Decisions',
      description: 'Advanced analytics platform that turns your raw data into actionable insights with AI-powered predictions and beautiful visualizations.',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Reports', 'API Integration'],
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Powerful Software Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-ready products designed to streamline operations and accelerate growth.
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${product.color} text-white rounded-full text-sm font-medium mb-6`}>
                    <Package className="w-4 h-4" />
                    Product
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-xl text-cyan-600 font-semibold mb-4">{product.tagline}</p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300`}
                    >
                      Request Demo
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                      href="#contact"
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`relative h-80 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <Package className="w-32 h-32 text-white/20" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl font-bold mb-2">{product.name.split(' ')[0]}</div>
                        <div className="text-xl">Product Demo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
