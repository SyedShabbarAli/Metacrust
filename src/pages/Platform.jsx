import PlatformButtons from "../components/layouts/PlatformButtons";
import CenteredHeader from "../components/layouts/CenteredHeader";
import Heading from "../components/layouts/Heading";
import {
  HOLD_DATA,
  PLATFORM_BENEFITS,
  CORE_CAPS,
  WHY_CHOOSE,
  DEVICES_TYPES,
} from "../data/PlatformData";
import PlatformListItem from "../components/layouts/PlatformListItem";
import { motion } from "framer-motion";
import successImg from "../assets/successLogo.png";
import UseCaseDemoPopup from "../components/modals/UseCaseDemoPopup";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Platform() {
  return (
    <>
      <UseCaseDemoPopup />
      <div className="w-screen px-4 md:px-10 lg:px-24 flex flex-col gap-y-20 mt-4">
      <section className="flex flex-col items-center bg-gradient-to-t   from-transparent to-[#bbf8ff]  mb-4   rounded-2xl">
        <Heading label={"Secure Communication for MedTech & IoT Devices"} />
        <h3 className="text-2xl md:text-5xl my-2 md:my-4 text-center px-10 py-6 rounded-2xl undefined md:ml-2 text-center md:text-start font-semibold">Secure Communication for MedTech &amp; IoT Devices</h3>
        <p className="mt-4 text-xs md:text-2xl px-4 md:px-10 font-mono text-center lg:w-3/4 text-black">
          MetaCrust’s plug-and-play platform brings real-time encryption, secure
          telemetry, and compliance-ready integration to your devices — in
          minutes, not months.
        </p>
        <div className="flex justify-evenly w-full mt-10">
          <PlatformButtons color="cyan" label="Book a Demo" to="/connect" />
          <PlatformButtons
            color="red"
            label="How it Works"
            to="/applications"
          />
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 px-4 md:px-10 py-16 rounded-3xl shadow-2xl xl:mx-20 border-2 border-cyan-100 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent mb-4">
            What's Holding Your Device Back?
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base lg:text-lg mb-12 max-w-3xl mx-auto">
            Common challenges that slow down innovation and compromise security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative z-10">
          {HOLD_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl border-2 border-cyan-100/50 hover:border-cyan-300 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm md:text-base lg:text-lg font-mono text-gray-800 leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 p-[2px] rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl px-4 md:px-8 py-6">
              <p className="text-center font-semibold text-lg md:text-xl lg:text-2xl">
                <span className="text-red-500">Meta</span>
                <span className="text-cyan-500">Crust </span>
                <span className="text-gray-800">exists to eliminate these barriers.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative flex flex-col xl:px-20 items-center text-center py-16 px-4 md:px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent -z-10 rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Built for Embedded Security — Without Complexity
          </h2>
          <p className="mt-5 text-sm md:text-lg lg:text-xl font-mono text-center max-w-4xl text-gray-700 mx-auto leading-relaxed">
            MetaCrust enables authenticated, encrypted data transfer with no need
            to redesign your hardware or re-architect your stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
          {PLATFORM_BENEFITS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 z-0" />
              
              {/* Image container with overlay effect */}
              <div className="relative overflow-hidden">
                <img
                  src={item.descImg}
                  alt={item.desc}
                  className="object-cover rounded-t-xl h-48 w-full transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <p className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  {item.desc}
                </p>
                
                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 mx-auto rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-3 bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-100 px-8 py-4 rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-cyan-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="text-sm md:text-base font-semibold text-gray-800">
            Secure, Simple, and Ready to Deploy
          </span>
        </motion.div>
      </section>

      <section className="relative flex flex-col justify-center items-center py-16 px-4 md:px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent -z-10 rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Core Capabilities
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Measurable performance improvements that matter
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-10 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          {CORE_CAPS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 rounded-2xl" />
              
              {/* Icon container */}
              <div className="relative z-10 mb-6 p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="size-12 md:size-16 object-contain" 
                />
              </div>
              
              {/* Label */}
              <span className="relative z-10 font-semibold text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
                {item.label}
              </span>
              
              {/* Decorative line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-3 bg-gradient-to-r from-green-100 via-cyan-100 to-green-100 px-8 py-4 rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="text-sm md:text-base font-semibold text-gray-800">
            Proven efficiency gains across all metrics
          </span>
        </motion.div>
      </section>

      <section className="relative flex flex-col py-16 px-4 md:px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/20 to-transparent -z-10 rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Why Teams Choose MetaCrust
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by innovators for real-world results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {WHY_CHOOSE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-white border-2 border-green-100 hover:border-green-300 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-cyan-500/0 group-hover:from-green-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
              
              {/* Icon container */}
              <div className="relative z-10 mb-4 flex justify-center">
                <div className="p-3 bg-gradient-to-br from-green-100 to-cyan-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <h4 className="relative z-10 font-semibold text-sm md:text-base text-gray-800 leading-relaxed">
                {item}
              </h4>
              
              {/* Decorative line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-500 mx-auto rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-3 bg-gradient-to-r from-green-100 via-cyan-100 to-green-100 px-8 py-4 rounded-full shadow-md max-w-2xl mx-auto"
        >
          <svg
            className="w-6 h-6 text-green-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-sm md:text-base font-semibold text-gray-800">
            Verified performance by leading teams worldwide
          </span>
        </motion.div>
      </section>

      <section className="relative flex flex-col items-center py-16 px-4 md:px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-cyan-50/30 -z-10 rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Devices & Use Cases
          </h2>
          <p className="mt-5 text-sm md:text-lg lg:text-xl font-mono text-center max-w-4xl text-gray-700 mx-auto leading-relaxed">
            MetaCrust is built for devices that need secure communication without
            compromising battery life or compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
          {DEVICES_TYPES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 z-0" />
              
              {/* Image container with overlay effect */}
              <div className="relative overflow-hidden h-56 md:h-64">
                <img
                  src={item.desImg}
                  alt={item.label}
                  className="object-cover w-full h-full rounded-t-xl transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon badge overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h4 className="font-semibold text-base md:text-lg text-gray-800 leading-relaxed text-center min-h-[3rem] flex items-center justify-center">
                  {item.label}
                </h4>
                
                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 mx-auto rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-100 px-8 py-5 rounded-2xl shadow-md max-w-3xl"
        >
          <svg
            className="w-8 h-8 text-cyan-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-sm md:text-base font-semibold text-gray-800 text-center md:text-left">
            Powering secure, efficient communication across diverse IoT ecosystems
          </span>
        </motion.div>
      </section>
      </div>
    </>
  );
}



