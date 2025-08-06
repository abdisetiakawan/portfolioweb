import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import HeroSection from "../Components/portfolio/HeroSection";
import AboutSection from "../Components/portfolio/AboutSection";
import ProcessSection from "../Components/portfolio/ProcessSection";
import SkillsSection from "../Components/portfolio/SkillsSection";
import ProjectsSection from "../Components/portfolio/ProjectsSection";
import ExperienceSection from "../Components/portfolio/ExperienceSection";
import CertificationsSection from "../Components/portfolio/CertificationsSection";
import ComingSoonSection from "../Components/portfolio/ComingSoonSection";
import ContactSection from "../Components/portfolio/ContactSection";
import FloatingElements from "../Components/portfolio/FloatingElements";
import ScrollToTopButton from "../Components/portfolio/ScrollToTopButton";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const [pageKey, setPageKey] = useState(0);

  const handleAnimationReset = () => {
    setPageKey((prevKey) => prevKey + 1);
    setActiveSection("hero");
    setIsScrolling(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = [
        "hero",
        "about",
        "process",
        "skills",
        "projects",
        "experience",
        "certifications",
        "coming-soon",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const navigationItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certificates" },
    { id: "coming-soon", label: "Coming Soon" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId, event) => {
    event.preventDefault();

    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setIsScrolling(true);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB] overflow-x-hidden relative">
      <FloatingElements />

      <ScrollToTopButton onReset={handleAnimationReset} />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4"
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto bg-[#F5F1EB]/80 backdrop-blur-md rounded-full border-4 border-black p-1 sm:p-2 shadow-lg">
          <div className="flex justify-between items-center px-2 sm:px-4">
            <motion.div
              className="px-3 sm:px-4 py-1 bg-[#FF6B6B] rounded-full border-3 border-black"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg sm:text-xl font-black text-white">
                FS
              </span>
            </motion.div>

            <div className="hidden md:flex space-x-2 relative">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`relative px-3 sm:px-4 py-2 font-bold transition-colors rounded-full text-sm sm:text-base ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-black hover:text-[#FF6B6B]"
                  }`}
                >
                  {item.id === activeSection && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-[#FF6B6B] rounded-full z-0"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </div>

            <motion.button
              className="md:hidden px-2 sm:px-3 py-2 bg-white rounded-full border-3 border-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-2 sm:mt-4 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[30px] border-4 border-black shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 sm:p-6">
                <div className="space-y-1 sm:space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(item.id, e)}
                      className={`block px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold transition-all text-sm sm:text-base ${
                        activeSection === item.id
                          ? "bg-[#FF6B6B] text-white border-3 border-black"
                          : "bg-gray-100 text-black hover:bg-[#FFB347] hover:text-white border-2 border-gray-300"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main key={pageKey}>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="process">
          <ProcessSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="certifications">
          <CertificationsSection />
        </section>

        <section id="coming-soon">
          <ComingSoonSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
