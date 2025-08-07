// src/components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  organization: string;
  dateRange: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Internal Attachment",
    organization: "Laikipia University",
    dateRange: "May 2024 – July 2024",
    description: "Gained practical exposure to Huawei network systems, Linux operations, computer networking, and API integration, strengthening my foundational skills in IT and software development.",
  },
  {
    title: "Software Development Attachment",
    organization: "Teach2Give",
    dateRange: "May 2024 – Present",
    description: "Part of a dynamic team developing modern web applications using React, TypeScript, and Tailwind CSS. Contributed to UI design, code maintenance, and project collaboration.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Matching Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Experience
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full origin-left"
          />
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {exp.title}
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-medium mb-1">
                {exp.organization}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.dateRange}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills*/}
             {/* Skills */}
{(index === 0 || index === 1) && (
  <div className="mt-6 flex flex-wrap gap-2">
    {(index === 0
      ? [ 'Huawei','Linux','Networking','API',] 
      : ['React', 'TypeScript', 'Tailwind CSS','Node.js', 'Express',] 
    ).map((skill) => (
      <span
        key={skill}
        className="px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
      >
        {skill}
      </span>
    ))}
  </div>
)}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;