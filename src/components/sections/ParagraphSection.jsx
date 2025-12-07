import { motion } from "framer-motion";

export default function ParagraphSection({ label, children, img }) {
  const divVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className={`p-3 sm:p-4 md:p-5 lg:p-6 border-2 border-blue-100 py-5 sm:py-6 md:py-8 lg:py-10 bg-gradient-to-bl ${
        img ? "items-center text-center " : "justify-center"
      } from-cyan-50 to-white rounded-xl md:rounded-2xl text-center lg:text-start shadow-md flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5`}
      variants={divVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: "some",
      }}
    >
      {img && <img src={img} className="object-contain w-10 sm:w-12 md:w-14" />}
      {label && (
        <h2
          className={`text-lg sm:text-xl text-center font-sans font-bold min-h-[1rem] md:min-h-[3rem] ${
            img ? "my-1.5 md:text-xl lg:text-2xl" : "md:text-2xl lg:text-3xl"
          }`}
        >
          {label}
        </h2>
      )}
      <p
        className={`font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black/70 leading-relaxed mt-3 sm:mt-4 md:mt-0 ${
          img && "text-center"
        }`}
      >
        {children}
      </p>
    </motion.div>
  );
}
