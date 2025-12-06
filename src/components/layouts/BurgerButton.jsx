import { motion, MotionConfig } from "framer-motion";
export default function BurgerButton({ isActive, setIsActive }) {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
      <motion.button
        className="relative h-8 w-8 rounded-full "
        onClick={() => setIsActive((pv) => !pv)}
        initial={false}
        animate={isActive ? "open" : "closed"}
      >
        <motion.span
          className="absolute w-4 h-[0.1rem]  bg-black"
          style={{
            left: "50%",
            top: "35%",
            translateX: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className=" absolute w-4 h-[0.1rem]  bg-black"
          style={{ left: "50%", top: "50%", translateX: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className=" absolute w-4 h-[0.1rem]  bg-black"
          style={{ left: "50%", top: "65%", translateX: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              top: ["65%", "50%", "50%"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
