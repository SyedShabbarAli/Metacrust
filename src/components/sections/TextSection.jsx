import { motion } from "framer-motion";
export default function TextSection({ label, children }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex  px-2 w-full md:w-full flex-col py-9 gap-4   text-center  lg:text-start ">
      <motion.h1
        className="  text-3xl lg:text-7xl  font-sans font-bold mt-0 lg:mt-16 lg:ml-6 "
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {label}
      </motion.h1>
      <p className="font-sans lg:ml-7    text-xs  md:text-xl font-semibold text-black/75 ">
        {children}
      </p>
    </div>
  );
}
