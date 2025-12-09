import IntroSection from "../components/sections/IntroSection";
import deviceImg from "../assets/embbded.webp";
import ParagraphSection from "../components/sections/ParagraphSection";
import ServicesCard from "../components/cards/ServicesCard";
import { motion } from "framer-motion";
import CardSlider from "../components/layouts/CardSlider";

import {
  DEFINITION_PARAGRAPH,
  IMAGES,
  SERVICES_DATA,
  ACKNOWLEDGEMENTS,
} from "../data/homeData.js";

import { useScrollTop } from "../hooks/useScrollTop";
import YouTubeStylePlayer from "../components/layouts/YouTubeStylePlayer";
import { CORE_FUN } from "../data/aboutData";
import IndustryPopup from "../components/modals/IndustryPopup";

export default function Home() {
  useScrollTop();

  const coreContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const coreItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
  };

  const imgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-24 xl:gap-y-32">
      <IndustryPopup />
      
      {/* Hero Section */}
      <section className="pt-4 md:pt-6 lg:pt-8">
        <IntroSection />
      </section>

      {/* What is MetaCrust Section */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-center">
          <motion.div
            loading="lazy"
            variants={imgVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="hidden lg:flex shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl -z-10" />
              <img
                src={deviceImg}
                className="size-[18rem] xl:w-[22rem] xl:h-[21rem] rounded-full object-cover shadow-2xl ring-4 ring-cyan-100/50"
                alt="MetaCrust Device"
              />
            </div>
          </motion.div>
          <div className="flex-1 w-full">
            <ParagraphSection label="What is MetaCrust ?">
              {DEFINITION_PARAGRAPH}
            </ParagraphSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <YouTubeStylePlayer />
        </motion.div>
      </section>

      {/* Core Highlights Section */}
      <section className="relative">
        <div className="relative flex flex-col py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Enhanced Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent -z-10 rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              <span className="text-xs md:text-sm font-semibold text-cyan-600 tracking-wider uppercase">
                Performance Metrics
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-6 px-2">
              Core Highlights
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Key metrics that demonstrate our platform's efficiency and innovation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
            variants={coreContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            {CORE_FUN.map((item, index) => (
              <motion.div
                key={item.title}
                variants={coreItemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-cyan-300/60 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/40 group-hover:to-blue-50/30 transition-all duration-300 rounded-2xl" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-100/0 to-transparent group-hover:from-cyan-100/30 transition-all duration-300 rounded-bl-full" />
                
                {/* Icon container */}
                <div className="relative z-10 mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 md:p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                </div>
                
                {/* Title */}
                <h3 className="relative z-10 font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mb-2 md:mb-3 leading-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="relative z-10 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Animated bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section (Mission & Vision) */}
      <section className="relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <span className="text-xs md:text-sm font-semibold text-cyan-600 tracking-wider uppercase">
              Our Foundation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-6 px-2">
            Mission & Vision
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              <ServicesCard
                label={service.label}
                img={service.img}
              >
                {service.description}
              </ServicesCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Utilizations Section */}
      <section className="relative">
        <div className="relative flex flex-col items-center py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Enhanced Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 via-blue-50/30 to-transparent -z-10 rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              <span className="text-xs md:text-sm font-semibold text-cyan-600 tracking-wider uppercase">
                Applications
              </span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-6 px-2">
              Utilizations
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Powering secure communication across diverse industries and applications
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:block gap-4 md:gap-8 py-4 md:py-8 w-full overflow-hidden">
            <CardSlider />
          </div>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section className="relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-16 py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 -z-10 rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent" />
          
          {/* Text Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4 md:mb-6 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20"
            >
              <span className="text-xs md:text-sm font-semibold text-cyan-600 tracking-wider uppercase">
                Partnerships
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent px-2"
            >
              MetaCrust's Acknowledgement
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-cyan-600 mb-4 md:mb-6 px-2"
            >
              Supported By Leading Innovation Partners
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2"
            >
              {ACKNOWLEDGEMENTS}
            </motion.p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto w-full mt-8 md:mt-12">
            {IMAGES.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-cyan-300/60 transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/40 group-hover:to-blue-50/30 rounded-2xl transition-all duration-300" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-100/0 to-transparent group-hover:from-cyan-100/20 transition-all duration-300 rounded-bl-full" />
                
                <img
                  src={image}
                  alt="Partner logo"
                  className="relative z-10 object-contain w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
