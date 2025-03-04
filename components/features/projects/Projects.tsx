'use client'

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeIn } from "@/lib/motion";
import { projects } from "@/data";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{project.des}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.iconLists.map((icon: string, iconIndex: number) => (
            <img 
              key={`tech-${iconIndex}`}
              src={icon}
              alt="technology"
              className="w-10 h-10"
            />
          ))}
        </div>
        
        <div className="mt-4">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <SectionTitle 
        title="Projects" 
        subtitle="My work" 
      />
      
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
