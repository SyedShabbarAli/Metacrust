import { useScrollTop } from "../hooks/useScrollTop";
import { motion } from "framer-motion";
import Heading from "../components/layouts/Heading";
import FaqsSection from "../components/sections/FaqsSection";
import groupImg from "../assets/group.png";
import { FAQS_DATA } from "../data/faqsData";

export default function FAQs() {
  useScrollTop();
  return (
    <div className="mx-6 xl:mx-32 font-sans flex flex-col  md:gap-y-14">
      <div className="flex xl:justify-between  md:mt-5 xl:gap-x-10">
        <div className=" hidden  size-[150%] xl:flex flex-col gap-y-28 items-center mt-16">
          <motion.img
            src={groupImg}
            alt="FAQ"
            className=" size-[60%] self-center  mt-20 "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.8,
            }}
          />
        </div>
        <div className="mx-auto">
          <div className="px-10 lg:px-16 bg-gradient-to-t   from-[#ffffff] to-[#bbf8ff] py-0.5   rounded-2xl">
            <Heading label="FAQs" />
          </div>
          <div className="mt-10 mx-auto xl:h-[28rem] xl:w-[38rem] w-[100%] xl:overflow-x-hidden rounded-3xl xl:overflow-y-scroll">
            {FAQS_DATA.map((item) => (
              <FaqsSection
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
