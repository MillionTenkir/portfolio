"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Code,
  Server,
  Calendar,
  Building,
  GraduationCap,
  Award,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      "Next.js",
      "React.js",
      "State management",
      "Tailwind CSS & Shadcn UI",
      "JavaScript",
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
    devops: [
      "Docker",
      "Jenkins",
      "GitLab",
      "ArgoCD",
      "Ansible",
      // "SonarQube",
      "Harbor",
    ],
    tools: ["Git", "Linux", "Terraform", "Kubernetes"],
  };

  const experiences = [
    {
      title: "Full Stack Software Developer",
      company: "Cheche Technologies",
      period: "Oct 2024 - Current",
      location: "Addis Ababa, Ethiopia",
      description:
        "E-government systems, Full Stack developer on Qetero Booking System, Full stack developer on Sheger Entrepreneurs Association System",
      current: true,
    },
    {
      title: "Web Developer",
      company: "Commercial Bank of Ethiopia",
      period: "Dec 2022 - Current",
      location: "Addis Ababa, Ethiopia",
      description:
        "Built School Fee Payments Project with MERN stack and CBE Retail System Onboarding using React and .NET. Implemented payment integrations with CBE Birr wallet and mobile banking systems.",
      current: true,
    },
    {
      title: "DevOps Engineer",
      company: "Safaricom Ethiopia",
      period: "Apr 2024 - May 2024",
      location: "Addis Ababa, Ethiopia",
      description:
        "Worked in Tibco department handling integrations. Managed containerization, CI/CD pipelines, and GitOps tools like ArgoCD for deployment automation.",
      current: false,
    },
  ];

  const projects = [
    {
      title: "Governmental E-service platform",
      description:
        "Enabling Governmental offices to manage and control all services provided using dynamic forms and heirarchies allowing flexibility.",
      tech: ["NextJs", "Node.js", "Postgresql", "React-query", "Shadcn"],
      url: "https://portal.cheche.et", // Replace with your actual project URL
      featured: true,
    },
    {
      title: "Express Routing System",
      description:
        "Express routing is an online booking and managment system for transit and metro services.",
      tech: ["Next", "Node.js", "Express", "Postgresql", "TypeScript"],
      url: "https://express.cheche.et", // Replace with your actual project URL
      featured: true,
    },
    {
      title: "Qetero Booking System",
      description:
        "Full-stack developer on Qetero booking platform for Document Authentication and Registration Office, providing seamless appointment booking and Workflow management system.",
      tech: ["Next", "Node.js", "Express", "Postgresql", "TypeScript"],
      url: "https://qetero.com", // Replace with your actual project URL
      featured: false,
    },
    {
      title: "Sheger Entrepreneurs Association",
      description:
        "Management system for Sheger entrepreneur association with comprehensive member and event management features.",
      tech: ["React", "Node.js", "PostgreSQL", "React-query", "Tailwind"],
      url: "https://sheger.cheche.et", // Replace with your actual project URL
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFEF7] via-[#FDF8F0] to-[#F5F1E8] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(41,121,255,0.03),transparent_50%)] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl bg-gradient-to-r from-[#2C2C2C] to-[#2979FF] bg-clip-text text-transparent">
              Million Tenkir
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 relative group ${
                    activeSection === section
                      ? "text-[#2979FF]"
                      : "text-[#3A3A3A] hover:text-[#2979FF]"
                  }`}
                >
                  {section}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#2979FF] to-[#00796B] transition-all duration-300 ${
                      activeSection === section
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#3A3A3A]" />
              ) : (
                <Menu className="h-6 w-6 text-[#3A3A3A]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/20 bg-white/90 backdrop-blur-xl">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-6 capitalize text-[#3A3A3A] hover:text-[#2979FF] hover:bg-white/50 transition-all duration-300 font-medium"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20 backdrop-blur-sm">
                  <span className="text-[#2979FF] font-medium">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C2C2C] leading-tight">
                  Million
                  <span className="block bg-gradient-to-r from-[#2979FF] to-[#00796B] bg-clip-text text-transparent">
                    Tenkir
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-[#3A3A3A] font-medium leading-relaxed">
                  Full Stack Developer & DevOps Engineer
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-2xl">
                  Dedicated Full Stack Developer and DevOps Engineer
                  specializing in Full-stack and modern cloud practices to build
                  scalable, high-performance web solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-[#2979FF] to-[#00796B] hover:from-[#1976D2] hover:to-[#00695C] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#2979FF]/25 hover:shadow-xl hover:shadow-[#2979FF]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("experience")}
                  className="border-2 border-[#2979FF]/30 text-[#2979FF] hover:bg-[#2979FF] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/50 hover:border-[#2979FF] transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Work
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                {[
                  { icon: Mail, href: "mailto:million12.tenkir@gmail.com" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/million-tenkir-8965b51b4",
                  },
                  { icon: Phone, href: "tel:+251938310147" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 text-[#3A3A3A] hover:text-[#2979FF] hover:bg-white/80 hover:border-[#2979FF]/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/5"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-96 h-96 mx-auto">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2979FF]/20 to-[#00796B]/20 rounded-full blur-3xl" />
                {/* Main circle */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl shadow-[#2979FF]/10 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#2979FF]/10 to-[#00796B]/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Code className="h-32 w-32 text-[#2979FF]" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-[#2979FF] rounded-full animate-pulse" />
                <div className="absolute bottom-16 left-8 w-3 h-3 bg-[#00796B] rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-[#C0C0C0] rounded-full animate-pulse delay-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/30">
            <ChevronDown className="h-6 w-6 text-[#2979FF]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20 backdrop-blur-sm mb-6">
              <span className="text-[#2979FF] font-medium">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Crafting Digital Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2979FF] to-[#00796B] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] leading-relaxed">
                I'm a passionate Web Developer with a solid foundation in
                software development and DevOps. My tech journey started with a
                Computer Science degree from Adama Science and Technology
                University, where I developed a deep love for crafting digital
                experiences.
              </p> */}
              <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] leading-relaxed">
                I've had the incredible opportunity to work on exciting projects
                at the Commercial Bank of Ethiopia and Safaricom Ethiopia, where
                I refined my skills in building web applications, handling
                complex payment systems, and streamlining development processes.
              </p>
              {/* <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] leading-relaxed">
                The MERN stack, React.js, and Redux are my go-to tools for
                creating dynamic and user-friendly interfaces. I'm constantly
                exploring new technologies and approaches, driven by a thirst
                for knowledge and a desire to build exceptional products.
              </p> */}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Building,
                  title: "3+ Years",
                  subtitle: "Professional Experience",
                },
                {
                  icon: Code,
                  title: "Full Stack",
                  subtitle: "Specialization in Frontend Development",
                },
                {
                  icon: Server,
                  title: "DevOps",
                  subtitle: "CI/CD & Automation",
                },
                {
                  icon: GraduationCap,
                  title: "CS Degree",
                  subtitle: "ASTU Graduate",
                },
              ].map(({ icon: Icon, title, subtitle }, index) => (
                <Card
                  key={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-[#2979FF] mx-auto mb-4" />
                    <h3 className="font-bold text-[#2C2C2C] mb-2 text-base sm:text-lg">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5A5A5A]">
                      {subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20 backdrop-blur-sm mb-6">
              <span className="text-[#2979FF] font-medium">Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2979FF] to-[#00796B] mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="space-y-2">
                      <CardTitle className="text-xl sm:text-2xl text-[#2C2C2C] flex items-center gap-3">
                        {exp.title}
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-[#2979FF] to-[#00796B] text-white border-0 px-3 py-1">
                            Current
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-[#2979FF] font-semibold text-lg sm:text-xl">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right text-[#5A5A5A] space-y-2">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="h-5 w-5 text-[#2979FF]" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin className="h-5 w-5 text-[#2979FF]" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-12 text-center">
              Education & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Bachelor's Degree",
                  institution: "Adama Science and Technology University",
                  details: "Computer Science • 2017 - 2022",
                },
                {
                  icon: Award,
                  title: "DevOps Engineering",
                  institution: "Gebeya Inc.",
                  details: "Professional Training • 2023 - 2024",
                },
              ].map(({ icon: Icon, title, institution, details }, index) => (
                <Card
                  key={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-[#2C2C2C] flex items-center gap-3 text-lg sm:text-xl">
                      <Icon className="h-6 w-6 text-[#2979FF]" />
                      {title}
                    </CardTitle>
                    <CardDescription className="text-[#2979FF] font-semibold text-base sm:text-lg">
                      {institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-[#5A5A5A] font-medium">
                      {details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20 backdrop-blur-sm mb-6">
              <span className="text-[#2979FF] font-medium">Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2979FF] to-[#00796B] mx-auto rounded-full mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies
              across various domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <Card className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#2979FF] to-[#1976D2]" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-[#2C2C2C]">
                  <Code className="h-6 w-6 text-[#2979FF]" />
                  Frontend Development
                </CardTitle>
                <CardDescription className="text-[#5A5A5A] text-base sm:text-lg">
                  Creating responsive and interactive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.frontend.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#2979FF]/5 to-[#00796B]/5 border border-white/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#2979FF]" />
                      <span className="font-medium text-[#3A3A3A] text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#00796B] to-[#00695C]" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-[#2C2C2C]">
                  <Server className="h-6 w-6 text-[#00796B]" />
                  Backend Development
                </CardTitle>
                <CardDescription className="text-[#5A5A5A] text-base sm:text-lg">
                  Building robust server-side applications and APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.backend.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#00796B]/5 to-[#2979FF]/5 border border-white/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00796B]" />
                      <span className="font-medium text-[#3A3A3A] text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* DevOps Skills */}
            <Card className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#2979FF] to-[#00796B]" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-[#2C2C2C]">
                  <Server className="h-6 w-6 text-[#2979FF]" />
                  DevOps & CI/CD
                </CardTitle>
                <CardDescription className="text-[#5A5A5A] text-base sm:text-lg">
                  Automating development workflows and deployment pipelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.devops.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#2979FF]/5 to-[#00796B]/5 border border-white/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#2979FF]" />
                      <span className="font-medium text-[#3A3A3A] text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools Skills */}
            <Card className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#00796B] to-[#2979FF]" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-[#2C2C2C]">
                  <Code className="h-6 w-6 text-[#00796B]" />
                  Tools & Technologies
                </CardTitle>
                <CardDescription className="text-[#5A5A5A] text-base sm:text-lg">
                  Essential tools for modern software development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#00796B]/5 to-[#2979FF]/5 border border-white/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00796B]" />
                      <span className="font-medium text-[#3A3A3A] text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skill Meter */}
          {/* <div className="mt-20">
            <h3 className="text-3xl font-bold text-[#2C2C2C] mb-12 text-center">
              Proficiency Levels
            </h3>
            <div className="space-y-8">
              {[
                {
                  name: "Frontend Development",
                  percentage: 90,
                  color: "#2979FF",
                },
                {
                  name: "Backend Development",
                  percentage: 85,
                  color: "#00796B",
                },
                { name: "DevOps & CI/CD", percentage: 80, color: "#2979FF" },
                {
                  name: "Database Management",
                  percentage: 85,
                  color: "#00796B",
                },
                { name: "UI/UX Design", percentage: 75, color: "#2979FF" },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#3A3A3A]">
                      {skill.name}
                    </span>
                    <span className="text-[#5A5A5A]">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20 backdrop-blur-sm mb-6">
              <span className="text-[#2979FF] font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2979FF] to-[#00796B] mx-auto rounded-full mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              Explore some of my recent work and projects that showcase my
              expertise in full-stack development and modern web technologies.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 text-[#2979FF] border border-[#2979FF]/20 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        className="bg-gradient-to-r from-[#2979FF] to-[#00796B] hover:from-[#1976D2] hover:to-[#00695C] text-white px-6 py-3 rounded-xl shadow-lg shadow-[#2979FF]/25 hover:shadow-xl hover:shadow-[#2979FF]/30 transition-all duration-300 transform hover:-translate-y-1"
                        onClick={() => window.open(project.url, "_blank")}
                      >
                        View Live
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-[#2979FF]/30 text-[#2979FF] hover:bg-[#2979FF] hover:text-white px-6 py-3 rounded-xl backdrop-blur-sm bg-white/50 hover:border-[#2979FF] transition-all duration-300"
                      >
                        View Code
                        <Code className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Card className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#2979FF]/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2979FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <iframe
                          src={project.url}
                          className="w-full h-80 border-0 rounded-t-xl"
                          title={project.title}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <Button
                            size="sm"
                            className="bg-white/90 text-[#2979FF] hover:bg-white hover:text-[#1976D2] shadow-lg"
                            onClick={() => window.open(project.url, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-12 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                  >
                    <div className="relative bg-gradient-to-br from-[#2979FF]/10 to-[#00796B]/10 h-48 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2979FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <div className="text-[#2979FF] text-5xl opacity-80">
                        {project.title.charAt(0)}
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <Button
                          size="sm"
                          className="bg-white/90 text-[#2979FF] hover:bg-white hover:text-[#1976D2] shadow-lg"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl text-[#2C2C2C]">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 text-[#2979FF] border border-[#2979FF]/20 text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#2979FF] to-[#00796B] hover:from-[#1976D2] hover:to-[#00695C] text-white flex-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          View Live
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border border-[#2979FF]/30 text-[#2979FF] hover:bg-[#2979FF] hover:text-white flex-1 rounded-lg transition-all duration-300"
                        >
                          Code
                          <Code className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-[#2979FF]/5 to-[#00796B]/5 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-base sm:text-lg text-[#5A5A5A] mb-6">
                  I'm always excited to take on new challenges and create
                  innovative solutions.
                </p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-[#2979FF] to-[#00796B] hover:from-[#1976D2] hover:to-[#00695C] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg shadow-[#2979FF]/25 hover:shadow-xl hover:shadow-[#2979FF]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Let's Talk
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20 backdrop-blur-sm mb-6">
              <span className="text-[#2979FF] font-medium">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2979FF] to-[#00796B] mx-auto rounded-full mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              I'm always excited to collaborate on new projects and
              opportunities. Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5">
              <CardHeader>
                <CardTitle className="text-[#2C2C2C] text-xl sm:text-2xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "million12.tenkir@gmail.com",
                    href: "mailto:million12.tenkir@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "(+251) 938310147",
                    href: "tel:+251938310147",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Addis Ababa, Ethiopia",
                    href: null,
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    value: "Connect with me",
                    href: "https://www.linkedin.com/in/million-tenkir-8965b51b4",
                  },
                ].map(({ icon: Icon, title, value, href }, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#2979FF]/10 to-[#00796B]/10 border border-[#2979FF]/20">
                      <Icon className="h-6 w-6 text-[#2979FF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2C2C] mb-1 text-base sm:text-lg">
                        {title}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[#5A5A5A] hover:text-[#2979FF] transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {value}
                          {href.startsWith("http") && (
                            <ExternalLink className="h-4 w-4" />
                          )}
                        </a>
                      ) : (
                        <p className="text-[#5A5A5A] text-sm sm:text-base">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#2979FF]/5 to-[#00796B]/5 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5">
              <CardHeader>
                <CardTitle className="text-[#2C2C2C] text-xl sm:text-2xl">
                  Let's Work Together
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you're looking for:
                </p>
                <ul className="space-y-4 text-[#5A5A5A]">
                  {[
                    "Full-stack web development",
                    "DevOps and automation solutions",
                    "Full-stack applications",
                    "Payment system integrations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#2979FF] to-[#00796B] rounded-full" />
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed">
                  I'd love to hear about your project and discuss how we can
                  bring your ideas to life.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-[#2979FF] to-[#00796B] hover:from-[#1976D2] hover:to-[#00695C] text-white py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#2979FF]/25 hover:shadow-xl hover:shadow-[#2979FF]/30 transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() =>
                    (window.location.href = "mailto:million12.tenkir@gmail.com")
                  }
                >
                  Send Email
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2C2C2C] to-[#3A3A3A] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(41,121,255,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent">
              Million Tenkir
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] mb-6">
              Full Stack Developer & DevOps Engineer
            </p>
            <Separator className="my-6 bg-gradient-to-r from-transparent via-[#2979FF]/50 to-transparent" />
            <p className="text-xs sm:text-sm text-[#C0C0C0]">
              © 2024 Million Tenkir. Built with passion and modern web
              technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
