import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import emailJs from "@emailjs/browser";
import Notification from "./Notification";

export default function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const [showNot, setShowNot] = useState(false);

  const SERVICE_ID = "service_pmoks2m";

  const TEMPLATE_ID = "template_hptv24c";

  useEffect(() => {
    if (showNot) {
      setTimeout(() => {
        setShowNot(false);
      }, 2500);
    }
  }, [showNot]);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);

    setIsSending(true);
    emailJs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current).then(
      () => {
        setIsSending(false);
        setShowNot(true);
      },
      (error) => {
        setIsSending(false);
        setError(`Failed to send email: ${error}`);
      }
    );
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
        }}
        ref={form}
        onSubmit={sendEmail}
        className=" py-9 px-6 rounded-xl  border-2 bg-gradient-to-bl shadow-xl from-[#ebf6fe] to-[#ffffff]  text-xs lg:text-base  flex flex-col w-fit h-full self-end items-center justify-between gap-y-9 mx-auto lg:mr-10"
      >
        <h1 className="text-2xl md:text-4xl font-semibold  w-full text-center font-mono ">
          Let's Connect
        </h1>
        <div className="flex  flex-col md:flex-row gap-y-5 justify-between items-center">
          <p>
            <label className="mr-3" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-1/2 rounded-xl p-2 border-2 "
            />
          </p>
          <p>
            <label className="mr-3" htmlFor="email">
              Work Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-1/2 rounded-xl p-2 border-2"
            />
          </p>
        </div>

        <p className="flex w-full justify-center items-center">
          <label className="mr-3" htmlFor="company">
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            required
            className="w-1/2 rounded-xl p-2 border-2"
          />
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <p>
            <label className="mr-3" htmlFor="job">
              Job Title / Role
            </label>
            <input
              type="text"
              name="job"
              placeholder="Job / Role"
              required
              className="w-1/2 rounded-xl p-2 border-2"
            />
          </p>
          <p className="flex items-center">
            <label className="mr-3 " htmlFor="inquiry">
              inquiry type
            </label>

            <select name="inquiry" id="" className="rounded-xl p-2 border-2">
              <option value="Book Demo">Book Demo</option>
              <option value="Pilot Collaboration">Pilot Collaboration</option>
              <option value="Technical Question">Technical Question</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </p>
        </div>

        <p className="flex  items-center justify-center">
          <label className="mr-3" htmlFor="device">
            Device Type / Use Case
          </label>

          <textarea
            name="device"
            placeholder="e.g. , wearable patch, safety tracker"
            required
            className="rounded-xl p-1.5 border-2"
          />
        </p>

        <p className="flex  items-center justify-center">
          <label className="mr-3" htmlFor="date">
            Preferred Demo Time
          </label>

          <input
            name="date"
            type="datetime-local"
            placeholder="e.g. , wearable patch, safety tracker"
            className="rounded-xl p-2 border-2"
            required
            min={new Date().toISOString().slice(0, 16)}
          />
        </p>

        <p className="flex items-center justify-center">
          <label className="mr-3" htmlFor="message">
            Question / Message
          </label>

          <textarea
            name="message"
            placeholder="Message"
            required
            className="rounded-xl p-1.5 border-2"
          />
        </p>
        <p>
          <label className="mr-3" htmlFor="reputation">
            how did you hear about us?
          </label>
          <select name="reputation" id="" className="rounded-xl p-1.5 border-2">
            <option value="Website">Website</option>
            <option value="Friend">Friend</option>
            <option value="Ad">Ad</option>
            <option value="Other">Other</option>
          </select>
        </p>

        <div>
          <p>
            <input
              type="checkbox"
              name="news"
              className="mr-2"
              value="keep the customer updated on MetaCrust insights & news"
            />
            <label className="mr-3" htmlFor="news">
              keep me updated on MetaCrust insights & news
            </label>
          </p>

          <p>
            <input type="checkbox" name="contacts" className="mr-2 " />
            <label
              className="mr-3"
              htmlFor="contacts"
              value="keep the customer contacted by MetaCrust regarding their inquiry"
            >
              keep me contacted by MetaCrust regarding my inquiry
            </label>
          </p>
        </div>
        <button
          type="submit"
          className={` px-7 py-2 rounded-lg bg-cyan-200 border-cyan-300 border-2 ${
            isSending
              ? "bg-slate-300"
              : "hover:bg-red-200 transition-colors shadow-xl duration-300  hover:border-red-300"
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}

          {error && <p className="text-red-600">{error}</p>}
        </button>
      </motion.form>
      <AnimatePresence>
        {showNot && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="fixed top-28 xl:top-auto"
          >
            <Notification />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
