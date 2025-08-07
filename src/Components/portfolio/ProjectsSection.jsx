import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Maximize2,
  X,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeMediaIndex, setActiveMediaIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mentalys - Bangkit Capstone Project",
      category: "Backend Development & Cloud",
      description:
        "Memimpin pengembangan backend untuk platform kesehatan mental menggunakan GCP, merancang ekosistem REST API lengkap termasuk Artikel, rekomendasi Makanan, dan layanan lokasi Klinik terdekat. Mengintegrasikan tiga model machine learning dan mengimplementasikan sistem pembayaran yang aman menggunakan Midtrans.",
      images: [
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572030/Screenshot_2024-12-13_014312_raz9zn.png",
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572031/Screenshot_2024-12-17_204859_h8csrx.png",
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572031/Screenshot_2024-12-17_204859_h8csrx.png",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/1OV-tOAYPjQ",
          thumbnail: "https://img.youtube.com/vi/1OV-tOAYPjQ/hqdefault.jpg",
        },
      ],
      technologies: [
        "GCP",
        "REST API",
        "Machine Learning",
        "Midtrans",
        "Firebase",
        "Swagger",
        "DevOps",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Mentalys-App",
      duration: "4 months",
      team: "Team Project",
      status: "Top 50 Capstone",
    },
    {
      id: 2,
      title: "SEA Catering - Food Delivery & Meal Plan",
      category: "Full Stack E-Commerce",
      description:
        "Mengembangkan platform pengiriman makanan full-stack menggunakan Laravel 12, Vue.js 3, dan Inertia.js dengan TypeScript. Menerapkan fitur e-commerce kompleks termasuk manajemen langganan, keranjang belanja, sistem checkout, dan pembayaran berulang otomatis.",
      images: [
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572388/Screenshot_588_nz47oq.png",
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572430/Screenshot_589_sl7zqz.png",
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572318/Screenshot_2025-08-07_201051_slnzsm.png",
        "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572318/Screenshot_2025-08-07_201116_ddktj3.png",
      ],
      videos: [],
      technologies: [
        "Laravel 12",
        "Vue.js 3",
        "Inertia.js",
        "TypeScript",
        "ShadCN UI",
        "Tailwind CSS",
      ],
      liveUrl: "https://seacatering.abdisetiawan.my.id/",
      githubUrl: "https://github.com/abdisetiakawan/SEAcatering",
      duration: "2 weeks",
      team: "Solo Project",
      status: "Completed",
    },
    {
      id: 3,
      title: "Go Ecommerce Fullstack",
      category: "Backend & Frontend Development",
      description:
        "Mengembangkan backend e-commerce yang dapat diskalakan dengan Go, MySQL, dan Kafka, mengikuti prinsip-prinsip clean architecture. Menerapkan endpoint RESTful untuk otentikasi, katalog produk, manajemen keranjang, dan pemrosesan pesanan. Menggunakan Docker untuk kontainerisasi dan JWT untuk otentikasi yang aman.",
      images: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop",
      ],
      videos: [],
      technologies: [
        "Go",
        "MySQL",
        "Kafka",
        "Docker",
        "JWT",
        "Vue.js",
        "Clean Architecture",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/go-ecommerce",
      duration: "2 months",
      team: "Solo Project",
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

  const openModal = (media) => {
    setModalMedia(media);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalMedia(null);
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
      <div className="relative aspect-video bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden group">
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

        {/* Expand Button */}
        <button
          onClick={() => openModal(currentMedia)}
          className="absolute bottom-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {allMedia.length > 1 && (
          <>
            <button
              onClick={() => handleMediaNavigation(project.id, "prev")}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button
              onClick={() => handleMediaNavigation(project.id, "next")}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </>
        )}

        <div className="absolute top-2 md:top-4 left-2 md:left-4 flex items-center gap-2">
          {currentMedia.type === "image" ? (
            <div className="bg-[#4ECDC4] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
              <ImageIcon className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Image</span>
            </div>
          ) : (
            <div className="bg-[#FF6B6B] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
              <Video className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Video</span>
            </div>
          )}
        </div>

        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/70 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
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
        videoSrc: vid.url,
        index: idx + project.images.length,
      })),
    ];

    if (allMedia.length <= 1) return null;

    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 md:gap-2 mt-3 md:mt-4">
        {allMedia.slice(0, 6).map((media, index) => (
          <motion.div
            key={index}
            className={`relative aspect-square bg-gray-200 rounded-md md:rounded-lg overflow-hidden cursor-pointer border-2 transition-all group ${
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

            {/* Small expand button for thumbnails */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const mediaForModal =
                  media.type === "video"
                    ? { ...media, src: media.videoSrc }
                    : media;
                openModal(mediaForModal);
              }}
              className="absolute top-1 right-1 w-5 h-5 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <Maximize2 className="w-3 h-3" />
            </button>

            {media.type === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 md:w-4 md:h-4 text-black ml-0.5" />
                </div>
              </div>
            )}

            {(activeMediaIndex[project.id] || 0) === media.index && (
              <div className="absolute inset-0 bg-[#FF6B6B]/20 border-2 border-[#FF6B6B] rounded-md md:rounded-lg" />
            )}
          </motion.div>
        ))}

        {allMedia.length > 6 && (
          <div className="relative aspect-square bg-black/80 rounded-md md:rounded-lg flex items-center justify-center text-white font-bold text-xs md:text-sm">
            +{allMedia.length - 6}
          </div>
        )}
      </div>
    );
  };

  // Modal Component
  const MediaModal = () => {
    if (!modalOpen || !modalMedia) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Content */}
            <div className="w-full h-full max-w-5xl max-h-[80vh] bg-white rounded-lg overflow-hidden">
              {modalMedia.type === "image" ? (
                <img
                  src={modalMedia.src}
                  alt="Enlarged view"
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={modalMedia.src}
                  title="Video player"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="py-8 md:py-16 px-4 bg-[#F5F1EB] relative">
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
              Featured <span className="text-[#FF6B6B]">Projects</span>
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              Showcasing my latest work in
              <span className="font-black text-[#FF6B6B]">
                {" "}
                web development
              </span>
              , from concept to production
            </p>
            <div className="w-16 md:w-24 h-2 bg-[#4ECDC4] rounded-full mx-auto border-2 border-black"></div>
          </motion.div>

          <div className="space-y-8 md:space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Media Section */}
                <div
                  className={`order-1 ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="bg-white rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-lg p-3 md:p-6">
                    {renderMainMedia(project)}
                    {renderMediaGrid(project)}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`order-2 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  } space-y-4 md:space-y-6`}
                >
                  <motion.div
                    className="bg-white rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-lg p-4 md:p-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <div
                          className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black"
                          style={{
                            backgroundColor:
                              index % 3 === 0
                                ? "#FF6B6B"
                                : index % 3 === 1
                                  ? "#FFB347"
                                  : "#4ECDC4",
                          }}
                        ></div>
                        <span className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-3 md:mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B6B]" />
                        <span className="font-medium text-gray-700 text-sm md:text-base">
                          {project.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-[#FFB347]" />
                        <span className="font-medium text-gray-700 text-sm md:text-base">
                          {project.team}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h4 className="text-base md:text-lg font-black text-black mb-2 md:mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 md:w-5 md:h-5 text-[#4ECDC4]" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 md:px-3 md:py-2 bg-[#F5F1EB] border-2 border-black rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:bg-[#FFB347] hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-[#FF6B6B] text-white font-bold rounded-xl md:rounded-2xl border-2 md:border-3 border-black hover:bg-[#FF5555] transition-colors text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        Live Demo
                        <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white text-black font-bold rounded-xl md:rounded-2xl border-2 md:border-3 border-black hover:bg-gray-100 transition-colors text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                        Source Code
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/abdisetiakawan?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 bg-[#4ECDC4] text-white font-black rounded-xl md:rounded-2xl border-2 md:border-4 border-black hover:bg-[#45B7B8] transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 inline ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <MediaModal />
    </>
  );
}
