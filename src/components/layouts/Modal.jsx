import { createPortal } from "react-dom";
import { motion } from "framer-motion";
export default function Modal({ children }) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  };
  return createPortal(
    <motion.div
      className="z-50 bg-black fixed top-0 right-0 left-0 bottom-0  w-full h-full bg-opacity-75 flex flex-col items-center justify-center font-sans overflow-y-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        className="bg-slate-50 w-[90%] lg:w-[65%]  h-[29.5rem] lg:h-[37rem]  rounded-2xl"
        variants={modalVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("modal")
  );
}
