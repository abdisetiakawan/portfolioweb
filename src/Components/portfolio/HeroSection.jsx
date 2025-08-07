import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-32 pb-16 lg:pt-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-[#FFB347] rounded-full border-2 sm:border-4 border-black"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <span className="font-black text-black text-sm sm:text-base">
              👋 Hello, I'm a
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Abdi Setiawan
            <br />
            <span className="text-[#FF6B6B]">Fullstack Developer</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            With{" "}
            <span className="font-black text-[#FF6B6B]">Backend Expertise</span>{" "}
            - Building scalable web solutions from powerful APIs to stunning
            interfaces
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: Database, label: "Backend Expert", color: "#FF6B6B" },
              { icon: Code, label: "Fullstack Dev", color: "#FFB347" },
              { icon: Cloud, label: "Cloud Native", color: "#4ECDC4" },
            ].map((skill) => (
              <motion.div
                key={skill.label}
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-full border-2 sm:border-3 border-black shadow-lg text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                style={{ borderColor: skill.color }}
              >
                <skill.icon
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: skill.color }}
                />
                <span className="font-bold text-black">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#FF6B6B] text-white font-black rounded-full border-2 sm:border-4 border-black shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="https://github.com/user-attachments/files/21665146/CV_Abdi.Setiawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-black rounded-full border-2 sm:border-4 border-black shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-[#FFB347] rounded-[40px] sm:rounded-[60px] border-4 border-black shadow-2xl"
              animate={{
                borderRadius: ["40px", "60px", "40px"],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-black/90 rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 border-2 sm:border-4 border-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-[#4ECDC4] font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <div>
                    const <span className="text-[#FFB347]">developer</span> ={" "}
                    {`{`}
                  </div>
                  <div className="ml-4">
                    name: <span className="text-white">"Abdi Setiawan"</span>,
                  </div>
                  <div className="ml-4">
                    role:{" "}
                    <span className="text-[#FF6B6B]">
                      "Fullstack Developer"
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    stack:{" "}
                    <span className="text-white">
                      ["Go", "Laravel", "Vue.js"]
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    passion:{" "}
                    <span className="text-[#FFB347]">"Scalable Solutions"</span>
                  </div>
                  <div>{`}`}</div>
                </div>
              </motion.div>
            </div>

            {[
              {
                icon: Database,
                color: "#4ECDC4",
                position: { top: "10%", left: "5%" },
              },
              {
                icon: Cloud,
                color: "#FFB347",
                position: { top: "20%", right: "5%" },
              },
              {
                icon: Zap,
                color: "#FF6B6B",
                position: { bottom: "20%", left: "10%" },
              },
              {
                icon: Code,
                color: "#4ECDC4",
                position: { bottom: "10%", right: "10%" },
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border-2 sm:border-3 border-black flex items-center justify-center shadow-lg"
                style={item.position}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <item.icon
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
