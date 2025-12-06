import { motion } from "framer-motion";
import ParagraphSection from "../components/sections/ParagraphSection";
import Heading from "../components/layouts/Heading";
import ServicesCard from "../components/cards/ServicesCard";
import AppsSection from "../components/sections/AppsSection";
import valuesImg from "../assets/values.png";
import mechanismImg from "../assets/mechanism.gif";

import {
  VALUES_DATA_1,
  FINAL_VALUE_CARD,
  SECOND_VALUE_CARD,
  JOURNEY_DATA,
  APPLICATION_SECTION_DATA_1,
} from "../data/aboutData.jsx";

import { useScrollTop } from "../hooks/useScrollTop";
import { PURPOSE } from "../data/servicesData.jsx";

export default function AboutUs() {
  useScrollTop();
  return (
    <div className="px-4 md:px-20 lg:px-32   flex flex-col gap-y-8">
      <div className="self-center mt-4 text-6xl px-10 lg:px-16 bg-gradient-to-t   from-transparent to-[#bbf8ff]   rounded-2xl">
        <Heading label="About Us" color={"[#24b2d9]"} />
      </div>
      <div className="flex flex-col items-start    gap-y-8 gap-x-28">
        <div className="flex justify-start flex-col md:flex-row gap-y-10 gap-x-32 items-center w-full">
          <div className="flex flex-col gap-5 md:gap-y-10 lg:gap-y-16">
            <ParagraphSection label={"Purpose"}>{PURPOSE}</ParagraphSection>
          </div>
          <motion.img
            src={mechanismImg}
            className="size-[80%] self-center md:size-[60%] lg:size-[40%]  xl:size-[30%]  rounded-2xl  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="self-center">
        <Heading label="Our Values" />
      </div>
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center ">
        {VALUES_DATA_1.map((value) => (
          <ServicesCard label={value.label} img={value.img} key={value.label}>
            {value.description}
          </ServicesCard>
        ))}
        <div className="mx-auto col-span-1 flex justify-center w-[100%] h-[100%]  ">
          <ServicesCard
            label={SECOND_VALUE_CARD.label}
            img={SECOND_VALUE_CARD.img}
          >
            {SECOND_VALUE_CARD.description}
          </ServicesCard>
        </div>
        <div className="hidden lg:block col-span-1">
          <motion.img
            src={valuesImg}
            className="size-36 mt-14  "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 1,
            }}
          />
        </div>
        <div className="md:mx-auto flex justify-center col-span-1   w-[100%] h-[100%]   md:w-[200%] lg:w-auto ">
          <ServicesCard
            label={FINAL_VALUE_CARD.label}
            img={FINAL_VALUE_CARD.img}
          >
            {FINAL_VALUE_CARD.description}
          </ServicesCard>
        </div>
      </div>

      <div className="flex justify-center  -mb-20 lg:-mb-12 md:mt-14">
        <Heading label="What Sets MetaCrust Apart?" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center   gap-x-20 gap-y-11 pt-14 mb-10 ">
        {APPLICATION_SECTION_DATA_1.map((item, index) => {
          return item.img ? (
            <img
              src={item.img}
              key={index}
              className={`size-40 ${
                index % 3 === 0 ? "md:block" : "md:hidden"
              } xl:block hidden`}
            />
          ) : (
            <AppsSection label={item.label} key={item.label}>
              {item.description}
            </AppsSection>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-y-10 py-20 px-4 md:px-8"
      >
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-cyan-600 font-semibold">
            From Vision to Innovation
          </p>
        </div>

        {/* Content Card */}
        <div className="relative bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border-2 border-cyan-100 max-w-6xl mx-auto w-full">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-0" />
          
          <div className="relative z-10">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center md:text-justify">
              {JOURNEY_DATA}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
