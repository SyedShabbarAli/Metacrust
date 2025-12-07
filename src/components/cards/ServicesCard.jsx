import { motion } from "framer-motion";
export default function ServicesCard({ label, children, img }) {
  const divVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  const imgVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 0.16,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="relative font-sans border-2 border-blue-100 text-center lg:text-start w-[95%] sm:w-[90%] h-auto py-5 sm:py-6 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-cyan-50 to-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-9 my-4 sm:my-5 md:my-6 shadow-md"
      variants={divVariants}
      initial="hidden"
      whileHover={{ scale: 1.06 }}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">{label}</h1>
      <p className="text-xs sm:text-sm md:text-base text-black leading-relaxed">{children}</p>
      <motion.img
        src={img}
        className="absolute z-10 right-[3%] bottom-[10%] sm:bottom-[12%] md:bottom-[15%] w-14 sm:w-16 md:w-20 object-contain"
        variants={imgVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      />
    </motion.div>
  );
}
