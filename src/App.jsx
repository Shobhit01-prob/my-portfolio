import React, { useState, useEffect } from 'react';
import { 
  Mail, ExternalLink, Download, 
  Code2, BrainCircuit, Terminal, Cpu, Layers, 
  MessageSquare, User, BookOpen, Award, 
  Moon, Sun, Menu, X, ChevronRight, Send, Phone,
  Layout, ShieldCheck, PieChart, Palette
} from 'lucide-react';

const Github = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const Linkedin = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Twitter = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA CONFIGURATION ---
const DATA = {
  name: "Shobhit Kumar Rathour",
  tagline: "B.Tech CSE Student | AI & Machine Learning Enthusiast | Aspiring Developer",
  email: "shobhitrathour906@gmail.com",
  phone: "+91 9044402265",
  socials: {
    github: "https://github.com/Shobhit01-prob",
    linkedin: "https://www.linkedin.com/in/shobhit-kumar-rathour/",
    instagram: "https://www.instagram.com/_shobhit_rathour_/",
    twitter: "https://x.com/Sh0105Rathour"
  },
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology",
      branch: "Computer Science and Engineering",
      score: "CGPA: 6.89",
      period: "Aug '25 – Present",
      location: "Phagwara, Punjab"
    },
    {
      institution: "P.N. Saigal Inter College",
      degree: "Intermediate",
      branch: "PCM",
      score: "Percentage: 78.88%",
      period: "Mar '24 – May '25",
      location: "Sitapur, Uttar Pradesh"
    },
    {
      institution: "P.N. Saigal Inter College",
      degree: "Matriculation",
      branch: "",
      score: "Percentage: 73.33%",
      period: "Mar '22 – May '23",
      location: "Sitapur, Uttar Pradesh"
    }
  ]
};

const ARSENAL = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-600/20 to-cyan-500/20",
    border: "border-blue-500/30",
    skills: [
      { name: "C++", desc: "", level: "Proficient" },
      { name: "Python", desc: "", level: "Proficient" },
      { name: "C", desc: "", level: "Proficient" },
      { name: "HTML & CSS", desc: "", level: "Proficient" },
      { name: "JavaScript", desc: "", level: "Proficient" },
      { name: "Node.js", desc: "", level: "Learning" },
      { name: "React.js", desc: "", level: "Learning" }
    ]
  },
  {
    title: "Tools/Platforms",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-purple-600/20 to-pink-500/20",
    border: "border-purple-500/30",
    skills: [
      { name: "MongoDB", desc: "", level: "Intermediate" },
      { name: "Git", desc: "", level: "Intermediate" },
      { name: "GitHub", desc: "", level: "Intermediate" },
      { name: "VS Code", desc: "", level: "Proficient" },
      { name: "Arduino IDE", desc: "", level: "Intermediate" }
    ]
  },
  {
    title: "Soft Skills",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-orange-600/20 to-yellow-500/20",
    border: "border-orange-500/30",
    skills: [
      { name: "Problem-Solving", desc: "", level: "Strong" },
      { name: "Leadership", desc: "", level: "Strong" },
      { name: "Project Management", desc: "", level: "Good" },
      { name: "Adaptability", desc: "", level: "Strong" }
    ]
  }
];

const CERTIFICATES = [
  {
    id: 1,
    title: "Enterprise Design Thinking Practitioner",
    org: "IBM SkillsBuild",
    date: "Aug '26",
    verify: "https://www.credly.com/go/HWfX7dUQ",
    image: "./certs/ibm-design-thinking.png"
  },
  {
    id: 2,
    title: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
    org: "Oracle University",
    date: "Aug '26",
    verify: "#",
    credentialId: "103478798OFAASOFA",
    image: "./certs/oracle-fusion.png"
  },
  {
    id: 3,
    title: "Oracle Data Platform Foundation Associate",
    org: "Oracle",
    date: "Jun '26",
    verify: "#",
    image: "./certs/oracle-data.png"
  },
  {
    id: 4,
    title: "Cybersecurity Threat Vectors and Mitigation",
    org: "Microsoft & Coursera",
    date: "Nov '23",
    verify: "https://coursera.org/verify/PAKVSS9C3HQT",
    image: "./certs/microsoft-cybersecurity.png"
  },
  {
    id: 5,
    title: "Leadership Fundamental",
    org: "EDUTECH HUB",
    date: "Oct '25",
    verify: "#",
    image: "./certs/edutech.png"
  },
  {
    id: 6,
    title: "Machine Learning Using Python",
    org: "Simplilearn",
    date: "Oct '25",
    verify: "#",
    credentialId: "9289662",
    image: "./certs/simplilearn-ml.png"
  }
];

const PROJECTS = [
  {
    title: "Adas System",
    desc: "Developed an Arduino-based camera to monitor driver's eyes/face to detect drowsiness. Activates a buzzer and vibration motor to alert the driver.",
    tech: ["Arduino UNO", "Sensors", "C++"],
    link: "#",
    github: "#",
    image: "./projects/adas.jpg"
  },
  {
    title: "Ai-Powered Mental Health Companion",
    desc: "Developed an AI-powered mental health companion for accessible emotional support. Implemented AI chat, mood tracking, and personalized resources.",
    tech: ["HTML", "CSS", "Python", "JavaScript", "AI/ML"],
    link: "#",
    github: "#",
    image: "./projects/mental-health.jpg"
  },
  {
    title: "Unified Defense & Security Intelligence Platform",
    desc: "Developed a unified platform to integrate defense and security intelligence data. Enabled real-time monitoring, analysis, and threat detection.",
    tech: ["Python", "AI/ML", "HTML", "CSS"],
    link: "#",
    github: "#",
    image: "./projects/unified-defense.jpg"
  }
];

// --- COMPONENTS ---

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Arsenal', href: '#arsenal' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Shobhit.
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
                Contact Me
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-40"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold">
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium text-sm"
            >
              Welcome to my portfolio
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-blue-600">Shobhit Kumar Rathour</span> 👋
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl"
            >
              {DATA.tagline}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href="#projects" className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                <Layout size={20} /> View My Projects
              </a>
              <a href="#certificates" className="border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                <Award size={20} /> View Certificates
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative flex justify-center items-center"
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 to-purple-600 shadow-2xl">
              <img 
                src="./profile.jpg" 
                alt="Shobhit Kumar Rathour" 
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800"
              />
            </div>
            
            {/* Floating stats badge */}
            <div className="absolute -bottom-4 -right-4 md:right-10 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 z-10">
               <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Currently Learning</p>
               <p className="text-blue-600 font-bold">Advanced AI & ML</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
              <p>
                I am currently pursuing a <strong>Bachelor of Technology in Computer Science Engineering</strong> at 
                <strong> Lovely Professional University</strong>, specializing in Artificial Intelligence and Machine Learning.
              </p>
              <p>
                My passion lies in exploring the intersection of software development and AI. I enjoy solving complex 
                problems and continuously improving my skills through practical projects and certifications.
              </p>
              <p>
                My goal is to gain practical industry experience and build technologies that make a meaningful impact.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Role", val: "B.Tech Student" },
                  { label: "Spec", val: "AI & ML" },
                  { label: "Soft Skills", val: "Problem Solver" },
                  { label: "Mindset", val: "Quick Learner" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-1">{item.label}</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-3xl text-white text-center transform translate-y-8 shadow-lg shadow-blue-500/20">
                  <h3 className="text-4xl font-bold mb-2">10+</h3>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Certificates</p>
               </div>
               <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-3xl text-white text-center shadow-lg shadow-purple-500/20">
                  <h3 className="text-4xl font-bold mb-2">5+</h3>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Projects</p>
               </div>
               <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 rounded-3xl text-white text-center transform translate-y-8 shadow-lg shadow-indigo-500/20">
                  <h3 className="text-4xl font-bold mb-2">3.5+</h3>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Years Tech Study</p>
               </div>
               <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-8 rounded-3xl text-white text-center shadow-lg shadow-cyan-500/20">
                  <h3 className="text-4xl font-bold mb-2">15+</h3>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Tech Stack</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL ARSENAL */}
      <section id="arsenal" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Technical Arsenal" 
            subtitle="A quick look at the technologies, programming languages, and tools I am mastering."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {ARSENAL.map((category, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-1 rounded-3xl bg-gradient-to-b ${category.color} border ${category.border}`}
              >
                <div className="bg-white dark:bg-slate-950 p-6 rounded-[22px] h-full shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-blue-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold">{skill.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 font-bold uppercase">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 bg-slate-100 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Recent Projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold hover:opacity-90 transition-opacity">
                      <Github size={18} /> Code
                    </a>
                    <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Education" />
          <div className="relative border-l-2 border-blue-600/30 pl-8 ml-4">
            {DATA.education.map((edu, idx) => (
              <div key={idx} className="mb-12 relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 shadow-sm shadow-blue-500" />
                <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">{edu.institution}</h3>
                      <p className="text-lg font-bold mt-1">{edu.degree}</p>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-sm font-bold text-center">
                      {edu.period}
                    </span>
                  </div>
                  <div className="space-y-2 text-slate-600 dark:text-slate-400">
                    {edu.branch && <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {edu.branch}</p>}
                    <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {edu.score}</p>
                    <p className="flex items-center gap-2 text-sm opacity-80"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> {edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-20 px-4 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Certificates & Achievements" subtitle="Click any certificate to view details" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <motion.div 
                key={cert.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-xl">
                      <Award className="text-blue-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-2 tracking-widest">{cert.org}</p>
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{cert.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-slate-500 font-medium">{cert.date}</span>
                    <ChevronRight size={18} className="text-slate-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 relative">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <div className="h-full flex flex-col justify-center">
                    <p className="text-sm font-bold text-blue-600 uppercase mb-4 tracking-widest">Certification Details</p>
                    <h2 className="text-3xl font-bold mb-6">{selectedCert.title}</h2>
                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-3">
                        <Award className="text-blue-600" size={20} />
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-bold">Issuer</p>
                          <p className="font-bold">{selectedCert.org}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="text-blue-600" size={20} />
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-bold">Issue Date</p>
                          <p className="font-bold">{selectedCert.date}</p>
                        </div>
                      </div>
                      {selectedCert.credentialId && (
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="text-blue-600" size={20} />
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Credential ID</p>
                            <p className="font-bold">{selectedCert.credentialId}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a href={selectedCert.verify} target="_blank" rel="noreferrer" className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                        <ExternalLink size={18} /> Verify Credential
                      </a>
                      <button onClick={() => setSelectedCert(null)} className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Let's Connect" subtitle="Have a question or want to work together?" />
          <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Get in touch</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail />, title: "Email", val: DATA.email, link: `mailto:${DATA.email}` },
                  { icon: <Phone />, title: "Phone", val: DATA.phone, link: `tel:${DATA.phone.replace(/\s+/g, '')}` },
                  { icon: <Linkedin />, title: "LinkedIn", val: "shobhitrathour", link: DATA.socials.linkedin },
                  { icon: <Github />, title: "GitHub", val: "shobhitrathour", link: DATA.socials.github },
                ].map((item, i) => (
                  <a key={i} href={item.link} className="flex items-center gap-6 group">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-blue-600 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase">{item.title}</p>
                      <p className="text-xl font-bold">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                 {[<Twitter />, <Instagram />].map((icon, idx) => (
                   <button key={idx} className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                     {icon}
                   </button>
                 ))}
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
              <textarea placeholder="Your Message" rows={5} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">Shobhit Kumar Rathour</p>
            <p className="text-slate-500 text-sm italic">Built with passion and curiosity for technology.</p>
          </div>
          <div className="flex gap-8">
             <a href={DATA.socials.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
             <a href={DATA.socials.github} className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
             <a href={DATA.socials.twitter} className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
          </div>
          <p className="text-slate-500 font-medium">
            © 2026 Shobhit Kumar Rathour. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}