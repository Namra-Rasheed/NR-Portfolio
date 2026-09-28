"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python", "C++", "Dart", "Flutter", 
  "FastAPI", "MySQL", "Firebase", 
  "Selenium", "Azure DevOps"
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-600  text-lg leading-relaxed glass p-8 rounded-2xl"
          >
            <p>
              Computer Science graduate with a strong foundation in backend development, AI integrations, and software quality assurance. Currently pursuing a Master's degree to deepen my expertise in Data Science and Machine Learning.
            </p>
            <p>
              I build intelligent systems and break them to ensure they are bulletproof. My passion lies in finding the perfect balance between innovative AI features and robust, scalable software architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-800 ">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-white  border border-slate-200  shadow-sm text-slate-700  font-medium text-sm hover:border-teal-500 :border-teal-500 hover:shadow-teal-500/20 hover:shadow-lg transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
