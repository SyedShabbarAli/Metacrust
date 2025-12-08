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
    <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-10 items-center w-full justify-center">
      <button
        className="hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
        onClick={() =>
          handleManualNavigation(
            (currentIndex - 1 + UTILIZATIONS.length) % UTILIZATIONS.length
          )
        }
      >
        <img
          src={marqueImg}
          alt="marqueLogo"
          className="rotate-180 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
        />
      </button>
      <AnimatePresence mode="popLayout">
        {dataShown.map((card, index) => (
          <motion.div
            layout
            className="border-2 h-fit w-full min-w-[15rem] max-w-[16rem] sm:max-w-[18rem] md:max-w-[19rem] lg:max-w-[21rem] xl:max-w-[26rem] 2xl:max-w-[30rem] text-center bg-cyan-50 rounded-xl md:rounded-2xl shadow-md flex flex-col overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            key={`${card.label}-${index}`}
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={card.img}
                className="object-cover w-full h-full"
                alt={card.label}
              />
            </div>
            <h2 className="px-3 py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-sans font-bold flex items-center justify-center">
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
        className="hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
        onClick={() =>
          handleManualNavigation((currentIndex + 1) % UTILIZATIONS.length)
        }
      >
        <img
          src={marqueImg}
          alt="marqueLogo"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
        />
      </button>
    </div>
  );
}
