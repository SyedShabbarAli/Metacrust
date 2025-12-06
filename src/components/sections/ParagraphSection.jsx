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
      className={`p-2 border-2 border-blue-100 md:p-5 py-6 md:py-10 bg-gradient-to-bl ${
        img ? "items-center text-center " : "justify-center"
      } from-cyan-50 to-white rounded-2xl text-center lg:text-start shadow-md flex flex-col  gap-y-5`}
      variants={divVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: "some",
      }}
    >
      {img && <img src={img} className="object-contain w-12" />}
      {label && (
        <h2
          className={`text-xl text-center   font-sans font-bold h-3 md:h-12   ${
            img ? " my-1.5 md:text-xl" : "md:text-3xl"
          } `}
        >
          {label}
        </h2>
      )}
      <p
        className={`font-sans  text-sm mt-5 md:mt-0 md:text-lg lg:text-xl text-black/70 leading-relaxed ${
          img && "text-center"
        } }`}
      >
        {children}
      </p>
    </motion.div>
  );
}
