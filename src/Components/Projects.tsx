// src/components/Projects.tsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import hotelImg from "../assets/hotel.jpg"
import portfolioImg from "../assets/portfolio2.jpg"
import image from "../assets/image.png"
interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Hotel Room Booking System",
    imageUrl:hotelImg,
    description: "Built to automate and simplify hotel reservations by enabling users to check room availability, book online, and make secure payments, while providing hotel admins with tools to manage rooms, bookings, and payments—all in one platform.",
    tech: ["React", "TypeScript", "Express", "Node.js"],
    liveUrl: "https://hotel-room-booking-frontend.vercel.app/",
    githubUrl: "https://github.com/Eagleeliz/Hotel_Room_Booking-Backend",
  },
  {
    title: "Portfolio Website",
    imageUrl:portfolioImg,
    description: "A personal portfolio showcasing selected projects, technical skills,experiences,and design sensibility all presented in a clean dark mode layout.",
    tech: ["React", "Tailwind", "TypeScript"],
    liveUrl: "https://elizabethwanjiku.netlify.app/",
    githubUrl: "https://github.com/Eagleeliz",
  },
  {
   title: "Maternal Care System",
    imageUrl:image,
    description: " A web-based Maternal Care System that supports mothers and caregivers throughout pregnancy and early childhood. The system provides symptom tracking, trimester-specific guidance, AI-assisted support, emergency alerts, and child development monitoring. It also offers dashboards and predictive analytics to help healthcare providers and policymakers improve maternal and child health outcomes.",
    tech: ["React", "TypeScript", "Express", "Node.js"],
    liveUrl: "https://final-year-project-three-opal.vercel.app/",
    githubUrl: "https://github.com/Eagleeliz/Final-Year-Project",
  }

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header (Matches About/Experience) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Projects
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full origin-left"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/*IMAGE PROJECT */}
            <img
  src={project.imageUrl}
  alt={project.title}
  className="w-full max-h-[250px] object-contain rounded-lg mb-4"
/>

              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
            <div className="flex flex-wrap gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
  {project.liveUrl && (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white rounded-md shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition text-sm font-medium"
    >
      <ExternalLink size={16} /> Live Demo
    </motion.a>
  )}
  <motion.a
    whileHover={{ scale: 1.05 }}
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white dark:bg-gray-600 dark:text-white rounded-md shadow hover:bg-gray-800 dark:hover:bg-gray-700 transition text-sm font-medium"
  >
    <Github size={16} /> Source Code
  </motion.a>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;