import { motion } from "framer-motion";

export default function Heading({ label, color }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      className={`text-2xl md:text-5xl my-2 md:my-4 px-20 py-6 rounded-2xl ${
        color && `text-${color} `
      } md:ml-2 text-center md:text-start font-semibold`}
    >
      {label}
    </motion.h3>
  );
}
