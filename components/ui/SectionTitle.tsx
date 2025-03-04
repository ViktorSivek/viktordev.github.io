'use client'

import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div variants={textVariant()}>
      <h2 className="font-roboto-mono font-bold text-[40px] md:text-[50px] lg:text-[60px] 2k:text-[70px] 4k:text-[80px] text-center mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-roboto-mono text-[18px] md:text-[20px] lg:text-[22px] 2k:text-[24px] 4k:text-[26px] text-center text-gray-400 mb-10">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
