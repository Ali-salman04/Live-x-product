import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Rocket, Users, Award } from 'lucide-react';

const Cybersecurity = () => {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Cybersecurity</h1>
              <p className="text-xl text-red-100">Protect Your Business from Evolving Threats</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Security Solutions</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            In today's digital landscape, cybersecurity is not optional—it's essential. We provide enterprise-grade security solutions that protect your data, systems, and reputation from sophisticated cyber threats.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of security experts delivers proactive threat detection, incident response, and comprehensive security frameworks to keep your business safe 24/7.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services Include</h3>
            <ul className="space-y-4">
              {[
                'Security Assessment & Audits',
                'Penetration Testing',
                'Network Security Solutions',
                'Endpoint Protection',
                'Security Operations Center (SOC)',
                'Incident Response & Recovery',
                'Compliance & Risk Management',
                'Security Awareness Training',
              ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Firewall', 'SIEM', 'IDS/IPS', 'EDR', 'VPN', 'WAF', 'DLP', 'MFA'].map((tech, i) => (
                <div key={i} className="bg-white rounded-lg px-4 py-3 text-center font-semibold text-gray-700 shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Security Approach</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Assessment', desc: 'Comprehensive evaluation of your current security posture.' },
              { icon: Shield, title: 'Implementation', desc: 'Deploy robust security controls and defense mechanisms.' },
              { icon: Rocket, title: 'Monitoring', desc: 'Continuous threat detection and real-time monitoring.' },
              { icon: Award, title: 'Response', desc: 'Rapid incident response and recovery protocols.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
          <p className="text-xl text-red-100 mb-8">Don't wait for a breach. Let's build your defense strategy now.</p>
          <Link
            to="/#contact"
                       className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"

          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;