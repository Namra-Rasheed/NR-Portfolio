"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";
import certFiles from "@/certificates.json";

// Duplicate the array for a seamless infinite loop
const carouselItems = [...certFiles, ...certFiles];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-100  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100  flex items-center justify-center mb-6 text-teal-600 ">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800  mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-slate-500  font-medium mb-4">Riphah International University</p>
            <p className="text-sm text-slate-600  mt-auto">
              Merit Achievement Scholar <br/>
              <span className="font-semibold text-teal-600 ">CGPA: 3.70 - 3.90</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border-2 border-sky-500/20"
          >
            <div className="w-16 h-16 rounded-full bg-sky-100  flex items-center justify-center mb-6 text-sky-600 ">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800  mb-2">Full Stack Android Developer</h3>
            <p className="text-slate-500  font-medium mb-4">PNY Trainings</p>
            <p className="text-sm text-slate-600  mt-auto">
              Comprehensive training in Android development, covering UI/UX, backend integration, and deployment.
            </p>
          </motion.div>
        </div>

        {/* Coursera Certificates Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100  flex items-center justify-center text-teal-600 ">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 ">Coursera Certifications</h3>
                <p className="text-slate-500 ">40+ Specialized courses in ML, Python & Blockchain</p>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden flex -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8 animate-marquee">
              {carouselItems.map((cert, index) => (
                <a 
                  key={`${cert}-${index}`}
                  href={`/assets/coursera-certificates/${cert}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-80 sm:w-96 glass p-4 rounded-3xl flex flex-col group hover:border-teal-500/50 hover:shadow-teal-500/20 transition-all h-[420px] cursor-pointer"
                >
                  <div className="w-full flex-1 relative rounded-2xl overflow-hidden bg-slate-200  mb-6">
                    <Image
                      src={`/assets/coursera-certificates/${cert.replace(".pdf", ".jpg")}`}
                      alt={cert.replace(".pdf", "")}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />
                  </div>
                  <div className="px-2 text-center pb-2">
                    <h4 className="font-semibold text-slate-800  text-base line-clamp-2 mb-3">
                      {cert.replace(".pdf", "")}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-sm text-teal-600  font-medium group-hover:text-teal-700 transition-colors">
                      View Certificate <ExternalLink size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Fade edges for infinite scroll look */}
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-slate-100 [#211512] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-slate-100 [#211512] to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
