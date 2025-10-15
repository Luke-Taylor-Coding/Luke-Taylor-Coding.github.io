import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon Components ---

const Code = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const Cpu = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M15 9h1M15 15h1M9 15h1M9 9h1M12 2v2M12 20v2M20 12h2M2 12h2"/></svg>);
const Zap = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const User = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const MessageSquare = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const X = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>);
const Github = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22V18a4 4 0 0 0-1-3.75c2.9-1.25 2.9-4.2 2.9-4.2a3 3 0 0 1-.7-2c.3-.9 0-2.3 0-2.3-1.1-.3-2.4 1.5-2.9 2-1 0-2 0-3 0-1-1.5-1.8-2.3-2.9-2-.7 0-.7 1.4 0 2.3-.3.9-.7 2 0 2.3 0 0-.1 2.9 2.9 4.2a4 4 0 0 0-1 3.75v4"/><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.8 8.1 6.8 9.4 0.5 0.1 0.7-0.2 0.7-0.5 0-0.2 0-1 0-1.8-2.6 0.6-3.7-1.2-3.7-1.2-0.5-1.2-1.2-1.6-1.2-1.6-1-0.7 0-0.7 0-0.7 1.1 0 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.1 1 0.1-0.7 0.4-1.2 0.7-1.4-2.4-0.3-4.9-1.2-4.9-4.9 0-1.2 0.4-2.3 1-3.2-0.1-0.3-0.4-1.5 0.1-3.2 0 0 0.9-0.3 3 1.2 0.9-0.3 1.9-0.5 2.8-0.5 1 0 2 0.2 2.8 0.5 2.1-1.5 3-1.2 3-1.2 0.5 1.7 0.2 2.9 0.1 3.2 0.7 0.9 1 2 1 3.2 0 3.7-2.5 4.6-4.9 4.9 0.4 0.3 0.7 1 0.7 1.8 0 1.2 0 2.4 0 2.7 0 0.2 0.1 0.5 0.7 0.4C19.2 20.1 22 16.4 22 12 22 6.5 17.5 2 12 2z"/></svg>);
const Linkedin = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 0-6 6v7H6V8h4v1.5a6 6 0 0 0 6-6zM6 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><rect x="4" y="8" width="4" height="13"/></svg>);
const Play = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>);
const Monitor = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>);
const Target = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);


// --- Color Variables (Warm White and Steel Blue) ---
const COLOR_BG = '#1D1D1D';      // Deep Charcoal
const COLOR_TEXT = '#F0EAD6';    // Warm White
const COLOR_ACCENT = '#6E8898';  // Steel Blue

// --- Mock Data ---

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Procedural World Generator',
    tech: ['C++', 'Unreal Engine 5', 'Perlin Noise'],
    description: 'A custom UE5 plugin for infinite, terrain generation using procedural noise functions and real-time LOD systems.',
    image: `https://placehold.co/800x450/${COLOR_BG.substring(1)}/${COLOR_ACCENT.substring(1)}?text=Procedural+Map+Gen`,
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'ECS Combat System',
    tech: ['C#', 'Unity', 'DOTS/Burst', 'Job System'],
    description: 'A high-performance Entity Component System (ECS) implementation for deterministic, large-scale combat simulation in Unity.',
    image: `https://placehold.co/800x450/${COLOR_BG.substring(1)}/${COLOR_TEXT.substring(1)}?text=ECS+Combat+Demo`,
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Advanced AI Behaviour Tree',
    tech: ['C++', 'Unreal Engine', 'Behavior Trees', 'BT++', 'State Machine'],
    description: 'Designed and implemented an extensible Behavior Tree framework for complex, emergent enemy AI behaviors in a tactical shooter prototype.',
    image: `https://placehold.co/800x450/${COLOR_BG.substring(1)}/${COLOR_ACCENT.substring(1)}?text=Tactical+AI`,
    github: '#',
    demo: '#',
  },
];

// Map of page IDs to icons
const NAV_MAP = {
  hero: { title: 'System Init', icon: Monitor },
  projects: { title: 'Projects', icon: Target },
  about: { title: 'About Me', icon: User },
  contact: { title: 'Contact', icon: MessageSquare }, 
};

// --- Custom Components ---

// CommandButton uses the Warm White/Steel Blue palette
const CommandButton = ({ children, onClick, className = '' }) => (
  <motion.button
    // Hover effect uses a shadow matching the ACCENT color
    whileHover={{ scale: 1.02, backgroundColor: `${COLOR_BG}80`, boxShadow: `0 0 15px ${COLOR_ACCENT}80` }} 
    whileTap={{ scale: 0.98 }}
    className={`
      px-6 py-2 text-sm font-bold rounded-md
      bg-[${COLOR_BG}]/70 border border-[${COLOR_ACCENT}]/50 text-[${COLOR_ACCENT}]
      transition-all duration-300 backdrop-blur-sm
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// Animation variants for content transitions
const pageVariants = {
  initial: { opacity: 0, x: 50, scale: 0.98 },
  in: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  out: { opacity: 0, x: -50, scale: 0.98, transition: { duration: 0.3, ease: 'easeOut' } },
};

// 1. Navigation Rail (Fixed Left Column - Desktop Only)
const NavigationRail = ({ currentPage, setPage }) => (
  <nav className={`hidden md:flex flex-col w-48 xl:w-64 h-full bg-[${COLOR_BG}]/70 border-r border-[${COLOR_ACCENT}]/50 p-6 backdrop-blur-md shadow-xl`}>
    <div className="font-extrabold mb-12 tracking-wider">
      {/* Name uses the Warm White text color and the Steel Blue accent color */}
      <span className={`block text-4xl leading-none text-[${COLOR_TEXT}]`}>Luke</span>
      <span className={`block text-2xl leading-tight text-[${COLOR_ACCENT}]`}>Taylor</span>
    </div>

    <div className="flex flex-col space-y-4 font-mono">
      {Object.entries(NAV_MAP).map(([id, { title, icon: Icon }]) => (
        <motion.div
          key={id}
          className={`cursor-pointer flex items-center p-3 rounded-lg transition-all duration-300 text-sm ${
            currentPage === id
              // Active state uses shadow glow and Warm White text
              ? `bg-[${COLOR_BG}] text-[${COLOR_TEXT}] border border-[${COLOR_ACCENT}] shadow-[0_0_10px_${COLOR_ACCENT}]`
              // Inactive state uses Steel Blue accent text
              : `text-[${COLOR_ACCENT}] hover:bg-[${COLOR_BG}]/70 hover:text-[${COLOR_TEXT}]`
          }`}
          onClick={() => setPage(id)}
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon className="w-5 h-5 mr-3" />
          {title}
        </motion.div>
      ))}
    </div>
    
    <div className="mt-auto pt-6 border-t border-[${COLOR_ACCENT}]/50">
        <p className={`text-xs text-[${COLOR_ACCENT}] font-mono`}>
          STATUS: {currentPage.toUpperCase()} ACTIVE
        </p>
    </div>
  </nav>
);

// 2. Mobile Header (Mobile Only)
const MobileHeader = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link click and close menu
  const handleNavigation = (pageId) => {
    setPage(pageId);
    setIsOpen(false);
  };

  return (
    <div className={`md:hidden w-full bg-[${COLOR_BG}]/90 border-b border-[${COLOR_ACCENT}]/50 backdrop-blur-md sticky top-0 z-40`}>
      <div className="flex justify-between items-center p-4">
        <div className="font-extrabold tracking-wider">
          <span className={`block text-xl leading-none text-[${COLOR_TEXT}]`}>Luke Taylor</span>
          <span className={`block text-sm leading-tight text-[${COLOR_ACCENT}]`}>
            {NAV_MAP[currentPage].title}
          </span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-md border border-[${COLOR_ACCENT}] text-[${COLOR_ACCENT}] hover:text-[${COLOR_TEXT}] transition-colors`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col space-y-2 p-4 border-t border-[${COLOR_ACCENT}]/30 overflow-hidden`}
          >
            {Object.entries(NAV_MAP).map(([id, { title, icon: Icon }]) => (
              <motion.div
                key={id}
                className={`cursor-pointer flex items-center p-3 rounded-lg transition-all duration-300 text-base ${
                  currentPage === id
                    ? `bg-[${COLOR_BG}] text-[${COLOR_TEXT}] shadow-inner shadow-[${COLOR_ACCENT}]/30`
                    : `text-[${COLOR_ACCENT}] hover:bg-[${COLOR_BG}]/70 hover:text-[${COLOR_TEXT}]`
                }`}
                onClick={() => handleNavigation(id)}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5 mr-3" />
                {title}
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

// 3. Hero/System Init (Default View)
const SystemInit = ({ setPage }) => (
  <motion.div key="hero" initial="initial" animate="in" exit="out" variants={pageVariants} className="h-full p-8 md:p-12 flex flex-col justify-center text-center">
    <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight text-[${COLOR_TEXT}] mb-4 md:mb-6`}>
      <span className={`text-[${COLOR_ACCENT}]`}>System</span> Initialized.
    </h1>
    <h2 className={`text-xl md:text-3xl text-[${COLOR_ACCENT}] font-mono mb-6 max-w-4xl mx-auto`}>
      Accessing <span className={`text-[${COLOR_TEXT}]`}>Luke Taylor's</span> Games Programmer Profile.
    </h2>

    {/* Brief Professional Description */}
    <p className={`text-base md:text-lg text-[${COLOR_ACCENT}] max-w-2xl mx-auto mb-10`}>
      I specialize in **high-performance engine systems**, **complex AI**, and **gameplay architecture** using C++ and C# in Unreal and Unity. My focus is building robust, scalable foundations for AAA-quality experiences.
    </p>


    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
      <CommandButton onClick={() => setPage('projects')} className="text-base md:text-lg">
        VIEW PROJECTS
      </CommandButton>
      <CommandButton onClick={() => setPage('about')} className="text-base md:text-lg">
        ABOUT ME
      </CommandButton>
    </div>
    
    <div className={`mt-12 md:mt-16 text-left border-t border-[${COLOR_ACCENT}]/50 pt-6 md:pt-8`}>
        <p className={`text-xs md:text-sm text-[${COLOR_ACCENT}] font-mono`}>
            System Status &gt; Ready for command input.
        </p>
        <p className={`text-xs md:text-sm text-[${COLOR_TEXT}] font-mono`}>
            Core Modules &gt; C++, Unreal, AI, Optimization.
        </p>
        <p className={`text-xs md:text-sm text-[${COLOR_ACCENT}] font-mono`}>
            Task &gt; Awaiting next command.
        </p>
    </div>
  </motion.div>
);

// 4. Projects Showcase (RENAMED)
const ProjectsView = ({ onProjectSelect }) => (
  <motion.div key="projects" initial="initial" animate="in" exit="out" variants={pageVariants} className="h-full p-8 md:p-12 overflow-y-auto">
    <h3 className={`text-3xl md:text-4xl font-bold text-[${COLOR_ACCENT}] mb-8 md:mb-10 border-b border-[${COLOR_ACCENT}]/50 pb-4`}>
      Project Showcase
    </h3>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onProjectSelect} />
      ))}
    </div>
  </motion.div>
);

// Project Card Component
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    onClick={() => onClick(project)}
    className={`relative group cursor-pointer overflow-hidden rounded-xl 
               border border-[${COLOR_ACCENT}]/50 bg-[${COLOR_BG}]/60 backdrop-blur-md 
               transition-all duration-300 hover:scale-[1.03] 
               hover:shadow-[0_0_20px_${COLOR_ACCENT}30]`} // Subtle glow matching accent
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`aspect-video overflow-hidden border-b border-[${COLOR_ACCENT}]/50`}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x450/${COLOR_BG.substring(1)}/${COLOR_ACCENT.substring(1)}?text=Project+Thumbnail`; }}
      />
    </div>
    <div className="p-4">
      <h4 className={`text-lg md:text-xl font-bold text-[${COLOR_ACCENT}] mb-1`}>{project.title}</h4>
      <p className={`text-[${COLOR_TEXT}] text-sm mb-3 line-clamp-2`}>{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span key={index} className={`text-xs font-mono px-2 py-0.5 bg-[${COLOR_ACCENT}]/50 text-[${COLOR_TEXT}] rounded border border-[${COLOR_ACCENT}]/70`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// 5. About Me (RENAMED)
const AboutMeView = () => (
    <motion.div key="about" initial="initial" animate="in" exit="out" variants={pageVariants} className="h-full p-8 md:p-12 overflow-y-auto">
      <h3 className={`text-3xl md:text-4xl font-bold text-[${COLOR_ACCENT}] mb-8 md:mb-10 border-b border-[${COLOR_ACCENT}]/50 pb-4`}>
        About Me & Journey
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className={`text-base text-[${COLOR_TEXT}] space-y-4 md:space-y-6`}>
          <p>
            My name is Luke Taylor, and my journey into programming began with a passion for **complex systems and emergent behavior**. What started with custom Quake 3 mods evolved into a professional focus on AAA game engine architecture.
          </p>
          <p>
            I specialize in the core engine logic that drives modern games—from developing high-performance **data-oriented (DOTS) architectures** to creating sophisticated, believable **NPC AI**. My primary tools are C++ and C#, leveraging the full power of Unreal and Unity to build systems that are robust, scalable, and highly optimized.
          </p>
        </div>

        <div className={`p-5 md:p-6 rounded-xl border border-[${COLOR_ACCENT}]/50 bg-[${COLOR_BG}]/60 backdrop-blur-md`}>
          <h4 className={`text-xl font-bold text-[${COLOR_ACCENT}] mb-4 flex items-center`}>
            <User className="w-5 h-5 mr-2" /> Key Milestones (Decrypted)
          </h4>
          <ul className={`text-[${COLOR_TEXT}] font-mono text-sm space-y-3`}>
            <li className={`border-l-2 border-[${COLOR_ACCENT}] pl-4`}>**2012:** Discovered C++. First engine mod completed.</li>
            <li className={`border-l-2 border-[${COLOR_ACCENT}] pl-4`}>**2017:** Graduated with B.Sc. in Computer Science. Specialized in Real-Time Rendering.</li>
            <li className={`border-l-2 border-[${COLOR_ACCENT}] pl-4`}>**2019-2023:** Lead Systems Engineer at [Mock Studio Name]. Shipped two AAA titles.</li>
            <li className={`border-l-2 border-[${COLOR_ACCENT}] pl-4`}>**2024:** Focus shifted to R&D in distributed gameplay architectures.</li>
          </ul>
        </div>
      </div>
    </motion.div>
);

// 6. Contact/Send Packet
const ContactProtocolView = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Processing Transmission...');
        console.log('Form Submitted:', formData);

        setTimeout(() => {
            setStatus('Transmission Complete. Awaiting Reply.');
            setFormData({ name: '', email: '', message: '' });
        }, 2000); // Simulate network delay
    };

    const InputField = ({ label, name, type = 'text', required = true }) => (
        <div className="mb-4 md:mb-6">
            <label htmlFor={name} className={`block text-sm font-medium text-[${COLOR_ACCENT}] mb-1 font-mono`}>
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className={`w-full p-2.5 md:p-3 rounded-lg bg-[${COLOR_BG}]/70 border border-[${COLOR_ACCENT}]/70 text-[${COLOR_TEXT}] placeholder-[${COLOR_ACCENT}] font-mono focus:ring-2 focus:ring-[${COLOR_ACCENT}] focus:border-[${COLOR_ACCENT}] transition-all duration-300 backdrop-blur-sm`}
            />
        </div>
    );

    const socialLinks = [
        { Icon: Github, href: '#', label: 'GitHub' },
        { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    const SocialIcon = ({ Icon, href, label }) => (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full bg-[${COLOR_BG}]/70 border border-[${COLOR_ACCENT}]/70 text-[${COLOR_ACCENT}] shadow-md transition-all duration-300 hover:shadow-[0_0_25px_${COLOR_ACCENT}50] hover:text-[${COLOR_TEXT}] backdrop-blur-sm`} 
        aria-label={label}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-6 h-6" />
      </motion.a>
    );

    return (
        <motion.div key="contact" initial="initial" animate="in" exit="out" variants={pageVariants} className="h-full p-8 md:p-12 overflow-y-auto">
            <h3 className={`text-3xl md:text-4xl font-bold text-[${COLOR_ACCENT}] mb-8 md:mb-10 border-b border-[${COLOR_ACCENT}]/50 pb-4`}>
              Initiate Contact Protocol
            </h3>
            
            <div className="max-w-3xl mx-auto">
                <div className={`bg-[${COLOR_BG}]/70 p-6 md:p-8 rounded-2xl border border-[${COLOR_ACCENT}]/50 shadow-xl backdrop-blur-lg`}> 
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                        <InputField label="Name (IDENTITY)" name="name" />
                        <InputField label="Email (REPLY_CHANNEL)" name="email" type="email" />
                        <div className="md:col-span-2">
                            <div className="mb-6 md:mb-8">
                                <label htmlFor="message" className={`block text-sm font-medium text-[${COLOR_ACCENT}] mb-1 font-mono`}>
                                    Message (DATA_PAYLOAD)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={`w-full p-2.5 md:p-3 rounded-lg bg-[${COLOR_BG}]/70 border border-[${COLOR_ACCENT}]/70 text-[${COLOR_TEXT}] placeholder-[${COLOR_ACCENT}] font-mono focus:ring-2 focus:ring-[${COLOR_ACCENT}] focus:border-[${COLOR_ACCENT}] transition-all duration-300 backdrop-blur-sm`}
                                ></textarea>
                            </div>
                        </div>
                        <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center">
                            <CommandButton type="submit" className="w-full md:w-auto mb-4 md:mb-0">
                                <MessageSquare className="w-5 h-5 mr-2 inline-block" /> SEND PACKET
                            </CommandButton>
                            {status && <motion.p className={`text-base text-[${COLOR_ACCENT}] font-mono ml-0 md:ml-4`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{status}</motion.p>}
                        </div>
                    </form>
                </div>

                <motion.div
                  className="flex justify-center gap-4 md:gap-6 mt-10 md:mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {socialLinks.map((link, index) => (
                    <SocialIcon key={index} Icon={link.Icon} href={link.href} label={link.label} />
                  ))}
                </motion.div>
            </div>
        </motion.div>
    );
};


// 7. Project Modal (Uses fixed positioning regardless of main view)
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring', damping: 20, stiffness: 100 }}
        className={`w-full max-w-2xl lg:max-w-4xl bg-[${COLOR_BG}]/95 rounded-2xl border border-[${COLOR_ACCENT}]/50 shadow-xl my-8 md:my-16`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-[${COLOR_ACCENT}] hover:text-[${COLOR_TEXT}] transition-colors p-2 rounded-full bg-[${COLOR_BG}]/80 hover:shadow-[0_0_10px_${COLOR_ACCENT}50]`} // Warm glow on hover
          aria-label="Close Project Details"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`aspect-video overflow-hidden rounded-t-2xl border-b border-[${COLOR_ACCENT}]/50`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x450/${COLOR_BG.substring(1)}/${COLOR_ACCENT.substring(1)}?text=Project+Thumbnail`; }}
          />
        </div>

        <div className="p-6 md:p-8">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-[${COLOR_ACCENT}] mb-3 md:mb-4`}>{project.title}</h2>
          <p className={`text-[${COLOR_TEXT}] text-base md:text-lg mb-4 md:mb-6`}>{project.description} This is a more detailed summary of the project. It would include specific technical challenges, solutions, and accomplishments. (Full text placeholder)</p>

          <div className="mb-6 md:mb-8">
            <h4 className={`text-xl font-bold text-[${COLOR_ACCENT}] mb-2 md:mb-3`}>Tech Stack (SYSTEM_DEPENDENCIES)</h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.tech.map((tech, index) => (
                <span key={index} className={`text-xs font-mono px-3 py-1 bg-[${COLOR_ACCENT}]/50 text-[${COLOR_TEXT}] rounded-full border border-[${COLOR_ACCENT}]/70`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <CommandButton onClick={() => window.open(project.github, '_blank')} className="flex items-center text-sm md:text-base">
              <Github className="w-5 h-5 mr-2" /> ACCESS GITHUB
            </CommandButton>
            <CommandButton onClick={() => window.open(project.demo, '_blank')} className="flex items-center text-sm md:text-base">
              <Play className="w-5 h-5 mr-2" /> RUN DEMO SIM
            </CommandButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


// --- Main App Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderContent = () => {
    switch (currentPage) {
      case 'hero':
        return <SystemInit setPage={setCurrentPage} />;
      case 'projects':
        return <ProjectsView onProjectSelect={setSelectedProject} />;
      case 'about':
        return <AboutMeView />;
      case 'contact':
        return <ContactProtocolView />;
      default:
        return <SystemInit setPage={setCurrentPage} />;
    }
  };

  return (
    // Base container is now flex-col on mobile, ensuring the MobileHeader stacks correctly.
    <div className={`h-screen w-screen bg-[${COLOR_BG}] text-[${COLOR_TEXT}] font-sans antialiased overflow-hidden flex flex-col md:flex-row`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto+Mono:wght@400;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          /* Disable scroll for fixed layout */
          overflow: hidden; 
        }

        .font-mono {
          font-family: 'Roboto Mono', monospace;
        }
        
        /* --- Wiring Layer: Static Diagonal Lines --- */
        .wiring-bg {
            background-image: linear-gradient(135deg, ${COLOR_ACCENT}1A 10%, transparent 10%, transparent 50%, ${COLOR_ACCENT}1A 50%, ${COLOR_ACCENT}1A 60%, transparent 60%, transparent 100%);
            background-size: 80px 80px; /* Size of the repeating diagonal square */
            opacity: 0.15;
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
        }

        /* 3D Grid Effect Background (The underlying chip texture) */
        .grid-bg {
            background: 
                linear-gradient(to right, ${COLOR_ACCENT}1A 1px, transparent 1px), 
                linear-gradient(to bottom, ${COLOR_ACCENT}1A 1px, transparent 1px); 
            background-size: 30px 30px;
            opacity: 0.1; /* Slightly lower opacity for underlying grid */
        }

        /* --- Circuit Stream Effect: Animated Data Packets --- */

        @keyframes travel {
            0% { 
                transform: translate(0, 0); 
                opacity: 0.5; 
            }
            50% { 
                opacity: 1; 
            }
            100% { 
                transform: translate(var(--travel-x), var(--travel-y)); 
                opacity: 0; 
            }
        }

        .circuit-stream {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        }
        
        /* Data Packet simulates signal traveling along a line */
        .data-packet {
            position: absolute;
            width: 8px; /* Slightly bigger node */
            height: 8px; /* Slightly bigger node */
            border-radius: 50%;
            background-color: ${COLOR_ACCENT}; 
            /* Enhanced glow trail */
            box-shadow: 0 0 12px ${COLOR_ACCENT}, 0 0 25px ${COLOR_ACCENT}B0, 0 0 40px ${COLOR_ACCENT}70; 
            opacity: 0;
            animation: travel 4s linear infinite;
        }

        /* Generate multiple nodes with varying start positions and travel paths */
        .data-packet:nth-child(1) { top: 10%; left: 5%; --travel-x: 90vw; --travel-y: 80vh; animation-delay: 0s; }
        .data-packet:nth-child(2) { top: 80%; left: 50%; --travel-x: 50vw; --travel-y: -70vh; animation-delay: 0.8s; }
        .data-packet:nth-child(3) { top: 25%; left: 90%; --travel-x: -80vw; --travel-y: 50vh; animation-delay: 1.6s; }
        .data-packet:nth-child(4) { top: 60%; left: 20%; --travel-x: 70vw; --travel-y: -40vh; animation-delay: 2.4s; }
        .data-packet:nth-child(5) { top: 40%; left: 70%; --travel-x: -60vw; --travel-y: 30vh; animation-delay: 3.2s; }

      `}</style>
      <script src="https://cdn.tailwindcss.com"></script>

      {/* --- CIRCUIT STREAM BACKGROUND: Animated Data Packets (Z-Index 1) --- */}
      <div className="circuit-stream">
          <div className="data-packet"></div>
          <div className="data-packet"></div>
          <div className="data-packet"></div>
          <div className="data-packet"></div>
          <div className="data-packet"></div>
      </div>
      
      {/* --- WIRING LAYER: Static Diagonal Lines (Z-Index 0) --- */}
      <div className="wiring-bg"></div>

      {/* Background Grid Overlay (Z-Index 0 - Underlying chip texture) */}
      <div className="fixed inset-0 grid-bg z-0 pointer-events-none"></div>

      {/* Mobile Header (Visible on small screens) */}
      <MobileHeader currentPage={currentPage} setPage={setCurrentPage} />

      {/* Navigation Rail (Visible on desktop) */}
      <NavigationRail currentPage={currentPage} setPage={setCurrentPage} />

      {/* Main Content Area (Z-Index 10) */}
      <main className="flex-1 relative z-10 p-4 md:p-8 overflow-y-auto">
        {/* Content panel uses backdrop-blur to show the circuits underneath */}
        <div className={`h-full bg-[${COLOR_BG}]/60 backdrop-blur-xl rounded-xl border border-[${COLOR_ACCENT}]/50 shadow-2xl shadow-black/50`}>
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </main>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
