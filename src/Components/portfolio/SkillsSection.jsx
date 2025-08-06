import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  Cpu,
  Server,
} from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("backend");

  const skillCategories = {
    backend: {
      title: "Backend Expertise",
      icon: Server,
      color: "#FF6B6B",
      skills: [
        {
          name: "Go (Golang)",
          level: 90,
          description: "High-performance APIs and microservices",
        },
        {
          name: "Laravel (PHP)",
          level: 95,
          description: "Robust web applications and APIs",
        },
        {
          name: "Node.js/Express",
          level: 85,
          description: "Scalable server-side applications",
        },
        {
          name: "REST API Design",
          level: 95,
          description: "RESTful architecture and best practices",
        },
        {
          name: "Microservices",
          level: 80,
          description: "Distributed system architecture",
        },
        {
          name: "Clean Architecture",
          level: 90,
          description: "Maintainable and testable code",
        },
      ],
    },
    frontend: {
      title: "Frontend Development",
      icon: Globe,
      color: "#FFB347",
      skills: [
        {
          name: "Vue.js 3",
          level: 85,
          description: "Modern reactive user interfaces",
        },
        {
          name: "JavaScript/TypeScript",
          level: 90,
          description: "Type-safe web applications",
        },
        {
          name: "Inertia.js",
          level: 80,
          description: "Modern monolith architecture",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Utility-first styling framework",
        },
        {
          name: "ShadCN UI",
          level: 85,
          description: "Beautiful component libraries",
        },
        {
          name: "Responsive Design",
          level: 90,
          description: "Mobile-first development",
        },
      ],
    },
    database: {
      title: "Database & Storage",
      icon: Database,
      color: "#4ECDC4",
      skills: [
        {
          name: "MySQL",
          level: 90,
          description: "Relational database optimization",
        },
        {
          name: "PostgreSQL",
          level: 85,
          description: "Advanced SQL and performance tuning",
        },
        {
          name: "MongoDB",
          level: 80,
          description: "NoSQL document-based storage",
        },
        {
          name: "Firestore",
          level: 85,
          description: "Real-time database solutions",
        },
        {
          name: "Redis",
          level: 80,
          description: "Caching and session management",
        },
        {
          name: "SQLite",
          level: 85,
          description: "Embedded database solutions",
        },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "#FF6B6B",
      skills: [
        {
          name: "Google Cloud Platform",
          level: 85,
          description: "Cloud infrastructure and services",
        },
        {
          name: "Docker",
          level: 80,
          description: "Containerization and deployment",
        },
        {
          name: "CI/CD Pipelines",
          level: 80,
          description: "Automated deployment processes",
        },
        {
          name: "Firebase",
          level: 85,
          description: "Authentication and hosting",
        },
        {
          name: "Git/GitHub",
          level: 95,
          description: "Version control and collaboration",
        },
        {
          name: "Linux/Unix",
          level: 85,
          description: "Server administration and scripting",
        },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: Zap,
      color: "#FFB347",
      skills: [
        {
          name: "Apache Kafka",
          level: 75,
          description: "Message queuing and streaming",
        },
        {
          name: "JWT Authentication",
          level: 90,
          description: "Secure token-based auth",
        },
        {
          name: "Swagger/OpenAPI",
          level: 85,
          description: "API documentation and testing",
        },
        {
          name: "Pest PHP/Unit Testing",
          level: 80,
          description: "Test-driven development",
        },
        {
          name: "Midtrans Integration",
          level: 85,
          description: "Payment gateway implementation",
        },
        {
          name: "Machine Learning APIs",
          level: 75,
          description: "AI service integration",
        },
      ],
    },
  };

  return (
    <div className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Technical <span className="text-[#FF6B6B]">Skills</span>
          </motion.h2>
          <p className="text-base sm:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Comprehensive expertise across the{" "}
            <span className="font-black text-[#FF6B6B]">
              full technology stack
            </span>
            with deep specialization in backend development
          </p>
          <div className="w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-full border-3 border-black font-black transition-all text-sm sm:text-base ${
                activeCategory === key
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-black hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeCategory === key ? category.color : "white",
              }}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          className="bg-white rounded-[20px] sm:rounded-[40px] border-4 border-black p-4 sm:p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2 sm:space-y-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-black text-black">
                    {skill.name}
                  </h3>
                  <span
                    className="text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full border-2 border-black"
                    style={{
                      backgroundColor: skillCategories[activeCategory].color,
                      color: "white",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <p className="text-gray-600 font-medium text-xs sm:text-sm">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="h-2 sm:h-3 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skillCategories[activeCategory].color,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Code, number: "8+", label: "Languages", color: "#FF6B6B" },
            {
              icon: Database,
              number: "6+",
              label: "Databases",
              color: "#FFB347",
            },
            {
              icon: Cloud,
              number: "5+",
              label: "Cloud Services",
              color: "#4ECDC4",
            },
            {
              icon: Shield,
              number: "15+",
              label: "Technologies",
              color: "#FF6B6B",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl sm:rounded-2xl border-3 border-black p-3 sm:p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-3 border-black flex items-center justify-center mx-auto mb-2 sm:mb-3"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-black text-black mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-bold text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
