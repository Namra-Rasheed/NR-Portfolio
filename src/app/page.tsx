import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-teal-500/30 selection:text-teal-900 :text-teal-100">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-8 text-center text-slate-500  text-sm border-t border-slate-200 ">
        <p>© {new Date().getFullYear()} Namra Rasheed. All rights reserved.</p>
      </footer>
    </main>
  );
}
