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
      className="relative font-sans border-2 border-blue-100 text-center lg:text-start w-[90%] h-[90%] py-6 md:py-20 bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-3 lg:p-9 my-6 shadow-md"
      variants={divVariants}
      initial="hidden"
      whileHover={{ scale: 1.06 }}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h1 className="font-semibold text-lg md:text-2xl mb-4">{label}</h1>
      <p className=" text-sm md:text-base text-black">{children}</p>
      <motion.img
        src={img}
        className="absolute z-10  right-[3%] bottom-[15%] w-20 object-contain "
        variants={imgVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      />
    </motion.div>
  );
}
