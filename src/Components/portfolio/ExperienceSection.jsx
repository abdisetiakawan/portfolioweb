import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Users,
  Code,
  GraduationCap,
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "PT. Beringin Inti Teknologi (BIT)",
      type: "Internship",
      location: "Indonesia",
      period: "March 2025 - June 2025",
      color: "#FF6B6B",
      description:
        "Developing and maintaining scalable backend services and RESTful APIs",
      achievements: [
        "Developing and maintaining scalable backend services",
        "Building RESTful APIs with proper architecture",
        "Collaborating with cross-functional teams",
        "Implementing innovative technology solutions",
        "Working on production-level applications",
      ],
      technologies: ["Backend Development", "REST API", "Team Collaboration"],
    },
    {
      title: "Teaching Assistant - System Development",
      company: "Universitas Ahmad Dahlan",
      type: "Academic Role",
      location: "Yogyakarta, Indonesia",
      period: "April 2025 - July 2025",
      color: "#FFB347",
      description:
        "Project manager for FIPEX digital student exhibition platform",
      achievements: [
        "Managed 3 development teams as project manager",
        "Led development of online registration system",
        "Implemented curation and voting system features",
        "Coordinated backend, frontend, and UI/UX teams",
        "Applied agile development methodologies",
        "Mentored junior developers in best practices",
      ],
      technologies: [
        "Project Management",
        "Team Leadership",
        "Agile Methods",
        "Full-stack Development",
      ],
    },
    {
      title: "Bangkit Academy Graduate",
      company: "Google, Tokopedia, Gojek & Traveloka",
      type: "Certification Program",
      location: "Indonesia",
      period: "2024",
      color: "#4ECDC4",
      description: "Distinction Graduate in Cloud Computing Learning Path",
      achievements: [
        "Achieved Distinction Graduate status",
        "Maintained GPA of 93.90 in Cloud Computing",
        "Completed comprehensive cloud computing curriculum",
        "Developed capstone project with team",
        "Achieved Top 50 recognition among 644 teams",
        "Gained expertise in Google Cloud Platform",
      ],
      technologies: [
        "Google Cloud Platform",
        "Cloud Computing",
        "Machine Learning",
        "Team Collaboration",
      ],
    },
  ];

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
            className="text-4xl lg:text-6xl font-black text-black mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Professional <span className="text-[#FF6B6B]">Experience</span>
          </motion.h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Building expertise through{" "}
            <span className="font-black text-[#FF6B6B]">
              hands-on experience
            </span>
            in backend development and team leadership
          </p>
          <div className="w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-12 gap-6`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Marker */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-10 hidden lg:block"
                  style={{ backgroundColor: exp.color }}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Content Card */}
                <motion.div
                  className="w-full lg:w-5/12 bg-white rounded-[30px] border-4 border-black p-8 shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: exp.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {exp.type === "Academic Role" ? (
                        <GraduationCap className="w-8 h-8 text-white" />
                      ) : exp.type === "Certification Program" ? (
                        <Code className="w-8 h-8 text-white" />
                      ) : (
                        <Briefcase className="w-8 h-8 text-white" />
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-black mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-bold text-gray-800 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div
                    className="inline-block px-4 py-2 rounded-full border-3 border-black text-white font-bold mb-4"
                    style={{ backgroundColor: exp.color }}
                  >
                    {exp.type}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 font-medium text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achievementIndex * 0.1 }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        <p className="text-gray-700 font-medium">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-full text-sm font-bold text-gray-700"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Spacer for timeline alignment */}
                <div className="w-full lg:w-5/12 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Briefcase,
              number: "2+",
              label: "Professional Roles",
              color: "#FF6B6B",
            },
            {
              icon: Users,
              number: "3+",
              label: "Teams Managed",
              color: "#FFB347",
            },
            {
              icon: GraduationCap,
              number: "93.9",
              label: "Bangkit GPA",
              color: "#4ECDC4",
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
