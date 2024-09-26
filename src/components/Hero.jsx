import { motion } from "framer-motion";
import {Tilt} from "react-tilt"; // Import Tilt for the movement effect
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import photo from "../assets/photo.jpeg";
import { fadeIn } from "../utils/motion"; // Make sure fadeIn is correctly imported


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      
      <div
        className={`absolute inset-0 top-[120px]  mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
         <Tilt className="xs:w-[250px] w-full">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)} // Apply animation
            className="w-full  p-[1px] rounded-full"
          >
            <div
              className="rounded-[20px] pb-[60px] px-3 h-[480px] w-[400px]  flex justify-evenly items-center flex-col  border-tertiary border-[1px]  overflow-hidden gap-3  ml-20"
              
            >
              {/* Use your custom image */}
              <img
                src={photo}
                alt="Your Photo"
                className="w-[430px] h-[400px] rounded-full  object-cover mt-16"
              />
              
            </div>
          </motion.div>
        </Tilt>
    
        <div className=" ml-[16vw]  w-full p-8 ">
          <h1 className=" font-black text-white  sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
            Hi, I'm  <span className='text-gray-500'>Aditya </span> Thakur, 
          </h1>
          <h1 className=" font-black text-white sm:text-[50px] xs:text-[50px] text-[40px] -mt-5 ">
            Full Stack <span className="text-gray-500">Web Developer</span> 
          </h1>
          <p className="text-white font-mono xs:text-[20px] text-[16px] lg:leading-[40px] mt-6">
          "I'm a 20-year-old developer, building scalable backend systems, full-stack solutions, and 3D visuals/UI designs that lead projects and drive innovation."
          </p>
          <button className="rounded-lg bg-gray-500 text-gray-300 py-2 px-5 mt-6 hover:scale-50 ">
            <a className="font-mono text-xl" href="https://www.linkedin.com/in/aditya555">My LinkedIn</a>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 mr-24 '>
          <div className='w-5 h-5 rounded-full bg-gray-600' />
          <div className='w-1 sm:h-80 h-40 bg-gray-600' />
        </div>

        
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[42px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;