import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

// Import your certificate files (images or PDFs)
import Cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.jpg";

const certifications = [
  {
    title: "SOFTWARE DEVELOPMENT",
    issuer: "TEACH2GIVE",
    date: "August 15,2025",
    file: Cert1,
    type: "image",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "CISCO",
    date: "August 12,2025",
    file: cert2,
    type: "image",
  },
];

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState<null | typeof certifications[0]>(null);

  return (
    <section id="certificates" className="bg-white dark:bg-gray-900 py-16 px-7">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Recognitions and credentials earned through learning and practice
          </p>
          {/* Animated divider line - REPLACE THIS LINE */}
<motion.div 
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
  className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full mt-4 origin-left"
/>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols- gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-indigo-600 dark:text-indigo-400" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
              </div>

              {/* Thumbnail */}
              {cert.type === "image" ? (
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg mb-4">
                  <p className="text-gray-600 dark:text-gray-300 italic">PDF Certificate</p>
                </div>
              )}

              {/* Details */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                <span className="font-medium">Issuer:</span> {cert.issuer}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                <span className="font-medium">Date:</span> {cert.date}
              </p>

              {/* Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-block bg-gradient-to-r from-indigo-500 to-teal-400 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <X size={20} className="text-gray-700 dark:text-gray-200" />
              </button>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {selectedCert.title}
                </h3>

                {selectedCert.type === "image" ? (
                  <img
                    src={selectedCert.file}
                    alt={selectedCert.title}
                    className="w-full max-h-[80vh] object-contain rounded-lg shadow-md mx-auto block"
                  />
                ) : (
                  <iframe
                    src={selectedCert.file}
                    title={selectedCert.title}
                    className="w-full h-[500px] rounded-lg"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certification;
