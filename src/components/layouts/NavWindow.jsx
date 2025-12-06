import Navigation from "./Navigation";
import HomeImg from "../../assets/home.png";
import aboutUsImg from "../../assets/about-us.png";
import faqsImg from "../../assets/faqs.png";
import servicesImg from "../../assets/services.png";
import mailIcImg from "../../assets/mailIc.png";
import platformImg from "../../assets/platform.png";

import { motion } from "framer-motion";

export default function NavWindow() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        opacity: 0,
        y: -35,
      }}
      className=" fixed bg-white top-[5rem] z-20 w-screen flex flex-col items-center gap-8 py-5 shadow-md  rounded-b-lg rounded-t-sm "
    >
      <Navigation
        label="Home"
        isWindowItem={true}
        destination="/"
        img={HomeImg}
      />
      <Navigation
        label="About Us"
        isWindowItem={true}
        destination="about"
        img={aboutUsImg}
      />
      <Navigation
        label="Applications"
        isWindowItem={true}
        destination="applications"
        img={servicesImg}
      />
      <Navigation
        label="Platform"
        isWindowItem={true}
        destination="platform"
        img={platformImg}
      />
      <Navigation
        label="Connect"
        isWindowItem={true}
        destination="connect"
        img={mailIcImg}
      />
      <Navigation label="FAQs" destination="faqs" img={faqsImg} />
    </motion.nav>
  );
}
