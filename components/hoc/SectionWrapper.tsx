'use client'

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0 px-6 py-10 md:py-16"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  }
  
  return HOC;
};

export default SectionWrapper;
