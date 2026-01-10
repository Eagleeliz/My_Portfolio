// src/components/Contact.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 
import Swal from "sweetalert2"; // 
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false); //  Added loading state

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true); // Disable the button and show "Sending..."

    try {
      await emailjs.sendForm(
        "service_1fe74p7",
        "template_li66k6e",
        form.current,
        "3cojSBbQUTk9Pae77"
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for reaching out. I'll get back to you soon.",
        confirmButtonColor: "#6366F1",
      });

      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false); // ✅ Re-enable the button
    }
  };

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Me
        </h2>
        
        <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full origin-left"
          />
          <br></br>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
          Got a question, idea, or just want to say hi? I'd love to hear from you!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading} //  Button disabled when sending
            className={`px-6 py-3 rounded-md transition text-white ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"} {/*  Text changes */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
