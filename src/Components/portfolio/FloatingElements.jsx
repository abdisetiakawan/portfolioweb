import React from "react";
import { motion } from "framer-motion";

export default function FloatingElements() {
  const shapes = [
    {
      size: "w-8 h-8",
      color: "#FF6B6B",
      position: { top: "10%", left: "5%" },
      delay: 0,
    },
    {
      size: "w-6 h-6",
      color: "#FFB347",
      position: { top: "20%", right: "10%" },
      delay: 1,
    },
    {
      size: "w-4 h-4",
      color: "#4ECDC4",
      position: { top: "40%", left: "8%" },
      delay: 2,
    },
    {
      size: "w-10 h-10",
      color: "#FF6B6B",
      position: { top: "60%", right: "5%" },
      delay: 3,
    },
    {
      size: "w-6 h-6",
      color: "#FFB347",
      position: { top: "80%", left: "15%" },
      delay: 4,
    },
    {
      size: "w-8 h-8",
      color: "#4ECDC4",
      position: { bottom: "10%", right: "20%" },
      delay: 5,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} rounded-full border-2 border-black opacity-20`}
          style={{
            backgroundColor: shape.color,
            ...shape.position,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + shape.delay,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
