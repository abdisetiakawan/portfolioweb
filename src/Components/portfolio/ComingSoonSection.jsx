import React from "react";
import { motion } from "framer-motion";
import { Rocket, Code, Database, Smartphone, Globe, Zap } from "lucide-react";

export default function ComingSoonSection() {
  const upcomingProjects = [
    {
      title: "AI-Powered Task Manager",
      description:
        "Smart productivity app with machine learning recommendations and automated scheduling",
      technologies: ["Go", "TensorFlow", "Vue.js", "PostgreSQL"],
      icon: Zap,
      color: "#FF6B6B",
      status: "In Planning",
      estimatedDate: "Q2 2025",
    },
    {
      title: "Microservices E-Learning Platform",
      description:
        "Scalable educational platform with video streaming, real-time chat, and progress tracking",
      technologies: ["Go", "Docker", "Kafka", "Redis", "WebRTC"],
      icon: Globe,
      color: "#FFB347",
      status: "Design Phase",
      estimatedDate: "Q3 2025",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Business intelligence platform with live data visualization and predictive analytics",
      technologies: ["Laravel", "Vue.js", "WebSockets", "ClickHouse"],
      icon: Database,
      color: "#4ECDC4",
      status: "Research Phase",
      estimatedDate: "Q4 2025",
    },
    {
      title: "Mobile-First PWA Framework",
      description:
        "Custom Progressive Web App framework optimized for mobile performance and offline capabilities",
      technologies: [
        "TypeScript",
        "Service Workers",
        "IndexedDB",
        "WebAssembly",
      ],
      icon: Smartphone,
      color: "#FF6B6B",
      status: "Concept",
      estimatedDate: "Q1 2026",
    },
  ];

  return (
    <div className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Coming <span className="text-[#FF6B6B]">Soon</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Exciting{" "}
            <span className="font-black text-[#FF6B6B]">upcoming projects</span>
            that showcase cutting-edge technologies and innovative solutions
          </p>
          <div className="w-20 sm:w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[20px] sm:rounded-[30px] border-2 sm:border-4 border-black p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-10"
                style={{ backgroundColor: project.color }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="flex items-start justify-between mb-4 sm:mb-6 relative z-10">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-black flex items-center justify-center"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div className="text-right">
                  <div
                    className="px-3 py-1 rounded-full border-2 border-black text-xs font-bold text-white mb-2"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.status}
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {project.estimatedDate}
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-black mb-3 sm:mb-4 leading-tight relative z-10">
                {project.title}
              </h3>

              <p className="text-base text-gray-700 font-medium leading-relaxed mb-6 relative z-10">
                {project.description}
              </p>

              <div className="relative z-10">
                <h4 className="text-base sm:text-lg font-black text-black mb-3">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-full text-xs sm:text-sm font-bold text-gray-700"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -bottom-2 -right-2 bg-[#FFB347] border-4 border-black rounded-full p-2 sm:p-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#F5F1EB] rounded-[20px] sm:rounded-[40px] border-2 sm:border-4 border-black p-6 sm:p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-black text-black text-center mb-6 sm:mb-8">
            Development <span className="text-[#FF6B6B]">Roadmap</span>
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-3 border-black flex-shrink-0"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ scale: 1.3 }}
                />
                <div className="flex-1">
                  <h4 className="font-black text-black text-sm sm:text-base">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {project.status} - {project.estimatedDate}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <motion.p
              className="text-base sm:text-lg font-medium text-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              Follow my journey as I build these{" "}
              <span className="font-black text-[#FF6B6B]">
                innovative solutions
              </span>
              using cutting-edge technologies
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#FF6B6B] text-white font-black rounded-full border-2 sm:border-4 border-black shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Stay Updated on Progress
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}