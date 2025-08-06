import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  Code,
  Star,
  Eye,
  ArrowUpRight,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "Modern e-commerce platform with advanced features including real-time inventory management, payment integration, and analytics dashboard.",
      longDescription: "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard with real-time analytics.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      duration: "3 months",
      team: "Solo Project",
      status: "Completed",
      features: [
        "User authentication & authorization",
        "Real-time inventory tracking",
        "Payment gateway integration",
        "Admin dashboard with analytics",
        "Responsive design",
        "SEO optimization"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Application",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      longDescription: "A powerful task management tool designed for teams. Built with React and Firebase, featuring real-time collaboration, drag-and-drop interface, file attachments, and comprehensive project tracking.",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&h=600&fit=crop",
      ],
      videoUrl: null,
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      duration: "2 months",
      team: "3 Developers",
      status: "In Progress",
      features: [
        "Real-time collaboration",
        "Drag & drop interface",
        "File attachments",
        "Project analytics",
        "Team management",
        "Mobile responsive"
      ]
    },
    {
      id: 3,
      title: "Learning Management System",
      category: "Educational Platform",
      description: "Comprehensive LMS with course creation, student progress tracking, and interactive learning modules.",
      longDescription: "A full-featured Learning Management System designed for educational institutions. Includes course creation tools, student enrollment, progress tracking, quiz system, and video streaming capabilities.",
      images: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      duration: "6 months",
      team: "5 Developers",
      status: "Completed",
      features: [
        "Course creation & management",
        "Student progress tracking",
        "Interactive quizzes",
        "Video streaming",
        "Discussion forums",
        "Certificate generation"
      ]
    }
  ];

  const ImageCarousel = ({ images, activeIndex, setActiveIndex }) => (
    <div className="relative">
      <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`Project image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : images.length - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setActiveIndex(activeIndex < images.length - 1 ? activeIndex + 1 : 0)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl border-4 border-black max-w-4xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-black text-black mb-2">{project.title}</h3>
                <p className="text-lg font-medium text-[#FF6B6B]">{project.category}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Media Section */}
            <div className="mb-8">
              <ImageCarousel 
                images={project.images} 
                activeIndex={activeImageIndex} 
                setActiveIndex={setActiveImageIndex} 
              />
              
              {project.videoUrl && (
                <div className="mt-4 aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                  <iframe
                    src={project.videoUrl}
                    title="Project Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-black text-black mb-4">Project Details</h4>
                <p className="text-gray-700 mb-6">{project.longDescription}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#FF6B6B]" />
                    <span className="font-medium">Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#FFB347]" />
                    <span className="font-medium">Team: {project.team}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-[#4ECDC4]" />
                    <span className="font-medium">Status: {project.status}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-black text-black mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F5F1EB] border-2 border-black rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-black text-black mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 pt-8 border-t-2 border-gray-200">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#FF6B6B] text-white font-bold rounded-2xl border-3 border-black hover:bg-[#FF5555] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                View Live
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-2xl border-3 border-black hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Source Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="py-16 px-4 bg-[#F5F1EB] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            Featured <span className="text-[#FF6B6B]">Projects</span>
          </motion.h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Showcasing my latest work in
            <span className="font-black text-[#FF6B6B]"> web development</span>
            , from concept to production
          </p>
          <div className="w-24 h-2 bg-[#4ECDC4] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-3xl border-4 border-black shadow-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedProject(project);
                setActiveImageIndex(0);
              }}
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <motion.div
                    className="bg-white rounded-full p-4 border-3 border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Eye className="w-8 h-8 text-[#FF6B6B]" />
                  </motion.div>
                </div>

                {/* Image Count Badge */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {project.images.length} Photos
                  </div>
                )}

                {/* Video Badge */}
                {project.videoUrl && (
                  <div className="absolute top-4 left-4 bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    Video
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#FFB347] font-bold text-sm">{project.category}</p>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#F5F1EB] border-2 border-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 border-2 border-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center hover:bg-[#FF5555] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                  
                  <div className="text-sm text-gray-500 font-medium">{project.duration}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-[#4ECDC4] text-white font-black rounded-2xl border-4 border-black hover:bg-[#45B7B8] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 inline ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}