import { motion } from "framer-motion";
import triangleImg from "../../assets/triangle.png";
export default function FaqCards({ onClick, controls, children }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      initial={
        controls
          ? {
              opacity: 0,
            }
          : {
              opacity: 0,
              height: 0,
            }
      }
      animate={
        controls
          ? {
              opacity: 1,
              transition: {
                duration: 0.6,
              },
            }
          : {
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 1,
                  delay: 0.2,
                },
              },
            }
      }
      exit={
        !controls && {
          opacity: 0,
          height: 0,
          transition: {
            height: {
              duration: 0.5,
            },
            opacity: {
              duration: 0.3,
            },
          },
        }
      }
      whileHover={
        onClick && {
          scale: 1.02,
          transition: {
            duration: 0.2,
          },
        }
      }
    >
      <div
        className={`rounded-2xl border-2 border-blue-100 bg-gradient-to-bl from-white to-cyan-50 lg:w-[35rem]   ${
          onClick && " h-[6.5rem] lg:h-[5rem]"
        } flex justify-between items-center shadow-md ${
          onClick && "cursor-pointer"
        } `}
      >
        <div
          className={`text-xs lg:text-base px-4 py-3 md:px-9  md:py-5 ${
            !controls && "text-black"
          }  `}
        >
          {children}
        </div>
        {onClick && (
          <motion.img
            src={triangleImg}
            className="size-4 opacity-50  mr-10"
            animate={controls}
          />
        )}
      </div>
    </motion.div>
  );
}
