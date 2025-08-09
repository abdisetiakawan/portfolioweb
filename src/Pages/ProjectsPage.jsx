import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Filter,
  Search,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Tag,
  Grid,
  List,
  X,
  ChevronDown,
} from "lucide-react";

export default function ProjectsPage({ onBack }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [selectedTeamType, setSelectedTeamType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mentalys - Bangkit Capstone Project",
      category: "Backend Development & Cloud",
      description:
        "Memimpin pengembangan backend untuk platform kesehatan mental menggunakan GCP, merancang ekosistem REST API lengkap termasuk Artikel, rekomendasi Makanan, dan layanan lokasi Klinik terdekat. Mengintegrasikan tiga model machine learning dan mengimplementasikan sistem pembayaran yang aman menggunakan Midtrans.",
      image: "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572030/Screenshot_2024-12-13_014312_raz9zn.png",
      technologies: ["GCP", "REST API", "Machine Learning", "Midtrans", "Firebase", "Swagger", "DevOps"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mentalys-App",
      duration: "4 months",
      teamType: "Team Project",
      status: "Top 50 Capstone",
      year: "2024",
      featured: true,
    },
    {
      id: 2,
      title: "SEA Catering - Food Delivery & Meal Plan",
      category: "Full Stack E-Commerce",
      description:
        "Mengembangkan platform pengiriman makanan full-stack menggunakan Laravel 12, Vue.js 3, dan Inertia.js dengan TypeScript. Menerapkan fitur e-commerce kompleks termasuk manajemen langganan, keranjang belanja, sistem checkout, dan pembayaran berulang otomatis.",
      image: "https://res.cloudinary.com/dfdjd3yuz/image/upload/v1754572388/Screenshot_588_nz47oq.png",
      technologies: ["Laravel 12", "Vue.js 3", "Inertia.js", "TypeScript", "ShadCN UI", "Tailwind CSS"],
      liveUrl: "https://seacatering.abdisetiawan.my.id/",
      githubUrl: "https://github.com/abdisetiakawan/SEAcatering",
      duration: "2 weeks",
      teamType: "Solo Project",
      status: "Completed",
      year: "2024",
      featured: true,
    },
    {
      id: 3,
      title: "Go Ecommerce Fullstack",
      category: "Backend & Frontend Development",
      description:
        "Mengembangkan backend e-commerce yang dapat diskalakan dengan Go, MySQL, dan Kafka, mengikuti prinsip-prinsip clean architecture. Menerapkan endpoint RESTful untuk otentikasi, katalog produk, manajemen keranjang, dan pemrosesan pesanan.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      technologies: ["Go", "MySQL", "Kafka", "Docker", "JWT", "Vue.js", "Clean Architecture"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/go-ecommerce",
      duration: "2 months",
      teamType: "Solo Project",
      status: "Completed",
      year: "2024",
      featured: false,
    },
    {
      id: 4,
      title: "Task Management API",
      category: "Backend Development",
      description:
        "REST API untuk manajemen tugas dengan fitur autentikasi JWT, CRUD operations, dan real-time notifications. Dibangun dengan Laravel dan menggunakan Redis untuk caching.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Laravel", "MySQL", "Redis", "JWT", "Swagger"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/task-api",
      duration: "3 weeks",
      teamType: "Solo Project",
      status: "Completed",
      year: "2024",
      featured: false,
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Full Stack Development",
      description:
        "Platform real estate dengan fitur pencarian properti, virtual tour, dan sistem booking. Menggunakan Vue.js untuk frontend dan Laravel untuk backend dengan integrasi payment gateway.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/real-estate",
      duration: "6 weeks",
      teamType: "Team Project",
      status: "In Progress",
      year: "2024",
      featured: false,
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Backend Development",
      description:
        "Sistem manajemen inventori dengan fitur tracking barang, laporan real-time, dan notifikasi stok rendah. Dibangun dengan Go dan PostgreSQL.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      technologies: ["Go", "PostgreSQL", "Docker", "Redis", "Grafana"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/inventory-system",
      duration: "5 weeks",
      teamType: "Solo Project",
      status: "Completed",
      year: "2023",
      featured: false,
    },
    {
      id: 7,
      title: "Chat Application",
      category: "Full Stack Development",
      description:
        "Aplikasi chat real-time dengan fitur grup chat, file sharing, dan video call. Menggunakan WebSocket untuk komunikasi real-time dan WebRTC untuk video call.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      technologies: ["Node.js", "Socket.io", "React", "WebRTC", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/chat-app",
      duration: "4 weeks",
      teamType: "Team Project",
      status: "Completed",
      year: "2023",
      featured: false,
    },
    {
      id: 8,
      title: "Learning Management System",
      category: "Full Stack Development",
      description:
        "Platform pembelajaran online dengan fitur kursus, quiz, progress tracking, dan sertifikat. Dibangun dengan Laravel dan Vue.js dengan integrasi video streaming.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "FFmpeg", "AWS S3"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdisetiakawan/lms-platform",
      duration: "8 weeks",
      teamType: "Team Project",
      status: "Completed",
      year: "2023",
      featured: false,
    },
  ];

  // Get unique values for filters
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort();
  const allCategories = [...new Set(projects.map(p => p.category))].sort();
  const allStatuses = [...new Set(projects.map(p => p.status))].sort();
  const allTeamTypes = [...new Set(projects.map(p => p.teamType))].sort();

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTechnology = selectedTechnology === "all" || 
                               project.technologies.includes(selectedTechnology);
      
      const matchesTeamType = selectedTeamType === "all" || 
                             project.teamType === selectedTeamType;
      
      const matchesStatus = selectedStatus === "all" || 
                           project.status === selectedStatus;
      
      const matchesCategory = selectedCategory === "all" || 
                             project.category === selectedCategory;

      return matchesSearch && matchesTechnology && matchesTeamType && matchesStatus && matchesCategory;
    });
  }, [searchTerm, selectedTechnology, selectedTeamType, selectedStatus, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTechnology("all");
    setSelectedTeamType("all");
    setSelectedStatus("all");
    setSelectedCategory("all");
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="bg-white rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
    >
      {/* Project Image */}
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-black">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">
          {project.year}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 md:p-6">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#4ECDC4] border-2 border-black"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
              {project.category}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-black text-black mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#FF6B6B]" />
            <span className="font-medium text-gray-700">{project.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 text-[#FFB347]" />
            <span className="font-medium text-gray-700">{project.teamType}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-[#F5F1EB] border border-gray-300 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded-lg text-xs font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#FF6B6B] text-white font-bold rounded-xl border-2 border-black text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-3 h-3" />
            Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white text-black font-bold rounded-xl border-2 border-black text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-3 h-3" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  const ProjectListItem = ({ project, index }) => (
    <motion.div
      className="bg-white rounded-2xl border-2 md:border-3 border-black shadow-lg p-4 md:p-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Project Image */}
        <div className="w-full md:w-48 aspect-video bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="flex-1 space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[#4ECDC4] border-2 border-black"></div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                {project.category}
              </span>
              {project.featured && (
                <span className="bg-[#FF6B6B] text-white px-2 py-1 rounded-full text-xs font-bold border border-black">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-black mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#FF6B6B]" />
              <span className="font-medium text-gray-700">{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-[#FFB347]" />
              <span className="font-medium text-gray-700">{project.teamType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#4ECDC4]" />
              <span className="font-medium text-gray-700">{project.status}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-[#F5F1EB] border border-gray-300 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FF6B6B] text-white font-bold rounded-xl border-2 border-black text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded-xl border-2 border-black text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Source Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#F5F1EB] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-3 border-black font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.button>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-black mb-4">
            All <span className="text-[#FF6B6B]">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl">
            Explore my complete collection of{" "}
            <span className="font-black text-[#FF6B6B]">web development projects</span>,
            from backend APIs to full-stack applications
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-white rounded-2xl md:rounded-3xl border-3 md:border-4 border-black p-4 md:p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, technologies, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl font-medium focus:outline-none focus:border-[#FF6B6B] transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-[#FFB347] text-white font-bold rounded-xl border-2 border-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </motion.button>

            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-xl border-2 border-black p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-[#4ECDC4] text-white" : "text-gray-600"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-[#4ECDC4] text-white" : "text-gray-600"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Results Count */}
              <span className="text-sm font-medium text-gray-600">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t-2 border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-[#FF6B6B]"
                  >
                    <option value="all">All Categories</option>
                    {allCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Technology Filter */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Technology</label>
                  <select
                    value={selectedTechnology}
                    onChange={(e) => setSelectedTechnology(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-[#FF6B6B]"
                  >
                    <option value="all">All Technologies</option>
                    {allTechnologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>

                {/* Team Type Filter */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Team Type</label>
                  <select
                    value={selectedTeamType}
                    onChange={(e) => setSelectedTeamType(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-[#FF6B6B]"
                  >
                    <option value="all">All Types</option>
                    {allTeamTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-[#FF6B6B]"
                  >
                    <option value="all">All Status</option>
                    {allStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Clear Filters */}
          {(searchTerm || selectedTechnology !== "all" || selectedTeamType !== "all" || selectedStatus !== "all" || selectedCategory !== "all") && (
            <motion.button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-xl border-2 border-gray-300 mt-4 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4" />
              Clear All Filters
            </motion.button>
          )}
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-black flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">No Projects Found</h3>
              <p className="text-gray-600 font-medium mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <motion.button
                onClick={clearFilters}
                className="px-6 py-3 bg-[#FF6B6B] text-white font-bold rounded-xl border-3 border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All Filters
              </motion.button>
            </div>
          ) : (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                : "space-y-6"
            }>
              {filteredProjects.map((project, index) => 
                viewMode === "grid" ? (
                  <ProjectCard key={project.id} project={project} index={index} />
                ) : (
                  <ProjectListItem key={project.id} project={project} index={index} />
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}