import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  Shield,
  Code,
  Cloud,
  Database,
} from "lucide-react";

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const certifications = [
    {
      title: "Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      category: "cloud",
      date: "2024",
      icon: Cloud,
      color: "#4ECDC4",
      status: "Active",
      description:
        "Comprehensive cloud computing fundamentals and GCP services",
    },
    {
      title: "Cloud Engineer Learning Path",
      issuer: "Google Cloud",
      category: "cloud",
      date: "2024",
      icon: Cloud,
      color: "#4ECDC4",
      status: "Active",
      description: "Advanced cloud engineering and infrastructure management",
    },
    {
      title: "DevOps Engineer & SRE Learning Path",
      issuer: "Google Cloud",
      category: "cloud",
      date: "2024",
      icon: Shield,
      color: "#4ECDC4",
      status: "Active",
      description: "DevOps practices and Site Reliability Engineering",
    },
    {
      title: "Cloud Practitioner Essentials (AWS)",
      issuer: "Dicoding Indonesia",
      category: "cloud",
      date: "Valid until Dec 2027",
      icon: Cloud,
      color: "#FFB347",
      status: "Valid",
      description: "AWS cloud fundamentals and core services",
    },
    {
      title: "Machine Learning with Google Cloud",
      issuer: "Dicoding Indonesia",
      category: "ai",
      date: "Valid until Nov 2027",
      icon: Database,
      color: "#FF6B6B",
      status: "Valid",
      description: "Machine learning implementation on Google Cloud Platform",
    },
    {
      title: "Google Cloud Engineer",
      issuer: "Dicoding Indonesia",
      category: "cloud",
      date: "Valid until Nov 2027",
      icon: Cloud,
      color: "#4ECDC4",
      status: "Valid",
      description: "Professional cloud engineering certification",
    },
    {
      title: "Back-End Development with JavaScript",
      issuer: "Dicoding Indonesia",
      category: "backend",
      date: "Valid until Sep 2027",
      icon: Code,
      color: "#FF6B6B",
      status: "Valid",
      description: "Advanced backend development with Node.js and JavaScript",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Dicoding Indonesia",
      category: "frontend",
      date: "Valid until Sep 2027",
      icon: Code,
      color: "#FFB347",
      status: "Valid",
      description: "Complete web development foundations and best practices",
    },
    {
      title: "Golang Programming: Beginner to Expert",
      issuer: "Udemy",
      category: "backend",
      date: "Mar 2025",
      icon: Code,
      color: "#FF6B6B",
      status: "Completed",
      description: "Comprehensive Go programming language mastery",
    },
    {
      title: "JavaScript (Basic) Certificate",
      issuer: "HackerRank",
      category: "frontend",
      date: "Apr 2024",
      icon: Code,
      color: "#FFB347",
      status: "Certified",
      description: "JavaScript programming fundamentals and problem solving",
    },
  ];

  const categories = [
    { key: "all", label: "All Certifications", icon: Award, color: "#FF6B6B" },
    { key: "cloud", label: "Cloud & DevOps", icon: Cloud, color: "#4ECDC4" },
    {
      key: "backend",
      label: "Backend Development",
      icon: Code,
      color: "#FF6B6B",
    },
    {
      key: "frontend",
      label: "Frontend Development",
      icon: Code,
      color: "#FFB347",
    },
    {
      key: "ai",
      label: "AI & Machine Learning",
      icon: Database,
      color: "#FF6B6B",
    },
  ];

  const filteredCertifications =
    activeCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <div className="py-16 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-black text-black mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Certifications &{" "}
            <span className="text-[#FF6B6B]">Achievements</span>
          </motion.h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Continuous learning through{" "}
            <span className="font-black text-[#FF6B6B]">
              industry certifications
            </span>
            and professional development programs
          </p>
          <div className="w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border-3 border-black font-black transition-all ${
                activeCategory === category.key
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-black hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category.key ? category.color : "white",
              }}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              className="bg-white rounded-[30px] border-4 border-black p-6 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center"
                  style={{ backgroundColor: cert.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div
                  className="px-3 py-1 rounded-full border-2 border-black text-xs font-bold text-white"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.status}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-black mb-2 leading-tight">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <p className="font-bold text-gray-800">{cert.issuer}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{cert.date}</span>
              </div>

              <p className="text-gray-700 font-medium text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Action Button */}
              <motion.button
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 border-3 border-black rounded-2xl font-bold text-gray-800 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Award,
              number: "15+",
              label: "Certifications",
              color: "#FF6B6B",
            },
            {
              icon: Cloud,
              number: "7+",
              label: "Cloud Certifications",
              color: "#4ECDC4",
            },
            {
              icon: Code,
              number: "5+",
              label: "Programming Certs",
              color: "#FFB347",
            },
            {
              icon: Shield,
              number: "3+",
              label: "Active Until 2027",
              color: "#FF6B6B",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl border-3 border-black p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-full border-3 border-black flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-black text-black mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-bold text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
