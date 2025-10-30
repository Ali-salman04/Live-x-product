import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;

    const pixelSize = 20;
    const cols = Math.ceil(canvas.width / pixelSize);
    const rows = Math.ceil(canvas.height / pixelSize);
    
    const pixels = [];
    for (let i = 0; i < cols * rows; i++) {
      pixels.push({
        x: (i % cols) * pixelSize,
        y: Math.floor(i / cols) * pixelSize,
        color: Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.03)' : 'rgba(59, 130, 246, 0.03)',
        opacity: Math.random() * 0.5,
        speed: Math.random() * 0.02 + 0.01
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      pixels.forEach(pixel => {
        pixel.opacity += pixel.speed;
        if (pixel.opacity > 1 || pixel.opacity < 0) {
          pixel.speed *= -1;
        }
        
        ctx.fillStyle = pixel.color.replace(/[\d.]+\)$/g, `${pixel.opacity * 0.1})`);
        ctx.fillRect(pixel.x, pixel.y, pixelSize - 1, pixelSize - 1);
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver enterprise-grade IT solutions that enhance security, boost efficiency, and accelerate digital transformation.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Certified IT specialists, cloud architects, and security experts dedicated to your technology success.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Security-first approach, proactive support, and delivering measurable business outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Our Vision',
      description: 'To be the leading IT partner empowering businesses through innovative technology and exceptional service.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Pixel Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ height: '100%' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-blue-50/30 pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Your Trusted IT Services Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, Live-X has evolved into a premier IT services company specializing in cloud solutions, cybersecurity, custom software development, and IT infrastructure management. We deliver cutting-edge technology that transforms businesses and drives innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of 50+ certified IT professionals provides 24/7 support, consulting, and implementation services to help organizations modernize their IT infrastructure, enhance security, and leverage emerging technologies like AI and cloud computing.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;