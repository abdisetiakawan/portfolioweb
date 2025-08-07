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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For now, we'll use mailto as fallback
      const mailtoLink = `mailto:abdisetiawan.dev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      value: "abdisetiawan.dev@gmail.com",
      color: "#FF6B6B",
      href: "mailto:abdisetiawan.dev@gmail.com",
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
      value: "+62 823-8910-5801",
      color: "#4ECDC4",
      href: "tel:+6282389105801",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/abdisetiakawan",
      color: "#FF6B6B",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abdi-setiawan/",
      color: "#FFB347",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:abdisetiawan.dev@gmail.com",
      color: "#4ECDC4",
    },
  ];

  return (
    <div className="py-16 px-4 relative bg-white">
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
            Let's <span className="text-[#FF6B6B]">Connect</span>
          </motion.h2>
          <p className="text-base sm:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Ready to collaborate on your next{" "}
            <span className="font-black text-[#FF6B6B]">web project</span>?
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="w-20 sm:w-24 h-2 bg-[#FFB347] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-[#F5F1EB] rounded-[20px] sm:rounded-[40px] border-2 sm:border-4 border-black p-6 sm:p-8 shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl sm:text-3xl font-black text-black mb-6 sm:mb-8 text-center">
                Send Me a <span className="text-[#FF6B6B]">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 text-sm sm:text-base"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black font-medium focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#FF6B6B] text-white font-black rounded-full border-2 sm:border-4 border-black shadow-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-medium text-center text-sm sm:text-base"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 font-medium text-center text-sm sm:text-base"
                  >
                    ❌ Failed to send message. Please try again or contact me
                    directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white rounded-[20px] sm:rounded-[30px] border-2 sm:border-4 border-black p-6 sm:p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg sm:text-2xl font-black text-black mb-4 sm:mb-6">
                Contact <span className="text-[#FF6B6B]">Information</span>
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-black flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: info.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-black text-sm sm:text-base">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 font-medium hover:text-[#FF6B6B] transition-colors text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-medium text-sm sm:text-base">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-[20px] sm:rounded-[30px] border-2 sm:border-4 border-black p-6 sm:p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg sm:text-2xl font-black text-black mb-4 sm:mb-6">
                Follow <span className="text-[#FF6B6B]">Me</span>
              </h3>

              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-black flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#F5F1EB] rounded-[20px] sm:rounded-[30px] border-2 sm:border-4 border-black p-6 sm:p-8 shadow-2xl text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg sm:text-2xl font-black text-black mb-3 sm:mb-4">
                Get My <span className="text-[#FF6B6B]">Resume</span>
              </h3>
              <p className="text-gray-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                Download my complete CV with detailed experience and projects
              </p>
              <motion.a
                href="https://github.com/user-attachments/files/21665146/CV_Abdi.Setiawan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#FFB347] text-white font-black rounded-full border-2 sm:border-4 border-black shadow-lg mx-auto text-sm sm:text-base"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
