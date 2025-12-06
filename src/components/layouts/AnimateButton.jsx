import { useTime, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AnimateButton() {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const navigate = useNavigate();
  //#1b91ff,#656565,#ff1212
  const rotateBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #333333,#cdcdcd)`;
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.9 }}
      className="w-full flex justify-center lg:justify-start "
    >
      <div className="relative flex flex-col items-center justify-center w-fit text-neutral-100">
        <button
          onClick={() => navigate("/connect")}
          className="relative bg-gradient-to-br from-[#182e41] to-[#25b3ff] px-8 py-4 lg:px-14 lg:py-5 rounded-xl transition-all duration-300 text-base md:text-lg lg:text-xl font-bold z-10 hover:scale-105 hover:shadow-2xl"
        >
          Request a Demo
        </button>
        <motion.div
          className="absolute -inset-[0.2rem] lg:-inset-[0.3rem] rounded-xl shadow-lg shadow-[#999999]"
          style={{
            background: rotateBg,
          }}
        />
      </div>
    </motion.div>
  );
}
