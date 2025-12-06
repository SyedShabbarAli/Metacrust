import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import arrowImg from "../../assets/arrowHead.png";
export default function PlatformButtons({ to, color, label }) {
  return (
    <NavLink to={to}>
      <motion.button
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.07 }}
        className={`flex items-center justify-center gap-1 md:gap-3 border-[2px] lg:border-[3.5px] px-2 py-2  text-xs lg:text-xl font-semibold lg:px-14  lg:py-4  rounded-lg bg-${color}-200 border-${color}-400`}
      >
        <span>{label}</span>
        <motion.img
          src={arrowImg}
          alt=""
          className="object-contain size-2 md:size-4"
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </NavLink>
  );
}
