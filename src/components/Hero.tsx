"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const roles = ["Software Engineer", "AI & ML Enthusiast", "SQA Specialist"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && displayText === currentRole) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typeSpeed = 500;
      }

      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-500 text-glow">Namra Rasheed.</span>
              </h1>
              <div className="h-10 sm:h-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 ">
                  <span className="border-r-2 border-teal-500 pr-2 animate-pulse">{displayText}</span>
                </h2>
              </div>
              <p className="text-lg text-slate-500  max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Bridging theoretical machine learning with robust, scalable software solutions. I build intelligent systems and break them to ensure they are bulletproof. Currently ensuring software quality as a QA Intern at 7 Kings Code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href="#projects"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="/assets/Namra-Rasheed-Resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white border-2 border-teal-500 text-teal-600 font-semibold hover:bg-teal-50 transition-all transform hover:scale-105 hover:shadow-md hover:shadow-teal-500/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <a 
                href="https://github.com/Namra-Rasheed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-600 transition-all transform hover:scale-110 shadow-sm cursor-pointer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/namra-rasheed/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-600 transition-all transform hover:scale-110 shadow-sm cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-teal-500 to-sky-500 shadow-[0_0_40px_rgba(20,184,166,0.3)]">
              <div className="absolute inset-0 rounded-full bg-white  m-1" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white  z-10 bg-slate-100  flex items-center justify-center">
                {/* Fallback avatar if profile-pic.jpeg is missing */}
                <Image
                  src="/assets/profile-pic.jpg"
                  alt="Namra Rasheed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
