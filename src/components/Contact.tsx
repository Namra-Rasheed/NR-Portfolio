"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/nimrarasheed651432@gmail.com", {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-8" />
          <p className="text-lg text-slate-600  max-w-2xl mx-auto">
            Looking for a dedicated researcher and developer for your Master's program or lab? <br className="hidden sm:block" /> Let's connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass p-5 md:p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-slate-800 ">Contact Information</h3>
              <p className="text-slate-600  mb-6">
                Feel free to reach out directly via email or use the contact form. I try to respond within 24 hours.
              </p>
              
              <a 
                href="mailto:nimrarasheed651432@gmail.com" 
                className="flex items-center gap-4 text-slate-700 hover:text-teal-500 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="font-medium break-all">nimrarasheed651432@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass p-5 md:p-8 rounded-2xl"
          >
            {isSubmitted ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 size={64} className="text-teal-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 ">Message Sent!</h3>
                <p className="text-slate-600 ">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
                <input type="hidden" name="_template" value="box" />
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 ">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/50  border border-slate-200  focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-slate-900 "
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 ">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/50  border border-slate-200  focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-slate-900 "
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 ">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50  border border-slate-200  focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-slate-900  resize-none"
                    placeholder="How can we work together?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
