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
    title: "ICT Attaché",
    organization: "Kenya Medical Training College (KMTC) Headquarters",
    dateRange: "May 2026 – July 2026",
    description:
      "Developed the ICT Inventory Management System as lead Frontend Developer. Maintained, troubleshot and repaired computer hardware across the institution, providing hands-on ICT support. Worked with ICT staff in a team environment, applying classroom knowledge to live operations.",
  },
  {
    title: "Internal Attachment",
    organization: "Laikipia University",
    dateRange: "May 2024 – July 2024",
    description:
      "Gained practical exposure to Huawei network systems, Linux operations, computer networking, and API integration, strengthening my foundational skills in IT and software development.",
  },
  {
    title: "Software Development Attachment",
    organization: "Teach2Give",
    dateRange: "May 2024 – Present",
    description:
      "Part of a dynamic team developing modern web applications using React, TypeScript, and Tailwind CSS. Contributed to UI design, code maintenance, and project collaboration.",
  },
];

const Experience: React.FC = () => {
  // Skills keyed by organization so the mapping stays correct
  // even if you reorder or add more experiences later.
  const skillsByOrg: Record<string, string[]> = {
    "Kenya Medical Training College (KMTC) Headquarters": [
      "Frontend Development",
      "ICT Support",
      "Hardware Repair",
      "Inventory Systems",
    ],
    "Laikipia University": ["Huawei", "Linux", "Networking", "API"],
    "Teach2Give": ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
  };

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
          {experiences.map((exp, index) => {
            const skills = skillsByOrg[exp.organization];
            return (
              <motion.div
                key={exp.organization + exp.dateRange}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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

                {/* Skills */}
                {skills && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;