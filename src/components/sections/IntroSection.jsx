import dataImg from "../../assets/workflows_io.png";
import { motion } from "framer-motion";
import { LockClosedIcon, ActivityLogIcon, LightningBoltIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <div className="relative bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/60 h-fit w-full rounded-xl md:rounded-2xl lg:rounded-[2rem] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 shadow-lg lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-cyan-100/40 overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-400/8 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 lg:-bottom-32 lg:-left-32 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-purple-400/6 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content Section */}
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-sans tracking-tight leading-[1.1] mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-700 to-blue-900 bg-clip-text text-transparent">
              METACRUST
            </span>
          </h1>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-6 lg:mb-8">
            <motion.div 
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -2 }}
            >
              <LockClosedIcon className="w-5 h-5" />
              <span>Secure</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-br from-green-50 to-green-100 text-green-900 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -2 }}
            >
              <ActivityLogIcon className="w-5 h-5" />
              <span>Scalable</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 text-orange-900 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -2 }}
            >
              <LightningBoltIcon className="w-5 h-5" />
              <span>Energy-Efficient</span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
            Device Communication & Monitoring Platform that revolutionizes IoT connectivity. Seamlessly connect, monitor, and manage thousands of devices with enterprise-grade security and real-time insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
            <Link to="/connect">
              <motion.div
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                style={{ background: '#06b6d4' }}
                whileHover={{ y: -2, boxShadow: "0 12px 35px rgba(6, 182, 212, 0.4)" }}
              >
                Request a Demo
                <ArrowRightIcon className="w-5 h-5" />
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white font-semibold rounded-xl border-2 border-slate-200 shadow-md hover:shadow-lg hover:bg-slate-50 transition-all cursor-pointer"
                style={{ color: '#06b6d4' }}
                whileHover={{ y: -2 }}
              >
                Learn More
              </motion.div>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t-2 border-slate-200">
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-1" style={{ color: '#06b6d4' }}>99.9%</div>
              <div className="text-xs lg:text-sm text-slate-600 font-medium">Uptime Guarantee</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-1" style={{ color: '#06b6d4' }}>10M+</div>
              <div className="text-xs lg:text-sm text-slate-600 font-medium">Devices Connected</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-1" style={{ color: '#06b6d4' }}>24/7</div>
              <div className="text-xs lg:text-sm text-slate-600 font-medium">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative circles */}
          <motion.div 
            className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full opacity-10"
            style={{ background: 'linear-gradient(to bottom right, #06b6d4, #06b6d4)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full opacity-10"
            style={{ background: 'linear-gradient(to bottom right, #06b6d4, #06b6d4)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
          />
          
          <motion.div
            className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={dataImg}
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.15)]"
              loading="lazy"
              alt="MetaCrust Platform"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
