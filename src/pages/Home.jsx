import IntroSection from "../components/sections/IntroSection";
import deviceImg from "../assets/embbded.webp";
import ParagraphSection from "../components/sections/ParagraphSection";
import ServicesCard from "../components/cards/ServicesCard";
import { motion } from "framer-motion";
import CardSlider from "../components/layouts/CardSlider";
import YouTubeStylePlayer from "../components/layouts/YouTubeStylePlayer";
import IndustryPopup from "../components/modals/IndustryPopup";

import {
  DEFINITION_PARAGRAPH,
  IMAGES,
  SERVICES_DATA,
  ACKNOWLEDGEMENTS,
} from "../data/homeData.js";

import { CORE_FUN } from "../data/aboutData";
import { useScrollTop } from "../hooks/useScrollTop";

// ------------------
// Animation Variants
// ------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// =========================
// HOME PAGE COMPONENT START
// =========================

export default function Home() {
  useScrollTop();

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 flex flex-col gap-y-20">
      
      <IndustryPopup />
      <IntroSection />

      {/* Definition Section */}
      <section className="flex flex-col lg:flex-row gap-10 items-center">
        <motion.img
          loading="lazy"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={deviceImg}
          className="hidden lg:block w-72 h-72 xl:w-80 xl:h-80 rounded-3xl object-cover shadow-2xl"
        />

        <ParagraphSection label="What is MetaCrust ?">
          {DEFINITION_PARAGRAPH}
        </ParagraphSection>
      </section>

      {/* Video Section */}
      <YouTubeStylePlayer />

      {/* Core Highlights */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent rounded-3xl -z-10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Core Highlights
          </h2>
          <p className="mt-3 text-gray-600 text-base max-w-2xl mx-auto">
            Key metrics that reflect our platform’s performance and reliability.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {CORE_FUN.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-cyan-100"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                <h3 className="font-bold text-lg text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:-mt-10">
        {SERVICES_DATA.map((service) => (
          <ServicesCard key={service.label} label={service.label} img={service.img}>
            {service.description}
          </ServicesCard>
        ))}
      </section>

      {/* Utilizations Section */}
      <section className="relative py-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 via-blue-50/30 to-transparent rounded-3xl -z-10" />

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 bg-clip-text text-transparent"
        >
          Utilizations
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mt-4"
        >
          Enabling secure communication and operations across multiple industries.
        </motion.p>

        <div className="mt-12">
          <CardSlider />
        </div>
      </section>

      {/* Acknowledgements */}
      <section className="py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            MetaCrust's Acknowledgement
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-cyan-700 mt-4"
          >
            Supported by Global Innovation Leaders
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-lg mt-4"
          >
            {ACKNOWLEDGEMENTS}
          </motion.p>
        </div>

        {/* Logos */}
{/* Logos */}
<div className="w-full overflow-hidden mt-20">
  <div className="flex items-center whitespace-nowrap animate-scrollLeft">
    {[...IMAGES, ...IMAGES].map((logo, index) => (
      <motion.img
        key={index}
        src={logo}
        alt="Partner Logo"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-10 h-20 w-32 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
      />
    ))}
  </div>
</div>

      </section>
    </div>
  );
}

