import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Smartphone, Zap, Globe, TrendingUp } from 'lucide-react';

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Mobile App Development</h1>
              <p className="text-xl text-blue-100">Native & Cross-Platform Mobile Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Ideas into Engaging Mobile Experiences</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We develop native and cross-platform mobile applications that work seamlessly across iOS and Android devices. Our mobile solutions are designed to engage users and drive business growth.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you need a consumer app, enterprise solution, or innovative startup MVP, we have the expertise to deliver exceptional mobile experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile Services</h3>
            <ul className="space-y-4">
              {[
                'Native iOS & Android Development',
                'Cross-Platform Solutions (React Native, Flutter)',
                'Mobile UI/UX Design',
                'App Store Optimization',
                'Push Notifications',
                'Offline Functionality',
                'Payment Integration',
                'Analytics & Tracking',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'GraphQL', 'Redux'].map((tech, i) => (
                <div key={i} className="bg-white rounded-lg px-4 py-3 text-center font-semibold text-gray-700 shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Ideation & Strategy', desc: 'Define your app vision, target audience, and key features.' },
              { icon: Smartphone, title: 'Design & User Testing', desc: 'Create beautiful interfaces and validate with real users.' },
              { icon: Zap, title: 'Development & QA', desc: 'Build robust features with comprehensive quality assurance.' },
              { icon: TrendingUp, title: 'Launch & Growth', desc: 'Deploy to app stores and optimize for user acquisition.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Mobile?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Wider audience reach',
              'Enhanced brand presence',
              'Direct customer engagement',
              'Increased revenue streams',
              'Valuable user insights',
              'Competitive differentiation',
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Build Your Mobile App</h2>
          <p className="text-xl text-blue-100 mb-8">Transform your idea into a successful mobile application.</p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
