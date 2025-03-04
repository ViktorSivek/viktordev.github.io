'use client'

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeIn } from "@/lib/motion";
import { workExperience } from "@/data";

const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={`bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full ${experience.className}`}
    >
      <div className="relative w-full h-[230px]">
        <img
          src={experience.thumbnail}
          alt={experience.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{experience.desc}</p>
      </div>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <>
      <SectionTitle 
        title="Work Experience" 
        subtitle="What I have done so far" 
      />
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-7">
        {workExperience.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Experiences;
