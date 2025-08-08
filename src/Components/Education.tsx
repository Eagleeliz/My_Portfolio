// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import teach2giveImg from "../assets/TEACH2GIVE.jpg"
import laikipiaImg from "../assets/LU_Logo.gif"

const Education: React.FC = () => {
  return (
   <section id="about" className="bg-white dark:bg-gray-900 py-19 px-7">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
       Education
      </h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full origin-left"
      />
    </motion.div>

    {/* Two Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Card 1 */}
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
         {/*IMAGE PROJECT */}
      <img
  src={laikipiaImg}
  alt="Laikipia Univ logo"
  className="w-full max-h-[200px] object-cover rounded-lg mb-6"
/>


        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">LAIKIPIA UNIVERSITY</h3>
        <div className="flex flex-wrap gap-3">
           <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        Currently a fourth year student at Laikipia University, pursuing a Bachelors of Science in Computer Science
        </p>
        
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
          {/*IMAGE PROJECT */}
       <img
  src={teach2giveImg}
  alt="TEACH2GIVE logo"
  className="w-full max-h-[200px] object-cover rounded-lg mb-6"
/>

        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">TEACH2GIVE</h3>
        <div className="flex flex-wrap gap-3">
           <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
           Completed a 3 month Software Development Attachment gaining hands-on experience in full-stack software development while collaborating in a professional development environment.
        </p>
        
        </div>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Education;