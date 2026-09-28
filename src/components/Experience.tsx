"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "QA Intern",
    company: "7 Kings Code",
    date: "02/2026 - Present",
    description: "Performing manual, API (Postman), and automated (Selenium) testing for web apps. Tracking bugs via Jira/Azure DevOps. Projects: cws.com, aisalesagent.com, 5thelement.com.",
  },
  {
    role: "Junior Python Developer",
    company: "ExpertSquares",
    date: "Feb 2025 - Dec 2025",
    description: "Developed FastAPI backends and evaluated Large Language Models (LLMs) to refine AI chatbot context and accuracy.",
  },
  {
    role: "SQA Intern",
    company: "SAIGMA Strategic Systems",
    date: "08/2025 - 12/2025",
    description: "Executed regression, exploratory, and usability testing for e-commerce and mobile banking apps. Tracked bugs via Jira/Trello.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-100  relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-slate-200  ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              <div className={`absolute top-6 w-12 h-12 rounded-full bg-white border-4 border-teal-500 flex items-center justify-center z-10 shadow-lg -left-[25px] ${
                index % 2 === 0 
                  ? "md:-right-[25px] md:left-auto md:top-1/2 md:-translate-y-1/2" 
                  : "md:-left-[25px] md:top-1/2 md:-translate-y-1/2"
              }`}>
                <Briefcase size={20} className="text-teal-500" />
              </div>
              
              <div className="glass p-6 rounded-2xl ml-8 md:ml-0 w-full hover:border-teal-500/50 transition-colors">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-600 text-sm font-semibold rounded-full mb-3">
                  {exp.date}
                </span>
                <h3 className="text-xl font-bold text-slate-800 ">{exp.role}</h3>
                <h4 className="text-lg font-medium text-slate-600  mb-4">{exp.company}</h4>
                <p className="text-slate-600  leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
