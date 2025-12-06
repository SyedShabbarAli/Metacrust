import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScreenSize } from "../../hooks/useScreenSize";
export default function AppsSection({ label, children }) {
  const { isMobile, isTab } = useScreenSize();
  const value = isMobile || isTab ? false : true;
  const [openApp, setOpenApp] = useState(value);

  useEffect(() => {
    if (isMobile || isTab) {
      setOpenApp(false);
    } else {
      setOpenApp(true);
    }
  }, [isMobile, isTab]);

  const divVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    show: {
      opacity: 1,
      y: 30,
      transition: {
        type: "spring",
      },
    },
  };

  const parVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <motion.div
      className=" relative  flex flex-col justify-center w-3/4 md:w-full items-center font-sans lg:pb-56 "
      variants={divVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      <motion.h1
        className={`border-2 border-blue-100 bg-gradient-to-br from-cyan-50 to-white py-[1rem] pt-5  w-full h-[5rem] flex items-center justify-center rounded-xl font-semibold text-center ${
          isMobile || isTab ? "cursor-pointer" : ""
        } shadow-md text-sm md:text-lg`}
        onClick={() =>
          setOpenApp((pv) => {
            if (isMobile || isTab) {
              return !pv;
            }
            return true;
          })
        }
        whileHover={
          isMobile || isTab
            ? {
                scale: 1.06,
              }
            : ""
        }
      >
        {label}
      </motion.h1>
      <AnimatePresence>
        {openApp && (
          <motion.div
            layout
            variants={parVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            exit="exit"
          >
            <div className="text-sm border-2 border-blue-100 md:text-base mt-7 h-[10rem] w-full lg:mt-0 lg:absolute lg:top-40 xl:top-28 left-0  px-[0.6rem] flex items-center  text-center  text-black/80 rounded-xl bg-gradient-to-br from-cyan-50 to-white shadow-md">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
