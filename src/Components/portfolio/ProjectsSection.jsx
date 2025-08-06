import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Database, Cloud, Star, Award } from "lucide-react";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Mentalys - Mental Health Platform",
      category: "Fullstack • Cloud Native",
      image: "/api/placeholder/600/400",
      tags: ["Go", "GCP", "Firestore", "Machine Learning", "Swagger"],
      achievement: "Top 50 Product among 644 teams",
      color: "#FF6B6B",
      description:
        "Comprehensive mental health platform with AI-powered recommendations and secure consultation booking.",
      features: [
        "Led backend development with complete REST API ecosystem",
        "Integrated 3 ML models for personalized recommendations",
        "Implemented secure Midtrans payment system",
        "Built robust Firebase authentication system",
        "Created comprehensive Swagger documentation",
        "Deployed with automated GCP infrastructure",
      ],
      technologies: {
        backend: ["Go", "Fiber Framework", "REST API", "Clean Architecture"],
        database: ["Firestore", "Real-time sync"],
        cloud: ["Google Cloud Platform", "Automated deployment"],
        integration: ["3 ML Models", "Midtrans Payment", "Firebase Auth"],
      },
    },
    {
      title: "SEA Catering - Food Delivery Platform",
      category: "Fullstack • E-commerce",
      image: "/api/placeholder/600/400",
      tags: ["Laravel", "Vue.js", "TypeScript", "Inertia.js", "ShadCN"],
      achievement: "Complete E-commerce Solution",
      color: "#FFB347",
      description:
        "Full-stack food delivery platform with subscription management and automated recurring payments.",
      features: [
        "Developed with Laravel 12, Vue.js 3, and TypeScript",
        "Complex e-commerce features and subscription management",
        "Shopping cart, checkout, and recurring payments",
        "Responsive SPA with ShadCN UI components",
        "Real-time updates and seamless UX",
        "Scalable architecture with queue processing",
      ],
      technologies: {
        backend: ["Laravel 12", "Queue Processing", "Middleware Auth"],
        frontend: ["Vue.js 3", "TypeScript", "Inertia.js", "ShadCN UI"],
        database: ["MySQL", "Migration Scripts"],
        features: [
          "Payment Gateway",
          "Subscription System",
          "Order Management",
        ],
      },
    },
    {
      title: "Go E-commerce Platform",
      category: "Backend • Microservices",
      image: "/api/placeholder/600/400",
      tags: ["Go", "MySQL", "Kafka", "Docker", "Clean Architecture"],
      achievement: "Scalable Architecture Design",
      color: "#4ECDC4",
      description:
        "Scalable e-commerce backend with clean architecture and event-driven design using Apache Kafka.",
      features: [
        "Clean architecture with Go and MySQL",
        "RESTful API for complete e-commerce functionality",
        "Apache Kafka for event-driven architecture",
        "Docker containerization for deployment",
        "JWT authentication with layered security",
        "Responsive Vue.js frontend integration",
      ],
      technologies: {
        backend: ["Go (Golang)", "Clean Architecture", "REST API"],
        database: ["MySQL", "Optimized Queries"],
        messaging: ["Apache Kafka", "Event Streaming"],
        deployment: ["Docker", "Containerization", "JWT Auth"],
      },
    },
  ];

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
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Featured <span className="text-[#FF6B6B]">Projects</span>
          </motion.h2>
          <p className="text-base sm:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Showcasing{" "}
            <span className="font-black text-[#FF6B6B]">
              scalable web solutions
            </span>
            from powerful backend APIs to stunning user interfaces
          </p>
          <div className="w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.button
              key={index}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border-3 border-black font-black transition-all text-sm sm:text-base ${
                activeProject === index
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-black hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeProject === index ? project.color : "white",
              }}
              onClick={() => setActiveProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.title.split(" ")[0]}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Project Display */}
        <motion.div
          key={activeProject}
          className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Image */}
          <motion.div className="relative" whileHover={{ scale: 1.02 }}>
            <div
              className="w-full h-48 sm:h-80 lg:h-96 rounded-[20px] sm:rounded-[40px] border-4 border-black shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
              style={{ borderColor: projects[activeProject].color }}
            >
              <div className="text-center text-gray-500">
                <Code className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4" />
                <p className="font-black text-sm sm:text-xl">
                  Project Screenshot
                </p>
                <p className="font-medium text-xs sm:text-base">
                  Live Demo Available
                </p>
              </div>
            </div>

            {/* Achievement Badge */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-[#FFB347] border-4 border-black rounded-full p-2 sm:p-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Project Details */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full border-3 border-black text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base"
                style={{ backgroundColor: projects[activeProject].color }}
              >
                {projects[activeProject].category}
              </div>

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-black mb-3 sm:mb-4">
                {projects[activeProject].title}
              </h3>

              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB347]" />
                <span className="font-bold text-[#FFB347] text-sm sm:text-base">
                  {projects[activeProject].achievement}
                </span>
              </div>

              <p className="text-sm sm:text-lg text-gray-700 font-medium leading-relaxed mb-4 sm:mb-6">
                {projects[activeProject].description}
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg sm:text-xl font-black text-black mb-3 sm:mb-4">
                Key Features:
              </h4>
              <div className="space-y-1 sm:space-y-2">
                {projects[activeProject].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: projects[activeProject].color }}
                    />
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-lg sm:text-xl font-black text-black mb-3 sm:mb-4">
                Technology Stack:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(projects[activeProject].technologies).map(
                  ([category, techs]) => (
                    <div key={category} className="space-y-1 sm:space-y-2">
                      <h5 className="font-black text-gray-800 capitalize text-sm sm:text-base">
                        {category}:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-full text-xs sm:text-sm font-bold text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#FF6B6B] text-white font-black rounded-full border-4 border-black shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.button>
              <motion.button
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-black rounded-full border-4 border-black shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-5 h-5" />
                Source Code
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
