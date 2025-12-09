import { useState } from 'react';

// AnimateButton Component
function AnimateButton() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
        Request a Demo
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
      <button className="px-8 py-3.5 bg-white text-blue-600 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
        Learn More
      </button>
    </div>
  );
}

// Stats Component
function StatsSection() {
  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10M+", label: "Devices Connected" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 mt-8 border-t-2 border-gray-200">
      {stats.map((stat, index) => (
        <div key={index} className="text-left">
          <div className="text-2xl lg:text-4xl font-extrabold text-blue-600 mb-1">
            {stat.number}
          </div>
          <div className="text-xs lg:text-sm text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Component
export default function IntroSection() {
  const features = [
    { 
      name: "Secure", 
      color: "from-blue-500 to-blue-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    { 
      name: "Scalable", 
      color: "from-green-500 to-green-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    },
    { 
      name: "Energy-Efficient", 
      color: "from-orange-400 to-orange-500",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 min-h-screen w-full flex items-center overflow-hidden">
      {/* Animated background gradients */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-radial from-purple-400/8 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '8s', animationDelay: '4s' }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <div className="text-center lg:text-left space-y-6 animate-fadeInLeft">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  METACRUST
                </span>
              </h1>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-200"
                  >
                    <div className={`bg-gradient-to-r ${feature.color} p-1.5 rounded-full text-white`}>
                      {feature.icon}
                    </div>
                    <span className={`font-semibold text-sm bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Device Communication & Monitoring Platform that revolutionizes IoT connectivity. Seamlessly connect, monitor, and manage thousands of devices with enterprise-grade security and real-time insights.
            </p>

            <div className="pt-4">
              <AnimateButton />
            </div>

            {/* Stats Section */}
            <StatsSection />
          </div>

          {/* Right Image Section */}
          <div className="relative animate-fadeInRight">
            {/* Decorative circles */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-spin-slow"
              style={{ animationDuration: '20s' }}
            />
            <div 
              className="absolute bottom-0 left-0 w-48 h-48 lg:w-60 lg:h-60 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-spin-slow"
              style={{ animationDuration: '20s', animationDelay: '10s' }}
            />
            
            <div className="relative animate-float">
              <img
                src="https://i.imgur.com/7QxYZGH.png"
                className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain mx-auto drop-shadow-2xl"
                loading="lazy"
                alt="MetaCrust IoT Platform"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
