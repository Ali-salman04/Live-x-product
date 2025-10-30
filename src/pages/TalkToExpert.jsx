import { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

const TalkToExpert = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timezone, setTimezone] = useState('Asia/Karachi');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const isDateAvailable = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const time = `${displayHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time slot');
      return;
    }
    console.log('Booking Details:', {
      ...formData,
      date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${selectedDate}`,
      time: selectedTime,
      timezone
    });
    alert('Booking request submitted successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-20">
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Free Consultation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn delay-200">
            Let's bring your vision to life!
          </h1>
          <p className="text-xl text-cyan-100 mb-2 animate-fadeIn delay-400">Book a 15-minute call today and get expert guidance.</p>
          
          <div className="flex justify-center gap-8 mt-8 animate-fadeIn delay-600">
            {['Free Consultation', '15 Minutes', 'Expert Advice'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-200" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Booking Calendar */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl border border-gray-100">
            <div className="mb-8 text-center">
              <div className="relative inline-block">
                <img 
                  src="./img/ceo.jpg" 
                  alt="Syed Waqar Ali - CEO"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-xl animate-pulse-slow border-4 border-white"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full mx-auto mb-4 hidden items-center justify-center shadow-xl animate-pulse-slow">
                  <span className="text-white text-3xl font-bold">WA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Syed Waqar Ali</h2>
              <p className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text font-semibold">CEO</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 mb-6 border border-cyan-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-600" />
                  15 Min Discovery Meeting
                </h3>
                <p className="text-gray-600 text-sm">Get free guidance on your project. Book a 15-minute Google Meeting with our expert.</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold">15 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Platform</p>
                    <p className="font-semibold">Google Meet</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Current Time</p>
                    <p className="font-semibold font-mono text-sm">{formatTime(currentTime)}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Select Your Time Zone
                </label>
                <select 
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all bg-white hover:border-cyan-300"
                >
                  <option value="Asia/Karachi">🇵🇰 Asia/Karachi (PKT)</option>
                  <option value="Asia/Dubai">🇦🇪 Asia/Dubai (GST)</option>
                  <option value="Europe/London">🇬🇧 Europe/London (GMT)</option>
                  <option value="America/New_York">🇺🇸 America/New_York (EST)</option>
                  <option value="America/Los_Angeles">🇺🇸 America/Los_Angeles (PST)</option>
                  <option value="Asia/Tokyo">🇯🇵 Asia/Tokyo (JST)</option>
                  <option value="Australia/Sydney">🇦🇺 Australia/Sydney (AEDT)</option>
                </select>
              </div>

              <div className="mb-6 bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-cyan-100 rounded-xl transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <label className="text-lg font-bold text-gray-900">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </label>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-cyan-100 rounded-xl transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-2 text-center mb-3">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-xs font-bold text-gray-500 py-2">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(firstDay)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square"></div>
                  ))}
                  {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    const available = isDateAvailable(day);
                    return (
                      <button
                        key={day}
                        onClick={() => available && setSelectedDate(day)}
                        disabled={!available}
                        className={`aspect-square rounded-xl text-sm font-semibold transition-all duration-300 ${
                          selectedDate === day
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white scale-110 shadow-xl'
                            : available
                            ? 'hover:bg-cyan-50 text-gray-700 hover:scale-105 border border-gray-200'
                            : 'text-gray-300 cursor-not-allowed opacity-50'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div className="animate-fadeIn">
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Select Time Slot - {monthNames[currentDate.getMonth()]} {selectedDate}
                  </label>
                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto p-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                    {timeSlots.map((time, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white hover:bg-cyan-50 text-gray-700 hover:scale-105 border border-gray-200 hover:border-cyan-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to Start?</h2>
                <p className="text-gray-600">
                  Fill in your details and we'll get back to you with a quote.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:border-cyan-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:border-cyan-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:border-cyan-300"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none transition-all hover:border-cyan-300"
                    placeholder="I'm looking for help with..."
                  />
                </div>

                {selectedDate && selectedTime && (
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-4 animate-fadeIn">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                      <p className="text-sm font-bold text-cyan-900">Your Selected Booking</p>
                    </div>
                    <p className="text-sm text-cyan-700 font-medium">
                      📅 {monthNames[currentDate.getMonth()]} {selectedDate}, {currentDate.getFullYear()}
                    </p>
                    <p className="text-sm text-cyan-700 font-medium">
                      🕐 {selectedTime}
                    </p>
                    <p className="text-xs text-cyan-600 mt-1">🌍 {timezone}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={!formData.name || !formData.email || !selectedDate || !selectedTime}
                >
                  {(!formData.name || !formData.email || !selectedDate || !selectedTime) 
                    ? 'Complete All Fields'
                    : 'Confirm Booking 🚀'
                  }
                </button>

                <p className="text-xs text-center text-gray-500">
                  By booking, you agree to receive communication from us about your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default TalkToExpert;