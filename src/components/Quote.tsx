import { Calculator, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get a Quote</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Request a Project Quote
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a detailed quote within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-company" className="block text-sm font-semibold text-white mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="quote-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-projectType" className="block text-sm font-semibold text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    id="quote-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-gray-900">Select a type</option>
                    <option value="web" className="bg-gray-900">Web Development</option>
                    <option value="mobile" className="bg-gray-900">Mobile App</option>
                    <option value="cloud" className="bg-gray-900">Cloud Solutions</option>
                    <option value="ai" className="bg-gray-900">AI & Automation</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-budget" className="block text-sm font-semibold text-white mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="quote-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-gray-900">Select a range</option>
                    <option value="10-25k" className="bg-gray-900">$10,000 - $25,000</option>
                    <option value="25-50k" className="bg-gray-900">$25,000 - $50,000</option>
                    <option value="50-100k" className="bg-gray-900">$50,000 - $100,000</option>
                    <option value="100k+" className="bg-gray-900">$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quote-timeline" className="block text-sm font-semibold text-white mb-2">
                  Desired Timeline *
                </label>
                <select
                  id="quote-timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                >
                  <option value="" className="bg-gray-900">Select timeline</option>
                  <option value="urgent" className="bg-gray-900">Urgent (1-2 months)</option>
                  <option value="normal" className="bg-gray-900">Normal (3-6 months)</option>
                  <option value="flexible" className="bg-gray-900">Flexible (6+ months)</option>
                </select>
              </div>

              <div>
                <label htmlFor="quote-description" className="block text-sm font-semibold text-white mb-2">
                  Project Description *
                </label>
                <textarea
                  id="quote-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your project requirements, goals, and any specific features you need..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Request Quote
              </button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: '24 Hour Response', description: 'Quick turnaround on quotes' },
              { label: 'No Obligation', description: 'Free consultation included' },
              { label: 'Detailed Breakdown', description: 'Transparent pricing' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
