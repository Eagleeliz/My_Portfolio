
import { TypeAnimation } from 'react-type-animation';
import myPhoto from "../assets/2.png";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
           {/*  Profile Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-2/5 flex justify-center"
                  >
                    <div className="relative group">
                      <img
                        src={myPhoto}
                        alt="Elizabeth Wanjiku"
                        className="w-90 h-90 object-cover rounded-full shadow-lg border-4 border-indigo-500/20 dark:border-indigo-400/30 transition-all duration-500 group-hover:border-indigo-500 dark:group-hover:border-indigo-400"
                      />
                    </div>
                  </motion.div>
                {/*Text Contentt*/}  
                 <div className="text-center lg:text-left w-full lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hey there... <br/>I'm <span className=" text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Elizabeth Wanjiku</span>
        </h1>
        
        <TypeAnimation 
          sequence={['Full-Stack Developer', 2000, 'UI/UX Specialist', 2000,'Software Developer', 2000]}
          wrapper="span"
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 block min-h-[1.75rem] mb-8"
          repeat={Infinity}
        />
        
        <a 
          href="/resume.pdf" 
          download
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
           onClick={(e) => {
    e.preventDefault(); 
  }}
        >
          Download Resume
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;