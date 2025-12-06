import { motion } from "framer-motion";

export default function CenteredCard({ img, label, children, descImg }) {
  const divVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  const imgVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.55,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="relative font-sans border-2 border-blue-100 text-center  md:mx-5  lg:mx-14 h-full   bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl  flex flex-col items-center   gap-5   shadow-md"
      variants={divVariants}
      initial="hidden"
      whileHover={{ scale: 1.06 }}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* <motion.img
        src={img}
        className=" w-14 lg:w-16 object-contain "
        variants={imgVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      /> */}

      <motion.img
        src={descImg}
        className="  object-cover rounded-t-xl w-full  h-[60%]  "
        variants={imgVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      />
      <h1 className="font-semibold  md:text-lg ">{label}</h1>
      <p className=" text-xs md:text-sm text-black px-8">{children}</p>
    </motion.div>
  );
}
