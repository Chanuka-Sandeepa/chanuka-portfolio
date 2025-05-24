"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Smartphone,
  Palette,
  Award,
  Calendar,
  Download,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  // const [activeSection, setActiveSection] = useState("hero")
  const [isDark, setIsDark] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = {
    Programming: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "Kotlin", "R", "PHP"],
    Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Figma"],
    Backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Socket.io"],
    Database: ["MongoDB", "MySQL", "Firebase"],
    Tools: ["Git", "Android Studio", "SPSS", "Power Query", "Google Analytics", "Canva"],
    "Data Science": ["Excel", "Power Query", "Data Visualization", "Business Analytics"],
  }

  const projects = [
    {
      title: "Tranzits_360",
      description: "Real-time transport system serving 500+ daily commuters with live tracking and route optimization",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT Authentication"],
      impact: "40% reduction in route-planning time",
      features: ["Real-time GPS tracking", "Role-based access control", "Route optimization algorithms"],
      color: "from-blue-500 to-purple-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/Tranzits_360", // Replace with actual URL
    },
    {
      title: "Skill Plus",
      description: "Comprehensive skill-sharing platform with OAuth 2.0 authentication and learning management",
      tech: ["Spring Boot", "React.js", "MongoDB", "OAuth 2.0", "REST APIs", "JWT"],
      impact: "200+ users, 50+ learning plans",
      features: ["User authentication", "Skill matching", "Progress tracking", "Interactive learning modules"],
      color: "from-green-500 to-teal-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/SkillSharePlus", // Replace with actual URL
    },
    {
      title: "Fashion E-Commerce Platform",
      description: "Modern e-commerce platform for fashion and accessories with categorized shopping experience for men's and women's clothing, sunglasses, jewelry, and seasonal sales",
      tech: ["Vite", "TypeScript", "React.js", "shadcn-ui", "Tailwind CSS"],
      impact: "Enhanced shopping experience with modern UI/UX design",
      features: ["Men's clothing category", "Women's clothing section", "Sunglasses collection", "Jewelry showcase", "Sales & promotions", "Product filtering", "Responsive design", "Modern component library"],
      color: "from-rose-500 to-pink-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/sleek-shopping-portal", // Replace with actual URL
    },
    {
      title: "Note App",
      description: "Advanced CRUD note-taking application with offline functionality and cloud sync",
      tech: ["Vite", "React.js", "TypeScript", "Local Storage", "IndexedDB", "PWA"],
      impact: "95% user retention rate",
      features: ["Offline-first architecture", "Rich text editor", "Tag-based organization", "Search functionality"],
      color: "from-orange-500 to-red-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/Note_App_Final", // Replace with actual URL
    },
    {
      title: "BreadFruity Product Site",
      description: "Responsive e-commerce website with modern UI/UX and mobile-first design",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Responsive Design"],
      impact: "40% increase in mobile engagement",
      features: ["Mobile-responsive design", "Product catalog", "Shopping cart", "Payment integration"],
      color: "from-pink-500 to-rose-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/Bread-Fruity", // Replace with actual URL
    },
    {
      title: "Music App Design",
      description: "Interactive music streaming app prototype with modern UI components",
      tech: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"],
      impact: "4.8/5 user satisfaction score",
      features: ["Interactive prototypes", "User flow design", "Component library", "Responsive layouts"],
      color: "from-purple-500 to-indigo-600",
      githubUrl: "", // Replace with actual URL
    },
    {
      title: "Fitness & Nutrition Planner",
      description: "Developed a real-time fitness and nutrition planner to address the increasing obesity problem. The platform allows users to log in, complete a form, and receive personalized workout and meal plans based on their BMI. It is designed to assist individuals struggling with weight management and those with sedentary lifestyles.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      impact: "Personalized health solutions for weight management",
      features: ["BMI calculation", "Personalized workout plans", "Custom meal planning", "User progress tracking"],
      color: "from-indigo-500 to-purple-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/fitness-planner", // Replace with actual URL
    },
    {
      title: "Online Vehicle Rental System",
      description: "Comprehensive vehicle rental management system for efficient booking and fleet management",
      tech: ["Java", "MySQL", "Swing GUI", "JDBC", "MVC Architecture"],
      impact: "60% reduction in booking processing time",
      features: ["Vehicle booking", "Fleet management", "Customer management", "Rental analytics"],
      color: "from-emerald-500 to-green-600",
      githubUrl: "", // Replace with actual URL
    },
    {
      title: "Online Food Ordering System",
      description: "Complete food ordering platform with multi-role access including admin panel, restaurant management, and customer ordering interface",
      tech: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "AJAX"],
      impact: "Streamlined food ordering process for multiple restaurants",
      features: ["Admin dashboard", "Restaurant management panel", "Shopping cart", "Payment integration", "Order tracking", "User authentication"],
      color: "from-yellow-500 to-orange-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/Online-Food-Ordering-System", // Replace with actual URL
    },
    {
      title: "Mobile Shop Inventory Management",
      description: "Comprehensive mobile shop management system with inventory tracking, repair services, and order management for complete retail operations",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication", "REST APIs"],
      impact: "75% reduction in inventory errors and streamlined repair workflow",
      features: ["Order management system", "Technician repair tracking", "Real-time inventory stock", "Advanced search functions", "Customer repair status", "Parts management", "Service scheduling"],
      color: "from-slate-500 to-gray-600",
      githubUrl: "https://github.com/Chanuka-Sandeepa/Inventory-Management", // Replace with actual URL
    }
  ];

  const timeline = [
    {
      year: "2022-2026",
      title: "BSc (Hons) Information Technology (Data Science)",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      type: "education",
    },
    {
      year: "2021",
      title: "English Diploma",
      institution: "British Way English Academy",
      type: "education",
    },
    {
      year: "2021",
      title: "G.C.E. Advanced Level (Commerce Stream)",
      institution: "Nalanda College, Colombo-10",
      details: "Economics (A), Accounting (B), Business Statistics (S)",
      type: "education",
    },
    {
      year: "2020",
      title: "1st Place - Inter-School Statistics Quiz",
      institution: "University of Kelaniya",
      type: "achievement",
    },
    {
      year: "2018",
      title: "G.C.E. Ordinary Level - 8 Distinctions, 1 Credit",
      institution: "President's College, Maharagama",
      details:
        "Mathematics (A), Science (A), Buddhist (A), Sinhala (A), History (A), Sinhala Literature (A), Business & Accounting (A), Health & Physical Ed. (A), English (C)",
      type: "education",
    },
    {
      year: "2012",
      title: "Grade 5 Scholarship Examination",
      institution: "Successfully Completed",
      type: "achievement",
    },
  ]


  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "dark bg-gray-900" : "bg-white"}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-green-400/20 to-blue-600/20 blur-3xl"
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 60, delay: 0.1 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {["About", "Skills", "Projects", "Timeline", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="rounded-full">
              <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  S.A. Chanuka
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Sandeepa.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Crafting scalable web applications and intelligent data-driven solutions. Passionate about leveraging
                technology to solve real-world challenges.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="mailto:sandeepachanuka88@gmail.com">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </a>

                <a href="https://drive.google.com/file/d/1AtqQIKAkRlvrriDSm9HoweAZ6RlFXrUU/view?usp=drive_link" download>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </a>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { icon: Github, href: "https://github.com/Chanuka-Sandeepa" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/chanuka-sandeep-51674a244/" },
                  { icon: Mail, href: "mailto:sandeepachanuka88@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated rings around the image */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-purple-500/30 border-dashed"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
                />

                {/* Floating tech icons around the image */}
                {[
                  { icon: "⚛️", position: "top-0 left-0", delay: 0 },
                  { icon: "🚀", position: "top-0 right-0", delay: 0.5 },
                  { icon: "💻", position: "bottom-0 left-0", delay: 1 },
                  { icon: "🎯", position: "bottom-0 right-0", delay: 1.5 },
                  { icon: "⚡", position: "top-1/2 -left-4", delay: 2 },
                  { icon: "🔥", position: "top-1/2 -right-4", delay: 2.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xl shadow-lg`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: item.delay,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>
                ))}

                {/* Main profile image container */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-full p-2">
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-2">
                      {/* Profile Image */}
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Placeholder for now - you can replace with actual image */}
                      <Image
                        src="https://drive.google.com/uc?export=view&id=1sjMtjU_NhppDyDdd2dtgCfaSGFnyLcvl"
                        alt="Chanuka Sandeepa"
                        width={384}
                        height={384}
                        className="w-full h-full object-cover rounded-full"
                        priority
                      />

                        {/* Overlay gradient for better text visibility if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                {/* Status indicator */}
                <motion.div
                  className="absolute bottom-8 right-8 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                {/* Availability text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Available for opportunities
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I&#39;m an experienced Full-Stack Developer and Data Analyst currently pursuing my BSc (Hons) in Information
                Technology at SLIIT. I specialize in creating scalable web applications and implementing machine
                learning for intelligent, data-driven solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With expertise in modern technologies like React, Node.js, Spring Boot, and MongoDB, I&#39;m passionate
                about leveraging full-stack development and machine learning to tackle large-scale real-world
                challenges.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Location", value: "Homagama, Sri Lanka" },
              { icon: Phone, title: "Phone", value: "+94 78 677 9445" },
              { icon: Calendar, title: "Graduation", value: "Expected 2026" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <item.icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {category === "Programming" && <Code className="h-6 w-6 text-blue-600 mr-3" />}
                  {category === "Frontend" && <Palette className="h-6 w-6 text-green-600 mr-3" />}
                  {category === "Backend" && <Database className="h-6 w-6 text-purple-600 mr-3" />}
                  {category === "Database" && <Database className="h-6 w-6 text-orange-600 mr-3" />}
                  {category === "Tools" && <Smartphone className="h-6 w-6 text-red-600 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Innovative solutions that make a real impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    {project.features && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">{project.impact}</span>
                      <div className="flex space-x-2">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="sm" title="View on GitHub">
                              <Github className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                        <Button variant="ghost" size="default" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Education & Achievements
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center mb-2">
                      {item.type === "achievement" && <Award className="h-5 w-5 text-yellow-500 mr-2" />}
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{item.institution}</p>
                    {item.details && <p className="text-sm text-gray-500 dark:text-gray-400">{item.details}</p>}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications & Courses
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Continuous learning journey across multiple domains and technologies
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "30+", label: "Certifications", color: "from-blue-500 to-blue-600" },
                { number: "6", label: "Institutions", color: "from-green-500 to-green-600" },
                { number: "5", label: "Programming Languages", color: "from-purple-500 to-purple-600" },
                { number: "10+", label: "Platforms", color: "from-orange-500 to-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`bg-gradient-to-r ${stat.color} text-white p-6 rounded-2xl shadow-lg`}>
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certification Categories */}
            <div className="space-y-8">
              {[
                {
                  title: "University of Moratuwa",
                  icon: "🎓",
                  color: "from-blue-500 to-indigo-600",
                  borderColor: "border-blue-200 dark:border-blue-800",
                  bgColor: "bg-blue-50 dark:bg-blue-900/20",
                  courses: [
                    "Python for Beginners",
                    "Python Programming",
                    "Web Design for Beginners",
                    "Front-End Web Development",
                    "Server-Side Web Programming",
                  ],
                },
                {
                  title: "Programming & Development",
                  icon: "💻",
                  color: "from-green-500 to-emerald-600",
                  borderColor: "border-green-200 dark:border-green-800",
                  bgColor: "bg-green-50 dark:bg-green-900/20",
                  courses: [
                    "DP Coding School Level 1-109",
                    "Introduction to SQL - Simplilearn",
                    "Android Studio - Certified",
                    "CSS & JavaScript - E-Academy",
                    "C Programming - SoloLearn",
                  ],
                },
                {
                  title: "Google & Analytics",
                  icon: "📊",
                  color: "from-red-500 to-pink-600",
                  borderColor: "border-red-200 dark:border-red-800",
                  bgColor: "bg-red-50 dark:bg-red-900/20",
                  courses: [
                    "Google Analytics (Beginner & Advanced)",
                    "Google Tag Manager Fundamentals",
                    "Digital Marketing - Google Digital Garage",
                    "Business Analytics with Excel",
                  ],
                },
                {
                  title: "Data Analysis & UNICEF",
                  icon: "📈",
                  color: "from-purple-500 to-violet-600",
                  borderColor: "border-purple-200 dark:border-purple-800",
                  bgColor: "bg-purple-50 dark:bg-purple-900/20",
                  courses: [
                    "Data Analysis - UNICEF",
                    "Financial Tracking & Analysis - UNICEF",
                    "Excel Power Query - Global Nutrition Cluster",
                    "Data Visualization - UNICEF",
                  ],
                },
                {
                  title: "Great Learning Academy",
                  icon: "🚀",
                  color: "from-orange-500 to-amber-600",
                  borderColor: "border-orange-200 dark:border-orange-800",
                  bgColor: "bg-orange-50 dark:bg-orange-900/20",
                  courses: [
                    "Frontend Development (HTML, CSS)",
                    "Python Projects for Beginners",
                    "Java Programming",
                    "Introduction to R",
                    "Database Management Systems",
                  ],
                },
                {
                  title: "Design & Emerging Tech",
                  icon: "🎨",
                  color: "from-teal-500 to-cyan-600",
                  borderColor: "border-teal-200 dark:border-teal-800",
                  bgColor: "bg-teal-50 dark:bg-teal-900/20",
                  courses: [
                    "Canva Design - Coursera",
                    "Game Development with Scratch",
                    "Artificial Intelligence - Future Learn",
                    "Microsoft Office Suite",
                    "Website Development with Wix",
                  ],
                },
              ].map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border-2 ${category.borderColor} ${category.bgColor} p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className={`w-full h-full bg-gradient-to-br ${category.color} rounded-full blur-3xl`}></div>
                    </div>

                    {/* Header */}
                    <div className="relative z-10 flex items-center mb-6">
                      <div
                        className={`text-4xl mr-4 p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h4
                          className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                        >
                          {category.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {category.courses.length} courses completed
                        </p>
                      </div>
                    </div>

                    {/* Courses Grid */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-3">
                      {category.courses.map((course, courseIndex) => (
                        <motion.div
                          key={courseIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.1 + courseIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">
                            {course}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Completion Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4 z-10"
                    >
                      <div
                        className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                      >
                        ✓ Completed
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white"
            >
              <h4 className="text-2xl font-bold mb-3">Continuous Learning Journey</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Always exploring new technologies and expanding my skill set to stay at the forefront of innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Currently Learning: AI/ML
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Next: Cloud Computing
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Goal: Full-Stack Expert
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let&#39;s Work Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&#39;s discuss how we can create something amazing together.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.a
                href="mailto:sandeepachanuka88@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </motion.a>
              <motion.a
                href="tel:+94776371328"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Whatsapp Me
              </motion.a>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/Chanuka-Sandeepa", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/chanuka-sandeep-51674a244/", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400"
        >
          © 2024 S. A. Chanuka Sandeepa. Crafted with passion and code.
        </motion.p>
      </footer>
    </div>
  )
}
