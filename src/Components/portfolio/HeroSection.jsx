import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-32 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-[#FFB347] rounded-full border-4 border-black"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <span className="font-black text-black">👋 Hello, I'm a</span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-black text-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Fullstack
            <br />
            <span className="text-[#FF6B6B]">Developer</span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-700 font-medium max-w-lg"
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
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: Database, label: "Backend Expert", color: "#FF6B6B" },
              { icon: Code, label: "Fullstack Dev", color: "#FFB347" },
              { icon: Cloud, label: "Cloud Native", color: "#4ECDC4" },
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-3 border-black shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                style={{ borderColor: skill.color }}
              >
                <skill.icon
                  className="w-5 h-5"
                  style={{ color: skill.color }}
                />
                <span className="font-bold text-black">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-[#FF6B6B] text-white font-black rounded-full border-4 border-black shadow-lg"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white text-black font-black rounded-full border-4 border-black shadow-lg"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-full h-[500px]">
            {/* Main Blob Shape */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-[#FFB347] rounded-[60px] border-4 border-black shadow-2xl"
              animate={{
                borderRadius: ["60px", "80px", "60px"],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Code Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-black/90 rounded-[40px] p-8 border-4 border-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-[#4ECDC4] font-mono text-sm space-y-2">
                  <div>
                    const <span className="text-[#FFB347]">developer</span> ={" "}
                    {`{`}
                  </div>
                  <div className="ml-4">
                    name: <span className="text-white">"Your Name"</span>,
                  </div>
                  <div className="ml-4">
                    role:{" "}
                    <span className="text-[#FF6B6B]">"Backend Expert"</span>,
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

            {/* Floating Icons */}
            {[
              {
                icon: Database,
                color: "#4ECDC4",
                position: { top: "10%", left: "10%" },
              },
              {
                icon: Cloud,
                color: "#FFB347",
                position: { top: "20%", right: "10%" },
              },
              {
                icon: Zap,
                color: "#FF6B6B",
                position: { bottom: "20%", left: "20%" },
              },
              {
                icon: Code,
                color: "#4ECDC4",
                position: { bottom: "10%", right: "20%" },
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 bg-white rounded-full border-3 border-black flex items-center justify-center shadow-lg"
                style={item.position}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
