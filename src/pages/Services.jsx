import { motion, AnimatePresence } from "framer-motion";
import ParagraphSection from "../components/sections/ParagraphSection";
import Heading from "../components/layouts/Heading";
import ApplicationCard from "../components/cards/ApplicationCard";
import FrameworkCard from "../components/cards/FrameworkCard.jsx";
import { useScrollTop } from "../hooks/useScrollTop";

import arrowImg from "../assets/arrowHead.png";
import WorkflowDiagram from "../components/sections/WorkFlow.jsx";

import {
  BENEFITS_SECTION_DATA,
  FEATURES_DATA,
  APPLICATION_DATA,
} from "../data/servicesData.jsx";
import { useState } from "react";

export default function Services() {
  useScrollTop();
  const [open, setOpen] = useState(false);

  const [openDesc, setOpenDesc] = useState(-1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  function handleOpenDescCard(index) {
    const value = openDesc === index ? -1 : index;
    setOpenDesc(value);
  }

  return (
    <>
      <div className=" px-4 md:px-20 lg:px-32 flex flex-col gap-y-7 md:gap-y-11 font-sans">
        <div className="flex flex-col mt-4 ">
          <div className="self-center  bg-gradient-to-t px-10 lg:px-16  from-transparent to-[#bbf8ff]  rounded-2xl">
            <Heading label="What we offer" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            className="grid grid-cols-2 place-items-center md:grid-cols-3 mt-3 md:mt-12"
          >
            {BENEFITS_SECTION_DATA.map((item, index) => (
              <motion.div
                key={item.label}
                variants={childVariants}
                className="flex w-full md:w-[75%] h-[13rem] md:h-[18rem] lg:h-[23rem] font-mono justify-center gap-y-5 md:gap-y-10 xl:gap-y-16 flex-col items-center"
              >
                <img
                  src={item.img}
                  alt=""
                  className="size-12 md:size-32 object-contain"
                />
                <h4 className="text-center font-sans font-semibold text-xs md:text-lg w-[60%]">
                  {item.label}
                </h4>
                <div className="flex flex-col md:flex-row gap-2 justify-center text-xs md:text-sm font-bold">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border-2 transition-colors duration-300 px-2 py-2 md:py-3 md:px-5 hover:border-red-500 hover:bg-red-300 bg-gray-300 border-black"
                    onClick={() => handleOpenDescCard(index)}
                  >
                    Description
                  </motion.button>
                </div>
                <AnimatePresence>
                  {openDesc !== -1 && openDesc === index && (
                    <FrameworkCard
                      Card
                      label={BENEFITS_SECTION_DATA[openDesc].label}
                      par={BENEFITS_SECTION_DATA[openDesc].description}
                      isDesc={true}
                      openCard={handleOpenDescCard}
                      para={openDesc}
                      key={"desc"}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ amount: 0.5 }}
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center  w-1/2 md:w-1/4 mt-5  md:mt-16  self-center justify-center gap-5 border-2 px-2 py-2 lg:px-8 text-xs lg:text-2xl  lg:py-4  rounded-lg hover:bg-red-300 hover:border-red-500 bg-cyan-200 border-cyan-400 font-semibold transition-colors duration-300 `}
          >
            <span>How it Works</span>
            <motion.img
              src={arrowImg}
              className="object-contain size-5"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </div>
        <div className="relative flex flex-col py-16 px-6">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent -z-10 rounded-3xl" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="self-center text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Core Capabilities
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced features designed for secure, efficient device communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
            {FEATURES_DATA.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 flex flex-col"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 rounded-2xl" />
                
                {/* Icon container */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={feature.img} 
                      alt={feature.label}
                      className="w-12 h-12 object-contain" 
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="relative z-10 text-center font-bold text-lg md:text-xl text-gray-900 mb-4">
                  {feature.label}
                </h3>
                
                {/* Description */}
                <p className="relative z-10 text-center text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 mx-auto rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col py-16 px-6">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/30 via-transparent to-blue-50/30 -z-10 rounded-3xl" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="self-center text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Who We're Built For
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering diverse industries with secure, energy-efficient IoT solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            {APPLICATION_DATA.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 z-0" />
                
                {/* Image container */}
                <div className="relative overflow-hidden h-56 md:h-64">
                  <img
                    src={item.descImg}
                    alt={item.label}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon badge overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <img 
                      src={item.img} 
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 text-center">
                    {item.label}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center flex-grow">
                    {item.description}
                  </p>
                  
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
            className="mt-16 flex items-center gap-3 bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-100 px-8 py-4 rounded-full shadow-md max-w-3xl mx-auto"
          >
            <svg
              className="w-6 h-6 text-cyan-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm md:text-base font-semibold text-gray-800">
              Serving industries worldwide with proven security solutions
            </span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          >
            <WorkflowDiagram onClick={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
