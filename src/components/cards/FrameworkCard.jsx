import closeImg from "../../assets/close.png";
import { motion } from "framer-motion";
import { useScreenSize } from "../../hooks/useScreenSize";

export default function FrameworkCard({ label, par, openCard, para }) {
  const { isMobile } = useScreenSize();

  const animationInitVal = isMobile ? { opacity: 0, y: 150 } : { opacity: 0 };
  const animationVal = isMobile ? { opacity: 1, y: 100 } : { opacity: 1, x: 0 };
  return (
    <motion.div
      initial={animationInitVal}
      animate={animationVal}
      exit={animationInitVal}
      transition={{
        duration: 0.6,
      }}
      className={`absolute w-[11rem]  h-[35%] lg:h-[12rem] lg:w-[16rem]    z-10   font-mono  `}
    >
      <div className="flex  bg-gradient-to-tr from-cyan-200 to-blue-800 rounded-t-xl  justify-between px-3 py-1">
        <h4 className=" py-3  md:px-1 md:py-4 text-xs md:text-sm">{label}</h4>
        <button
          className="   p-1   text-xs self-start mt-2"
          onClick={() => openCard(para)}
        >
          <img src={closeImg} alt="" className="size-3" />
        </button>
      </div>
      <div className="bg-[#fbfbfb] text-center lg:h-[15rem] lg:w-[16rem] pb-9 pt-7 px-4  border-2  rounded-b-xl  flex flex-col  text-xs md:text-sm shadow-xl shadow-[#bcbcbc] ">
        {par}
      </div>
    </motion.div>
  );
}
