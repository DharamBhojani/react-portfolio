import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Home, User, Mail, Book, Award, Folder, Code, ArrowRight,
  Github, Linkedin, Sun, Moon, Menu, X
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Event Management Website",
    description: "A complete event management website project hosted on GitHub.",
    tags: ["Laravel", "Js", "MySql"],
    img: "/assets/Event.jpeg",
    link: "https://github.com/Mausami-joshi/Event-Management-Website",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    const ids = ["home", "skills", "projects", "experience", "achievements", "strengths", "education", "contact", "about"];
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      sectionsRef.current[id] = el;
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(id);
        });
      }, { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { icon: <Home size={18} />, label: "Home", id: "home", link: "#home" },
    { icon: <Code size={18} />, label: "Skills", id: "skills", link: "#skills" },
    { icon: <Folder size={18} />, label: "Projects", id: "projects", link: "#projects" },
    { icon: <Award size={18} />, label: "Experience", id: "experience", link: "#experience" },
    { icon: <Book size={18} />, label: "Education", id: "education", link: "#education" },
    { icon: <Mail size={18} />, label: "Contact", id: "contact", link: "#contact" },
    { icon: <User size={18} />, label: "About", id: "about", link: "#about" },
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

  return (
    <div className={`${dark ? "bg-neutral-900 text-white" : "bg-white text-black"} min-h-screen font-sans`}>
      {/* NAVBAR */}
      <nav className={`${dark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} fixed w-full top-0 z-50 backdrop-blur-xl border-b py-3`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>Mausami Joshi</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-2">
            {navItems.map((n) => (
              <a key={n.id} href={n.link} className={`flex gap-1 items-center px-3 py-1 rounded-md transition ${
                active === n.id
                  ? "text-blue-400"
                  : dark
                    ? "text-gray-400 hover:text-blue-300"
                    : "text-gray-700 hover:text-blue-600"
              }`}>
                {n.icon}<span>{n.label}</span>
              </a>
            ))}
          </div>

          {/* Dark/Light Toggle */}
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full border mr-2">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="md:hidden p-2 rounded-md border">
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileNavOpen && (
          <div className={`${dark ? "bg-neutral-900" : "bg-white"} md:hidden px-4 py-4 space-y-2 border-t border-gray-200`}>
            {navItems.map((n) => (
              <a
                key={n.id}
                href={n.link}
                onClick={() => setMobileNavOpen(false)}
                className={`block px-3 py-2 rounded-md transition ${
                  active === n.id
                    ? "text-blue-400"
                    : dark
                      ? "text-gray-300 hover:text-blue-300"
                      : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN */}
      <main className="pt-24">
        {/* HOME */}
        <section id="home" className="min-h-screen flex items-center px-6 sm:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Mausami</span>
              </h1>
              <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
                Motivated BCA student seeking an internship to apply technical skills and gain hands-on experience in real-world projects.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-start sm:justify-start">
                <a href="#projects" className="px-4 py-2 bg-blue-600 rounded-lg flex items-center gap-2">View Projects <ArrowRight size={16} /></a>
                <a href="https://github.com/Mausami-joshi" className="p-2 border rounded-full"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/MausamiJoshi/" className="p-2 border rounded-full" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center mt-6 md:mt-0">
              <img src="/assets/Mausami.jpg" className="w-56 sm:w-72 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl" alt="Mausami" />
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Experience & Certifications</h2>
            <div className="space-y-4 text-gray-300 text-base sm:text-lg">
              <h3 className="text-2xl font-semibold">Internship at Inlancer Technologies LLP</h3>
              <p className="italic">Laravel Development Intern</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Developed and maintained Laravel-based web applications.</li>
                <li>Created RESTful APIs for mobile/web integration.</li>
                <li>Designed Blade-based UI with Bootstrap support.</li>
                <li>Wrote database queries and handled Eloquent ORM relationships.</li>
                <li>Handled CRUD operations and migrations.</li>
                <li>Integrated Laravel Sanctum for secure API authentication.</li>
                <li>Collaborated with team using Git and GitHub.</li>
                <li>Tested and debugged applications using Postman and Laravel's logs.</li>
              </ul>
            </div>
            <div className="mt-8 space-y-4 text-gray-300 text-base sm:text-lg">
              <h3 className="text-2xl font-semibold">Certifications</h3>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>🏆 Black Out Treasure Hunt – 2nd Rank across Rajkot Universities (Cyber Security Protectors 2025)</li>
                <li>🎓 Academic Excellence – Atmiya University, Semester 1 (2023-2024)</li>
                <li>📊 Tally ERP 9 – 95% (A+ grade, 2021)</li>
                <li>💻 Java Programming – Great Learning Online Platform</li>
                <li>🐍 Python for Beginners – Great Learning Online Platform</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
<section id="skills" className="py-20 px-6 sm:px-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {[
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Laravel", img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
        { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "REST API", img: "/assets/skills/rest-api.png" }, // Use a local image for REST API
        { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", img: "https://img.icons8.com/color/48/000000/c-programming.png" }
      ].map((skill, i) => (
        <motion.div key={i} variants={item} className="flex flex-col items-center p-4 sm:p-6 border rounded-xl bg-white/5 backdrop-blur-lg text-center">
          <img
            src={skill.img}
            alt={skill.name}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-3"
          />
          <span className="text-base sm:text-lg font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {projectsData.map((p)=>(
                <motion.div key={p.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="border bg-white/5 rounded-xl p-4">
                  <img src={p.img} alt={p.title} className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3"/>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-gray-400 my-2 text-sm sm:text-base">{p.description}</p>
                  <a href={p.link} className="text-blue-400 hover:underline">View →</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Achievements</h2>
            <ul className="space-y-3 text-gray-300 text-base sm:text-lg">
              <li>🏆 Participated in State-level Student Synopsis Competitions</li>
              <li>🏆 Participated in CVM University Hackathon 2025</li>
              <li>🏆 Participated in Black Out Treasure Hunt Organized by Cyber Security Protectors</li>
            </ul>
          </div>
        </section>

        {/* STRENGTHS */}
        <section id="strengths" className="py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Strengths</h2>
            <ul className="space-y-3 text-gray-300 text-base sm:text-lg">
              <li>⚡ Quick learner with a passion for technology</li>
              <li>🧠 Strong problem-solving and analytical skills</li>
              <li>💬 Excellent communication skills</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Education</h2>
            <div className="space-y-6 text-gray-300 text-base sm:text-lg">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
                <p>Atmiya University, Rajkot</p>
                <p className="text-gray-400">2023 - Expected 2026</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Higher Secondary Certificate (HSC)</h3>
                <p>Arjun English Medium High School, GSEB</p>
                <p className="text-gray-400">2022 - 2023</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Secondary School Certificate (SSC)</h3>
                <p>Bhavan’s Shri A.K. Doshi Vidyalaya, GSEB</p>
                <p className="text-gray-400">2020 - 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact</h2>
            <div className="space-y-4 text-gray-300 text-base sm:text-lg">
              <p><span className="font-semibold">Email:</span> <a href="mailto:mausamijoshi40@gmail.com" className="text-blue-400 hover:underline">mausamijoshi40@gmail.com</a></p>
              <p><span className="font-semibold">Mobile:</span> <a href="tel:+919016083104" className="text-blue-400 hover:underline">+91 9016083104</a></p>
              <p><span className="font-semibold">Address:</span> Satyasai Road, Rajkot-361001</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I specialize in Laravel, JS, Python and modern web technologies. I aim to combine clean code, intuitive UI, and practical solutions to deliver seamless user experiences in every project I work on.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
