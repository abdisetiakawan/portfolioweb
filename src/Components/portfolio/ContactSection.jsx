import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      color: "#FF6B6B",
      href: "mailto:your.email@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Yogyakarta, Indonesia",
      color: "#FFB347",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 xxx-xxxx-xxxx",
      color: "#4ECDC4",
      href: "tel:+62xxxxxxxxx",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/yourusername",
      color: "#FF6B6B",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "#FFB347",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:your.email@example.com",
      color: "#4ECDC4",
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
            className="text-4xl lg:text-6xl font-black text-black mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Let's <span className="text-[#FF6B6B]">Connect</span>
          </motion.h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Ready to collaborate on your next{" "}
            <span className="font-black text-[#FF6B6B]">web project</span>?
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-[#F5F1EB] rounded-[40px] border-4 border-black p-8 shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-3xl font-black text-black mb-8 text-center">
                Send Me a <span className="text-[#FF6B6B]">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block font-bold text-black mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30"
                      placeholder="Enter your name"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block font-bold text-black mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30"
                      placeholder="Enter your email"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block font-bold text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-2xl border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block font-bold text-black mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-4 rounded-2xl border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#FF6B6B] text-white font-black rounded-full border-4 border-black shadow-lg"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Information */}
            <motion.div
              className="bg-white rounded-[30px] border-4 border-black p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-black text-black mb-6">
                Contact <span className="text-[#FF6B6B]">Information</span>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full border-3 border-black flex items-center justify-center"
                      style={{ backgroundColor: info.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-black">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 font-medium hover:text-[#FF6B6B] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-white rounded-[30px] border-4 border-black p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-black text-black mb-6">
                Follow <span className="text-[#FF6B6B]">Me</span>
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              className="bg-[#F5F1EB] rounded-[30px] border-4 border-black p-8 shadow-2xl text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-black text-black mb-4">
                Get My <span className="text-[#FF6B6B]">Resume</span>
              </h3>
              <p className="text-gray-700 font-medium mb-6">
                Download my complete CV with detailed experience and projects
              </p>
              <motion.button
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB347] text-white font-black rounded-full border-4 border-black shadow-lg mx-auto"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
