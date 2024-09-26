import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants"; // Using experiences data
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ index, title, company_name, points, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={icon}
            alt='experience_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[16px]'>{company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} index={index} {...experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
