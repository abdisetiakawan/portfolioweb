import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Star } from "lucide-react";

export default function AboutSection() {
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
            About <span className="text-[#FF6B6B]">Me</span>
          </motion.h2>
          <div className="w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Placeholder & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Photo Placeholder */}
            <motion.div
              className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80"
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B] to-[#FFB347] rounded-[50px] border-4 border-black shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <User className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4" />
                  <p className="font-black text-sm sm:text-xl">Your Portrait Photo</p>
                  <p className="font-medium text-xs sm:text-base">Professional Headshot</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#4ECDC4] rounded-full border-4 border-black"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-[#FFB347] rounded-full border-3 border-black"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Yogyakarta, ID",
                  color: "#FF6B6B",
                },
                {
                  icon: GraduationCap,
                  label: "Education",
                  value: "Computer Science",
                  color: "#FFB347",
                },
                { icon: Star, label: "GPA", value: "3.7", color: "#4ECDC4" },
                {
                  icon: User,
                  label: "Semester",
                  value: "7th Semester",
                  color: "#FF6B6B",
                },
              ].map((info, index) => (
                <motion.div
                  key={info.label}
                  className="bg-white rounded-xl sm:rounded-2xl border-3 border-black p-2 sm:p-4 shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 border-black"
                      style={{ backgroundColor: info.color }}
                    >
                      <info.icon className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black text-sm">
                        {info.label}
                      </p>
                      <p className="text-gray-700 font-medium text-xs sm:text-sm">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white rounded-[20px] sm:rounded-[40px] border-4 border-black p-4 sm:p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl sm:text-3xl font-black text-black mb-4 sm:mb-6">
                Experienced{" "}
                <span className="text-[#FF6B6B]">Fullstack Developer</span>
              </h3>

              <div className="space-y-3 sm:space-y-6 text-gray-700">
                <p className="text-sm sm:text-lg font-medium leading-relaxed">
                  Passionate about creating{" "}
                  <span className="font-black text-[#FF6B6B]">
                    secure, scalable applications
                  </span>{" "}
                  with focus on backend performance and modern frontend
                  experiences.
                </p>

                <p className="text-sm sm:text-lg font-medium leading-relaxed">
                  Currently a{" "}
                  <span className="font-black text-[#FFB347]">
                    7th semester Computer Science student
                  </span>
                  at Universitas Ahmad Dahlan with a strong GPA of 3.7,
                  specializing in system information with expertise in fullstack
                  development.
                </p>

                <p className="text-sm sm:text-lg font-medium leading-relaxed">
                  My main expertise lies in{" "}
                  <span className="font-black text-[#4ECDC4]">
                    backend development
                  </span>
                  , where I've mastered architecture design, microservices,
                  cloud implementation, performance optimization with Redis, and
                  clean code practices.
                </p>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { number: "3+", label: "Years Experience", color: "#FF6B6B" },
                {
                  number: "15+",
                  label: "Projects Completed",
                  color: "#FFB347",
                },
                { number: "93.9", label: "Bangkit GPA", color: "#4ECDC4" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-xl sm:rounded-2xl border-3 border-black p-3 sm:p-6 text-center shadow-lg"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className="text-xl sm:text-3xl font-black mb-1 sm:mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-black font-bold text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
