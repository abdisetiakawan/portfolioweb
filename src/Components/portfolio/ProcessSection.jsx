import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Code,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);

  const processSteps = [
    {
      title: "System Design & Architecture",
      icon: Brain,
      color: "#FF6B6B",
      description: "Strategic planning and system architecture design",
      details: [
        "Requirements analysis and user story mapping",
        "System architecture design with scalability in mind",
        "Technology stack selection based on project needs",
        "Microservices architecture planning when needed",
        "API design and integration strategy",
        "Security considerations and access control planning",
      ],
    },
    {
      title: "Database Design",
      icon: Database,
      color: "#FFB347",
      description: "Optimal database structure and relationships",
      details: [
        "Entity Relationship Diagram (ERD) creation",
        "Database normalization and optimization",
        "Index strategy for query performance",
        "Migration scripts and version control",
        "Data integrity and constraint implementation",
        "Backup and recovery strategy planning",
      ],
    },
    {
      title: "Backend Development",
      icon: Code,
      color: "#4ECDC4",
      description: "Robust API development and server-side logic",
      details: [
        "RESTful API development with proper HTTP methods",
        "Authentication & authorization implementation (JWT, OAuth)",
        "Input validation and sanitization",
        "Error handling and logging mechanisms",
        "Rate limiting and security middleware",
        "API documentation with Swagger/OpenAPI",
      ],
    },
    {
      title: "Frontend Integration",
      icon: Zap,
      color: "#FF6B6B",
      description: "Seamless UI/UX with backend integration",
      details: [
        "Responsive component development",
        "State management implementation",
        "API integration with error handling",
        "Real-time features with WebSockets",
        "Performance optimization and caching",
        "Cross-browser compatibility testing",
      ],
    },
    {
      title: "Team Collaboration",
      icon: Users,
      color: "#FFB347",
      description: "Efficient teamwork and project management",
      details: [
        "Git workflow and branching strategies",
        "Code review processes and standards",
        "Agile methodology implementation",
        "Documentation and knowledge sharing",
        "Cross-functional team coordination",
        "Continuous integration/deployment setup",
      ],
    },
    {
      title: "Deployment & Monitoring",
      icon: Shield,
      color: "#4ECDC4",
      description: "Production-ready deployment and maintenance",
      details: [
        "Cloud infrastructure setup (GCP, AWS)",
        "Docker containerization",
        "CI/CD pipeline configuration",
        "Performance monitoring and alerting",
        "Security scanning and vulnerability assessment",
        "Automated backup and disaster recovery",
      ],
    },
  ];

  return (
    <div className="py-8 md:py-16 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-6xl font-black text-black mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            My Development <span className="text-[#FF6B6B]">Process</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            As a senior software engineer approach, here's how I deliver
            <span className="font-black text-[#FF6B6B]">
              {" "}
              scalable web solutions
            </span>{" "}
            from concept to production
          </p>
          <div className="w-16 md:w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeStep === index ? "scale-105" : "hover:scale-102"
              }`}
              onClick={() => setActiveStep(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`bg-white rounded-2xl md:rounded-[30px] border-2 md:border-4 p-4 md:p-6 shadow-lg transition-all ${
                  activeStep === index
                    ? "border-black shadow-2xl"
                    : "border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-black flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-base md:text-xl font-black text-black">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-medium text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {activeStep === index && (
                  <motion.div
                    className="mt-4 md:mt-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2 md:space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-start gap-2 md:gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                        >
                          <CheckCircle2
                            className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0"
                            style={{ color: step.color }}
                          />
                          <p className="text-gray-700 font-medium text-xs md:text-sm">
                            {detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          className="bg-[#F5F1EB] rounded-2xl md:rounded-[40px] border-2 md:border-4 border-black p-4 md:p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-black text-center mb-6 md:mb-8">
            Professional <span className="text-[#FF6B6B]">Workflow</span>
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-black flex items-center justify-center mb-1 md:mb-2"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <p className="text-xs md:text-xs font-bold text-black text-center max-w-16 md:max-w-20">
                    {step.title.split(" ")[0]}
                  </p>
                </motion.div>

                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-400 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <motion.p
              className="text-base md:text-lg font-medium text-gray-700 max-w-4xl mx-auto px-4"
              whileHover={{ scale: 1.02 }}
            >
              This systematic approach ensures{" "}
              <span className="font-black text-[#FF6B6B]">
                scalable architecture
              </span>
              ,
              <span className="font-black text-[#FFB347]">
                {" "}
                clean code practices
              </span>
              , and
              <span className="font-black text-[#4ECDC4]">
                {" "}
                successful project delivery
              </span>{" "}
              every time.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
