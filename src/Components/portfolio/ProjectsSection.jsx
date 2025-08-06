import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Code,
  ArrowUpRight,
  Image as ImageIcon,
  Video,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeMediaIndex, setActiveMediaIndex] = useState({});

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "Modern e-commerce platform with advanced features including real-time inventory management, payment integration, and analytics dashboard.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      ],
      videos: [
        {
          thumbnail:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      duration: "3 months",
      team: "Solo Project",
      status: "Completed",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Application",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      ],
      videos: [],
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      duration: "2 months",
      team: "3 Developers",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Learning Management System",
      category: "Educational Platform",
      description:
        "Comprehensive LMS with course creation, student progress tracking, and interactive learning modules.",
      images: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      ],
      videos: [
        {
          thumbnail:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          thumbnail:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
      technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      duration: "6 months",
      team: "5 Developers",
      status: "Completed",
    },
  ];

  const handleMediaNavigation = (projectId, direction) => {
    const project = projects.find((p) => p.id === projectId);
    const totalMedia = project.images.length + project.videos.length;
    const currentIndex = activeMediaIndex[projectId] || 0;

    let newIndex;
    if (direction === "next") {
      newIndex = currentIndex >= totalMedia - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex <= 0 ? totalMedia - 1 : currentIndex - 1;
    }

    setActiveMediaIndex((prev) => ({
      ...prev,
      [projectId]: newIndex,
    }));
  };

  const handleMediaClick = (projectId, mediaIndex) => {
    setActiveMediaIndex((prev) => ({
      ...prev,
      [projectId]: mediaIndex,
    }));
  };

  const renderMainMedia = (project) => {
    const currentIndex = activeMediaIndex[project.id] || 0;
    const allMedia = [
      ...project.images.map((img, idx) => ({
        type: "image",
        src: img,
        index: idx,
      })),
      ...project.videos.map((vid, idx) => ({
        type: "video",
        src: vid.url,
        thumbnail: vid.thumbnail,
        index: idx + project.images.length,
      })),
    ];

    const currentMedia = allMedia[currentIndex];

    if (!currentMedia) return null;

    return (
      <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden group">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt={`${project.title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <iframe
              src={currentMedia.src}
              title={`${project.title} - Video`}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {allMedia.length > 1 && (
          <>
            <button
              onClick={() => handleMediaNavigation(project.id, "prev")}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleMediaNavigation(project.id, "next")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="absolute top-4 left-4 flex items-center gap-2">
          {currentMedia.type === "image" ? (
            <div className="bg-[#4ECDC4] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <ImageIcon className="w-4 h-4" />
              Image
            </div>
          ) : (
            <div className="bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Video className="w-4 h-4" />
              Video
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
          {currentIndex + 1} / {allMedia.length}
        </div>
      </div>
    );
  };

  const renderMediaGrid = (project) => {
    const allMedia = [
      ...project.images.map((img, idx) => ({
        type: "image",
        src: img,
        index: idx,
      })),
      ...project.videos.map((vid, idx) => ({
        type: "video",
        src: vid.thumbnail,
        index: idx + project.images.length,
      })),
    ];

    if (allMedia.length <= 1) return null;

    return (
      <div className="grid grid-cols-4 gap-2 mt-4">
        {allMedia.slice(0, 8).map((media, index) => (
          <motion.div
            key={index}
            className={`relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
              (activeMediaIndex[project.id] || 0) === media.index
                ? "border-[#FF6B6B] scale-95"
                : "border-transparent hover:border-[#FFB347]"
            }`}
            onClick={() => handleMediaClick(project.id, media.index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={media.src}
              alt={`${project.title} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {media.type === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-black ml-0.5" />
                </div>
              </div>
            )}

            {(activeMediaIndex[project.id] || 0) === media.index && (
              <div className="absolute inset-0 bg-[#FF6B6B]/20 border-2 border-[#FF6B6B] rounded-lg" />
            )}
          </motion.div>
        ))}

        {allMedia.length > 8 && (
          <div className="relative aspect-square bg-black/80 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            +{allMedia.length - 8}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-16 px-4 bg-[#F5F1EB] relative">
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
            Featured <span className="text-[#FF6B6B]">Projects</span>
          </motion.h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-8">
            Showcasing my latest work in
            <span className="font-black text-[#FF6B6B]"> web development</span>,
            from concept to production
          </p>
          <div className="w-24 h-2 bg-[#4ECDC4] rounded-full mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="bg-white rounded-3xl border-4 border-black shadow-lg p-6">
                  {renderMainMedia(project)}
                  {renderMediaGrid(project)}
                </div>
              </div>

              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <motion.div
                  className="bg-white rounded-3xl border-4 border-black shadow-lg p-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-4 h-4 rounded-full border-2 border-black"
                        style={{
                          backgroundColor:
                            index % 3 === 0
                              ? "#FF6B6B"
                              : index % 3 === 1
                              ? "#FFB347"
                              : "#4ECDC4",
                        }}
                      ></div>
                      <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-black mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#FF6B6B]" />
                      <span className="font-medium text-gray-700">
                        {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#FFB347]" />
                      <span className="font-medium text-gray-700">
                        {project.team}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-black text-black mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-[#4ECDC4]" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-[#F5F1EB] border-2 border-black rounded-xl text-sm font-medium hover:bg-[#FFB347] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#FF6B6B] text-white font-bold rounded-2xl border-3 border-black hover:bg-[#FF5555] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
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
    </div>
  );
}
