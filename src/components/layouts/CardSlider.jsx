import { motion, AnimatePresence } from "framer-motion";
import marqueImg from "../../assets/marque.png";
import { useState, useEffect, useRef } from "react";
import { UTILIZATIONS } from "../../data/homeData";
import { useScreenSize } from "../../hooks/useScreenSize";

const SIZES = {
  mobile: 1,
  tab: 2,
  largeScreen: 3,
};

const duration = {
  mobile: 3500,
  other: 4000,
};

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile, isTab } = useScreenSize();

  const intervalRef = useRef(null);

  const value = isMobile ? SIZES.mobile : isTab ? SIZES.tab : SIZES.largeScreen;
  const intervalTime = isMobile ? duration.mobile : duration.other;

  function resetInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  function startInterval() {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((pv) => (pv + 1) % UTILIZATIONS.length);
    }, intervalTime);
  }

  useEffect(() => {
    startInterval();
    return () => resetInterval();
  }, []);

  const handleManualNavigation = (newIndex) => {
    resetInterval();
    setCurrentIndex(newIndex);
    startInterval();
  };

  const dataShown =
    currentIndex + value < UTILIZATIONS.length
      ? UTILIZATIONS.slice(currentIndex, currentIndex + value)
      : [
          ...UTILIZATIONS.slice(currentIndex, UTILIZATIONS.length),
          ...UTILIZATIONS.slice(
            0,
            (currentIndex + value) % UTILIZATIONS.length
          ),
        ];

  return (
    <div className="flex gap-x-6 md:gap-x-20 items-center w-full">
      <button
        className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        onClick={() =>
          handleManualNavigation(
            (currentIndex - 1 + UTILIZATIONS.length) % UTILIZATIONS.length
          )
        }
      >
        <img
          src={marqueImg}
          alt="marqueLogo"
          className="rotate-180 h-5 w-5 md:h-7 md:w-7"
        />
      </button>
      <AnimatePresence mode="popLayout">
        {dataShown.map((card, index) => (
          <motion.div
            layout
            className="  border-2 h-fit w-[20rem]   text-center bg-cyan-50 rounded-2xl shadow-md flex flex-col gap-4 justify-evenly items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            key={`${card.label}-${index}`}
          >
            <img
              src={card.img}
              className="object-cover  rounded-t-lg h-[16rem] w-full  mb-4   md:mb-2"
              alt={card.label}
            />
            <h2 className=" px-2 lg:text-lg  h-14 font-sans font-bold mb-5">
              {card.label}
            </h2>
            {/* <img
              src={card.deviceImg}
              className="size-32 object-contain rounded-3xl"
            /> */}
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        onClick={() =>
          handleManualNavigation((currentIndex + 1) % UTILIZATIONS.length)
        }
      >
        <img
          src={marqueImg}
          alt="marqueLogo"
          className=" h-5 w-5 md:h-7 md:w-7"
        />
      </button>
    </div>
  );
}
