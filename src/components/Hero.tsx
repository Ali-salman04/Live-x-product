import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Technology Network Background"
          className="w-full h-full object-cover opacity-40 transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              Welcome to the Future of Technology
            </span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transform Your Business
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-300">
              With Innovation
            </span>
          </h1>

          <p className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We deliver cutting-edge technology solutions that drive growth, enhance efficiency, and create lasting impact for businesses worldwide.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/talk-to-expert"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Talk to an Expert</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#quote"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <Calendar className="relative w-5 h-5" />
              <span className="relative">Book a Call</span>
            </a>
          </div>

          <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Team' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transition-all duration-300 hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 hover:border-cyan-400/50 transition-colors duration-300">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .bg-300 {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Hero;