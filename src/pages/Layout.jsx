import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/layouts/Header";
import ContactEmail from "../components/layouts/ContactEmail";
import Modal from "../components/layouts/Modal";
import NavWindow from "../components/layouts/NavWindow";
import Footer from "../components/layouts/Footer";
import maleImg from "../assets/male.png";
import femaleImg from "../assets/female.png";
import OwnerCard from "../components/cards/OwnerCard";
import automationImg from "../assets/automation.png";
import briefCaseImg from "../assets/briefcase.png";
import locationImg from "../assets/location.png";
import CookieBanner from "../components/layouts/CookieBanner";
import Cookie from "js-cookie";
import ReactGA from "react-ga4";

import WaveBackground from "../components/layouts/WaveyBackground";

const PROPERTY_ID = "G-7L212BX3X2";

export default function Layout() {
  const [openWindow, setOpenWindow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const location = useLocation();
  const consentCookie = Cookie.get("userConsent");

  useEffect(() => {
    if (consentCookie) {
      if (!ReactGA.isInitialized) {
        ReactGA.initialize(PROPERTY_ID, {
          gaOptions: {
            anonymizeIp: true,
          },
        });
      }
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname,
        title: "metaCrust",
      });
    }
  }, [location, consentCookie, ReactGA.isInitialized]);

  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (!isMobile && openWindow) {
      setOpenWindow(false);
    }
  }, [isMobile, openWindow]);

  useEffect(() => {
    setOpenWindow(false);
  }, [location]);

  useEffect(() => {
    if (!openModal && showLocation) {
      setShowLocation(false);
    }
  }, [openModal]);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [openModal]);

  function handleModalOpen() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <WaveBackground />
      <Header
        setOpenWindow={setOpenWindow}
        isOpen={openWindow}
        isMobile={isMobile}
        openModal={handleModalOpen}
      />
      <AnimatePresence>{openWindow && <NavWindow />}</AnimatePresence>
      <div className="pb-10 md:pb-24 pt-24 z-0">
        <Outlet />
      </div>
      <Footer />
      <AnimatePresence>
        {openModal && (
          <Modal>
            <h2 className=" text-xl md:text-3xl lg:text-5xl  font-semibold mt-6  md:mt-9 lg:ml-7  text-center lg:text-start   ">
              Contact us
            </h2>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="flex items-center justify-evenly my-7"
            >
              <motion.div variants={childVariants}>
                <OwnerCard
                  img={femaleImg}
                  name={"Sidra Anwar"}
                  position={"Chief Technology Officer"}
                  alias={"( CTO )"}
                />
              </motion.div>
              <motion.div variants={childVariants}>
                <OwnerCard
                  img={maleImg}
                  name={"Abdul Wahab"}
                  position={"Chief Business Development Officer"}
                  alias={"( CBDO )"}
                />
              </motion.div>
            </motion.div>
            <div>
              <div className="mt-8 flex flex-col items-center">
                <h2 className=" text-center text-lg md:text-2xl font-semibold">
                  Get in touch with us
                </h2>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={childVariants}>
                    <ContactEmail
                      email={"sidra@metacrust.ca"}
                      description={"Technical inquiries"}
                      img={automationImg}
                    />
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <ContactEmail
                      email={"abdul.wahab@metacrust.ca"}
                      description={"Business inquiries"}
                      img={briefCaseImg}
                      isMale={true}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-between md:mr-14 mt-5  gap-x-5">
              <button
                className={` hover:bg-cyan-400/90 hover:animate-pulse hover:scale-105 rounded-full py-2 px-6  md:mx-10  transition-all duration-300`}
                onClick={() => setShowLocation((pv) => !pv)}
              >
                Location
              </button>
              <AnimatePresence>
                {showLocation && (
                  <motion.div
                    className="absolute z-30 bg-gray-200 bottom-[100%]  left-[10%] md:  lg:bottom-12  md:left-32 h-[6rem] w-[14rem] md:h-[10rem] md:w-[20rem] rounded-3xl p-5 lg:p-7"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <img
                      src={locationImg}
                      className="absolute opacity-10 right-5 size-16 lg:size-24 bottom-5"
                    />
                    <motion.div
                      className="flex flex-col justify-center items-start gap-y-1 lg:gap-y-3 text-xs md:text-base  font-semibold "
                      variants={cardVariants}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <motion.span variants={childVariants}>
                        Headquarters: St, John’s,
                      </motion.span>
                      <motion.span variants={childVariants}>
                        Newfoundland & Labrador, Canada
                      </motion.span>
                      <motion.span variants={childVariants}>
                        Address: 100 Signal Hill, St John’s
                      </motion.span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                className="md:px-5 py-2 px-5 text-sm hover:bg-red-500/90 transition-all hover:scale-105 duration-500  hover:animate-pulse rounded-full hover:text-white"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <CookieBanner />
    </>
  );
}
