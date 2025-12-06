import React, { useState } from "react";
import FaqCards from "../cards/FaqCards";
import { AnimatePresence, useAnimation, motion } from "framer-motion";

export default function FaqsSection({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const controls = useAnimation();

  const transition = {
    type: "spring",
    damping: 10,
    stiffness: 250,
  };
  function handleShowAnswer() {
    setShowAnswer((pv) => !pv);
    if (showAnswer) {
      controls.start({
        rotate: "0deg",
        transition,
      });
    } else {
      controls.start({
        rotate: "180deg",
        transition,
      });
    }
  }
  return (
    <motion.div layout className="lg:px-4 py-[0.4rem]">
      <FaqCards onClick={handleShowAnswer} controls={controls}>
        <p className="text-sm lg:text-lg font-semibold ">{question}</p>
      </FaqCards>
      <div className="mt-3">
        <AnimatePresence>
          {showAnswer && <FaqCards>{answer}</FaqCards>}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
