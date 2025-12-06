import { motion } from "framer-motion";

export default function CenteredHeader({ children }) {
  return (
    <motion.h2
      className="text-base md:text-lg lg:text-5xl my-2 md:my-4  font-semibold"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.h2>
  );
}
