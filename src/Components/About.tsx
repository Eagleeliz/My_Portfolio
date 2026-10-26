// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
   <section id="about" className="bg-white dark:bg-gray-900 py-0 px-7">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        About Me
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
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Elizabeth Wanjiku</span>, 
     a passionate and detail-oriented Software Engineer with a strong focus on full-stack web development. I specialize in building dynamic and responsive web applications that integrate both backend logic and modern 
     frontend design to deliver seamless user experiences.

        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm always open to new opportunities, collaborative projects, and connecting with like-minded professionals in the tech space. Let’s build something great together!
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
           <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
         Beyond coding, I enjoy spending time in nature, reading personal growth books, and listening to music. I also find joy in mentoring others and contributing to tech communities.
        </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm proficient in languages and tools such as:<br/>
        </p>
        <div className="flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MySql','Express','NextJs','Docker','DrizzleORM','Redux','Git','Github','CI/CD','AWS'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default About;