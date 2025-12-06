import ContactForm from "../components/layouts/ContactForm";
import { motion } from "framer-motion";

import { CONTACT_DATA } from "../data/contactData";
export default function Contact() {
  return (
    <div className=" relative w-full flex lg:pl-8 flex-col xl:flex-row  items-center xl:items-start  justify-center gap-y-20 gap-x-36 md:mt-10">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-10 md:mt-24 flex flex-col mx-5  "
      >
        <h1 className="text-xl lg:text-5xl font-semibold font-mono  md:text-3xl">
          Connect with MetaCrust
        </h1>
        {CONTACT_DATA}
      </motion.section>
      <ContactForm />
    </div>
  );
}
