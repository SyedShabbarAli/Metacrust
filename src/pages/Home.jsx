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
        staggerChildren: 0.2,
      },
    },
  };

  const coreItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const imgVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="w-screen px-4 md:px-20 lg:px-32 flex flex-col gap-y-8 lg:gap-y-28 ">
      <IndustryPopup />
      <IntroSection />
      <div className="flex gap-x-24">
        <motion.img
          loading="lazy"
          variants={imgVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          src={deviceImg}
          className="hidden lg:flex  size-[16rem] xl:w-[19rem] xl:h-[18rem] rounded-full object-cover self-center shadow-xl"
        />
        <ParagraphSection label="What is MetaCrust ?">
          {DEFINITION_PARAGRAPH}
        </ParagraphSection>
      </div>
      <YouTubeStylePlayer />

      <div className="relative flex flex-col py-16 px-6">
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
            Core Highlights
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Key metrics that demonstrate our platform's efficiency
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8"
          variants={coreContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          {CORE_FUN.map((item, index) => (
            <motion.div
              key={item.title}
              variants={coreItemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 rounded-2xl" />
              
              {/* Icon container */}
              <div className="relative z-10 mb-6 p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-contain w-12 h-12 md:w-16 md:h-16"
                />
              </div>
              
              {/* Title */}
              <h3 className="relative z-10 font-bold text-base md:text-lg lg:text-xl text-gray-900 mb-3">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              
              {/* Decorative line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 mx-auto rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="grid  grid-cols-1  lg:grid-cols-2  place-items-center lg:-mt-10">
        {SERVICES_DATA.map((service) => (
          <ServicesCard
            key={service.label}
            label={service.label}
            img={service.img}
          >
            {service.description}
          </ServicesCard>
        ))}
      </div>
      <div className="relative flex flex-col items-center py-16 px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 via-blue-50/30 to-transparent -z-10 rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Utilizations
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Powering secure communication across diverse industries and applications
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:block gap-8 py-8 w-full">
          <CardSlider />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-y-12 py-20 px-4 md:px-8"
      >
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            MetaCrust's Acknowledgement
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-600 mb-6"
          >
            Supported By Leading Innovation Partners
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 leading-relaxed"
          >
            {ACKNOWLEDGEMENTS}
          </motion.p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16 max-w-7xl mx-auto w-full">
          {IMAGES.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-cyan-300 transition-all duration-300 flex items-center justify-center"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/50 rounded-2xl transition-all duration-300" />
              
              <img
                src={image}
                alt="Partner logo"
                className="relative z-10 object-contain w-full h-20 md:h-32 lg:h-40 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
