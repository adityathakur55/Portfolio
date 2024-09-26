import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement className="" 
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        width: "60%",
        height: "550px",
        marginRight: "-175px", // Shift right
        marginLeft: "-175px",
      }}
      contentArrowStyle={{ borderRight: "40px solid  #232631" }}
      date={project.date} // Add a date field in the projects object if required
      iconStyle={{ background: "#232631" }}
      icon={
        <div onClick={() => window.open(project.source_code_link, "_blank")} // Ensure source_code_link is correctly passed
        className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer -ml-3 -mt-2'>
          <img
            src={project.icon || github} // Use a default icon or project-specific icon
            alt={project.name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className="">
        <h3 className='text-white text-[24px] font-bold'>{project.name}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {project.description}
        </p>
      </div>

      <div className='relative w-full h-[350px] mt-5 '>
        <img
          src={project.image} // Ensure the image path is correct in projects array
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          
        </div>
      </div>

      <div className='mt-4 flex flex-wrap gap-2 bg-'>
        {project.tags.map((tag, index) => (
          <span key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
