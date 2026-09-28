"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Hifz Quran Assistant",
    description: "AI-powered mobile app built with Flutter and Python. Utilized real-time voice recognition and NLP for automated recitation error detection.",
    image: "/assets/project-hifz.jpg",
    tags: ["Flutter", "Python", "AI", "NLP"],
  },
  {
    title: "Food Delivery App",
    description: "Built with Flutter, Dart, and Firebase. Features real-time tracking and secure payments.",
    image: "/assets/project-food.jpg",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Tour Management System",
    description: "Full-stack web platform for itinerary and booking management. Features a complete admin dashboard and seamless user experience.",
    image: "/assets/project-tour.jpg",
    tags: ["HTML", "CSS", "JS", "SQL"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass border-transparent hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-200 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-slate-800  mb-2">{project.title}</h3>
                <p className="text-slate-600  text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100  text-slate-600 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
