/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  BarChart3, 
  Database, 
  Globe, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Package,
  Activity,
  Layers,
  Terminal,
  Cpu,
  Code2,
  LayoutDashboard,
  Briefcase,
  Sparkles,
  Target,
  Globe2
} from "lucide-react";
import { useEffect, useState } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-[#0A0B0E]/80 backdrop-blur-md border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold font-display cursor-default shadow-lg shadow-blue-500/20">
            PD
          </div>
          <span className="font-display font-semibold text-white tracking-widest uppercase text-xs">
            Prantik Datta
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold">
          {[
            { label: "Overview", id: "hero" },
            { label: "About", id: "about" },
            { label: "Capabilities", id: "expertise" },
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Impact", id: "impact" },
            { label: "Contact", id: "contact" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="px-6 py-2 rounded-lg bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300">
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
};

const StatCard = ({ label, value, sub, highlighted }: { label: string; value: string; sub: string; highlighted?: boolean }) => (
  <div className={`p-6 rounded-xl flex flex-col justify-center border transition-all duration-500 ${
    highlighted 
      ? "bg-brand-blue/10 border-brand-blue/30 scale-105" 
      : "bg-zinc-900 border-slate-800/50 hover:border-slate-700"
  }`}>
    <span className={`text-3xl font-bold mb-1 ${highlighted ? "text-blue-400" : "text-white"}`}>{value}</span>
    <span className={`text-[10px] uppercase tracking-widest font-bold mt-1 ${highlighted ? "text-blue-400/80" : "text-slate-500"}`}>{label}</span>
    <p className="hidden text-xs text-zinc-500 mt-2 leading-relaxed">{sub}</p>
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                Data Analyst | Supply Chain & Operations Analytics
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-display font-bold mb-8">
              <span className="text-white">Prantik Datta.</span> <br />
              <span className="text-slate-500 tracking-tight">Impact via Intelligence.</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
              I turn complex operational data into actionable insights, <span className="text-white font-medium">scalable BI systems</span>, and measurable business impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
               <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                  View Projects
               </a>
               <a href="#" className="px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
                  Download Resume
               </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-900 pt-12">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">$90M</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">EBIT Impact</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">5.8 Yrs</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Global</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Global Operations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Strategy</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Strategy & Analytics</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
             <div className="relative aspect-[4/5] w-full max-w-[450px] group">
                {/* Enhanced ambient glow */}
                <div className="absolute -inset-4 bg-blue-600/5 blur-[120px] -z-10 group-hover:bg-blue-600/10 transition-all duration-1000" />
                <div className="absolute inset-0 bg-blue-600/10 blur-[80px] -z-10 opacity-50" />
                
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative bg-zinc-900 shadow-3xl transition-all duration-700 group-hover:border-blue-500/30 group-hover:shadow-blue-500/5 group-hover:scale-[1.01]">
                  {/* Using local profile image with refined filter */}
                  <img 
                    src="/Profile.jpg" 
                    alt="Prantik Datta"
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if Profile.jpg is not found yet
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop";
                    }}
                  />
                  {/* Gradient mask for depth */}
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Subtle rim light effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
                </div>
                
                {/* Floating status indicator */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 bottom-32 p-4 bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl hidden lg:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                       <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400">BI</div>
                       <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-400">OP</div>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">Optimization Engine</span>
                  </div>
                </motion.div>

                {/* KPI Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -left-10 top-20 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl hidden xl:block"
                >
                  <div className="text-[8px] uppercase tracking-widest text-blue-400 font-bold mb-1">Impact Verified</div>
                  <div className="text-xl font-display font-bold text-white">$90M EBIT</div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ title, icon: Icon, items }: { title: string; icon: any; items: string[] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[250px] w-full perspective-1000 group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden p-8 bg-zinc-900/50 rounded-2xl border border-slate-800/50 flex flex-col items-center justify-center text-center group-hover:border-blue-500/50 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-display font-bold text-white tracking-tight uppercase">{title}</h3>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>SEE DETAILS</span> <ChevronRight size={12} />
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden p-8 bg-blue-600 rounded-2xl flex flex-col justify-center text-white"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-2 mb-4 whitespace-nowrap">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/80">Key Deliverables</h4>
          </div>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="text-xs font-medium flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Expertise = () => (
    <section id="expertise" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-blue-500 mb-6 font-display">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Strategic Pillars.</h3>
          <p className="text-slate-400 max-w-xl">
            A systematic approach to multi-modal logistics, enterprise data governance, and proactive operational BI.
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExpertiseCard 
          title="Operations & Supply Chain" 
          icon={Package} 
          items={["Logistics Performance Tracking", "SLA Compliance & Monitoring", "Last-mile Delivery Insights"]} 
        />
        <ExpertiseCard 
          title="BI & Dashboarding" 
          icon={BarChart3} 
          items={["Power BI Ecosystem Design", "Executive Decision Support", "Reporting Lifecycle Automation"]} 
        />
        <ExpertiseCard 
          title="Process Optimization" 
          icon={Zap} 
          items={["Workflow Refinement", "Audit Streamlining", "Manual Task Reduction"]} 
        />
        <ExpertiseCard 
          title="Stakeholder / PMO Delivery" 
          icon={Layers} 
          items={["Executive Alignment", "BI Governance Frameworks", "Cross-functional Leadership"]} 
        />
        <ExpertiseCard 
          title="Business Impact" 
          icon={TrendingUp} 
          items={["Revenue Uplift Analysis", "Cost Avoidance Modeling", "ROI Quantification"]} 
        />
      </div>
    </div>
  </section>
);

const Experience = () => {
  const experiences = [
    {
      company: "FedEx",
      role: "Data Analyst",
      period: "DEC 2024 — APR 2026",
      desc: "Spearheading BI modernization and operational analytics for 500+ cases. Developed zip-level risk models contributing to $90M EBIT impact. Automated audit workflows for 4+ regional teams.",
      impact: ["$90M EBIT Impact Contribution", "Salesforce BI Adoption", "Audit Cycle Automation"]
    },
    {
      company: "IABG",
      role: "Data Analyst & Visualization Specialist",
      period: "FEB 2023 — MAR 2024",
      desc: "Defined project patterns that fueled new strategic initiatives. Optimized large-scale database retrieval (10K+ records) and delivered automated reporting for high-security defense projects.",
      impact: ["Database Speed +40%", "Strategic PMO Support"]
    },
    {
      company: "Cerebrate Solutions",
      role: "Campaign & Data Analyst",
      period: "SEPT 2020 — FEB 2021",
      desc: "Drove sales and customer support efficiency through predictive campaign analysis. Translated marketing raw data into actionable segmentation and conversion models.",
      impact: ["Conversion Optimization", "Segmentation Modeling"]
    },
    {
      company: "Capgemini",
      role: "Operations & IT Consultant",
      period: "SEPT 2017 — MARCH 2020",
      desc: "Engineered data-driven workflows using PowerShell/SCCM. Consistently delivered complex IT-Ops projects with cross-team alignment and measurable throughput gains.",
      impact: ["Workflow Engineering", "Metric-led IT Service Delivery"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-500 mb-6">Experience</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Selected Narrative.</h3>
            <p className="text-slate-400 mb-8">
              A track record of driving tangible value in some of the world's most complex logistics networks.
              Bridging the gap between raw data and executive strategy.
            </p>
            <div className="p-6 bg-zinc-900/50 rounded-2xl border border-slate-800/50">
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-4 block underline underline-offset-4">Highlights & Recognition</div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">FedEx Spot Award</p>
                      <p className="text-[10px] text-zinc-500 mt-1">Knowledge Transfer & Capability Building Excellence</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Capgemini Extra Mile Award</p>
                      <p className="text-[10px] text-zinc-500 mt-1">Recognized for exceptional delivery and ownership</p>
                    </div>
                  </li>
                </ul>
            </div>
          </div>

          <div className="md:w-2/3 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative pl-8 border-l border-slate-800"
              >
                <div className="absolute -left-[5.5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div className="flex items-center gap-4">
                     <h3 className="text-2xl font-display font-bold text-white">
                        {exp.company}
                     </h3>
                     <span className="hidden md:block h-[1px] w-8 bg-slate-800" />
                     <span className="text-[10px] font-mono tracking-widest text-slate-500">{exp.period}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                    {exp.role}
                  </span>
                </div>
                <p className="text-slate-400 mb-6 max-w-2xl leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.impact.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-900 border border-slate-800 text-[9px] uppercase font-bold tracking-widest text-slate-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isFeatured = false }: { project: any; isFeatured?: boolean; key?: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative ${isFeatured ? 'h-[420px]' : 'h-[320px]'} w-full perspective-1000 group cursor-pointer`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 180, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 group-hover:border-blue-500/50 transition-colors shadow-2xl ${isFlipped ? 'pointer-events-none' : 'z-20'}`}>
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/20 to-zinc-950 z-10" />
          
          {/* Abstract Pattern as background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
             <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10" />
             <div className="p-8 font-display font-bold text-[8rem] text-white opacity-5 select-none leading-none">
                {project.title.charAt(0)}
             </div>
          </div>

          <div className="absolute top-6 left-6 z-20">
             <span className="px-3 py-1 bg-blue-600/10 text-blue-500 text-[10px] font-bold rounded-full border border-blue-500/20 uppercase tracking-tighter">
               {project.category}
             </span>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 z-20">
             <h3 className={`${isFeatured ? 'text-3xl' : 'text-xl'} font-display font-bold text-white mb-2`}>{project.title}</h3>
             <div className="flex gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag: string, i: number) => (
                  <span key={i} className="text-[9px] text-slate-500 font-mono">#{tag}</span>
                ))}
             </div>
             <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 group-hover:translate-x-2 transition-transform">
                EXAMINE BLUEPRINT <ChevronRight size={12} />
             </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-3xl p-8 bg-zinc-950 border border-blue-500/30 flex flex-col justify-center ${isFlipped ? 'z-30 pointer-events-auto' : 'pointer-events-none'}`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h4 className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Project Architecture</h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
             {project.desc || project.outcome}
          </p>
          {project.impact && (
            <div className="p-4 bg-blue-600/5 rounded-xl border border-blue-500/10">
               <span className="text-[10px] text-slate-500 uppercase block mb-1">Impact Delivered</span>
               <span className="text-white font-display font-bold text-lg">{project.impact}</span>
            </div>
          )}
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all"
            >
              Examine Blueprint <ExternalLink size={12} />
            </a>
          )}
          <div className="mt-8 flex flex-wrap gap-2">
             {project.tags.map((tag: string, i: number) => (
               <span key={i} className="px-2 py-1 bg-zinc-900 text-[9px] text-slate-400 font-mono rounded border border-white/5">{tag}</span>
             ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Strategic Revenue Engine",
      category: "Predictive Analytics",
      desc: "Engineered a high-fidelity revenue model consolidating disparate streams from Databricks and SQL Server. Translated complex data patterns into actionable C-suite strategy.",
      tags: ["SQL", "Power BI", "Databricks"],
      impact: "$90M ROI Impact"
    },
    {
      title: "Operational Analytics Transformation",
      category: "Operations Excellence",
      desc: "Built full-cycle operational analytics across 5k+ cases and 16k+ tasks, improving SLA compliance from 74% to 98% and reducing case aging by >50%.",
      tags: ["Salesforce", "CHM", "Excel"],
      impact: "SLA: 74% → 98%"
    },
    {
      title: "Enterprise BI Modernization",
      category: "Governance & Strategy",
      desc: "Led PMO for greenfield Power BI ecosystem. Architected Row-Level Security (RLS) and executive dashboards, eliminating redundant external licensing and manual reporting overhead.",
      tags: ["PMO", "RLS", "Power BI"],
      impact: "Zero License Waste"
    },
    { 
      title: "Retail Supply Chain Twin", 
      category: "Inventory Ops", 
      tags: ["Power BI", "SQL", "Logistics"], 
      desc: "End-to-end insights on regional profitability, return rates, and stockouts for global sports retail. Optimized inventory turnover through predictive stockout alerts.",
      impact: "Profit Gap Visibility",
      link: "https://github.com/prantikdatta/PowerBI_projects/tree/main/NA_RetailSupplyChainSalesAnalysis"
    },
    { 
      title: "Email Engagement Pulse", 
      category: "Comms Analytics", 
      tags: ["Power BI", "Sentiment Analysis"], 
      desc: "Surfaced sentiment patterns in Sales/Marketing for internal comms efficiency using NLP-driven extraction of engagement triggers.",
      impact: "Sentiment Mapping",
      link: "https://github.com/prantikdatta/PowerBI_projects/tree/main/Email%20Analysis%20Dataset%20-%20July%202024"
    },
    { 
      title: "Sports Equipment FinOps", 
      category: "Business Analysis", 
      tags: ["Power BI", "Financial Reporting", "DAX"], 
      desc: "Identified that labor costs dominate COGS and payroll/equipment are major OPEX drivers. Recommended efficiency automation to recover margins in loss-making nutrition categories.",
      impact: "OPEX Optimization",
      link: "https://github.com/prantikdatta/PowerBI_projects/tree/main/BusinessFinancialAnalysis_Aug24"
    },
    { 
      title: "Talent Performance Hub", 
      category: "People Analytics", 
      tags: ["Power BI", "Workforce Metrics"], 
      desc: "Reduced attrition risk through training impact analysis and tenure tracking for 10k+ employees. Visualized the correlation between career pathing and retention.",
      impact: "Attrition Reduction",
      link: "https://www.linkedin.com/posts/prantik-datta_eppd-activity-7255254351705706497-9m-6?utm_source=share&utm_medium=member_desktop"
    },
    { 
      title: "SQL Portfolio Lab", 
      category: "Data Engineering", 
      tags: ["SQL Server", "Data Cleaning", "ETL"], 
      desc: "Advanced exploration of global COVID-19 datasets using complex joins, CTEs, and automated cleaning scripts for research stakeholders.",
      impact: "ETL Automation",
      link: "https://github.com/prantikdatta/PortfolioProjects/blob/main/COV-19_DataExploration.sql"
    }
  ];

  const featured = projects.slice(0, 3);
  const archive = projects.slice(3);

  const scrollArchive = (direction: 'left' | 'right') => {
    const container = document.getElementById('archive-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-500 mb-6 font-display">Portfolio Highlights</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Selected Implementations.</h3>
            <p className="text-slate-400 max-w-xl">
              From global supply chain modernization to strategic revenue consolidation, these are the blueprints of impact.
            </p>
          </div>
        </div>

        {/* Featured Flip Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {featured.map((p, i) => (
            <ProjectCard key={i} project={p} isFeatured={true} />
          ))}
        </div>

        {/* Archive Slider */}
        <div className="relative pt-12 border-t border-white/5">
           <div className="flex items-center justify-between mb-12 px-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-blue-500" />
                <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Project Archive</h4>
              </div>
              <div className="flex items-center gap-4">
                 <button 
                  onClick={() => scrollArchive('left')}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer"
                 >
                   <ChevronRight className="rotate-180" size={14} />
                 </button>
                 <button 
                  onClick={() => scrollArchive('right')}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer"
                 >
                   <ChevronRight size={14} />
                 </button>
              </div>
           </div>
           
           <div 
            id="archive-container"
            className="flex gap-8 overflow-x-auto hide-scrollbar pb-12 snap-x snap-mandatory px-2 scroll-smooth"
           >
              {archive.map((p, i) => (
                <div key={i} className="w-[340px] md:w-[420px] shrink-0 snap-start">
                   <ProjectCard project={p} />
                </div>
              ))}
              <div className="w-32 shrink-0" />
           </div>
        </div>
      </div>
    </section>
  );
};

const MetricFlipCard = ({ metric }: { metric: any; key?: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[200px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center text-center p-6 bg-zinc-900 border border-white/5 rounded-2xl group-hover:border-blue-500/30 transition-all">
          <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
            <Counter value={metric.value} />
          </div>
          <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40">{metric.label}</div>
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-blue-600 rounded-2xl p-8 flex flex-col justify-center text-white"
          style={{ transform: "rotateY(180deg)" }}
        >
           <p className="text-sm font-medium leading-relaxed italic">
             "{metric.detail}"
           </p>
        </div>
      </motion.div>
    </div>
  );
};

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    const numericPart = value.match(/\d+/);
    if (numericPart) {
      const target = parseInt(numericPart[0]);
      const prefix = value.substring(0, value.indexOf(numericPart[0]));
      const suffix = value.substring(value.indexOf(numericPart[0]) + numericPart[0].length);
      
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = progress * (2 - progress);
        const current = Math.floor(easeProgress * target);
        
        setDisplayValue(`${prefix}${current}${suffix}`);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [value]);

  return <span>{displayValue}</span>;
};

const Impact = () => {
  const metrics = [
    { 
      value: "$90M", 
      label: "EBIT Impact", 
      detail: "Directly attributable revenue optimizations and cost avoidance identified through strategic BI suites." 
    },
    { 
      value: "50%", 
      label: "Efficiency Gain", 
      detail: "Significant reduction in case aging and resolution latency across global logistics operations." 
    },
    { 
      value: "98%", 
      label: "SLA Compliance", 
      detail: "Led enterprise BI modernization as PMO, governing cross-functional delivery and architecting a greenfield Power BI ecosystem with RLS and executive dashboards, eliminating external licensing." 
    },
    { 
      value: "468 hrs", 
      label: "Annual Savings", 
      detail: "Systematic elimination of manual reporting through automated ETL and RLS-enabled dashboards." 
    },
  ];

  return (
    <section id="impact" className="py-24 bg-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient italic">Impact by Design.</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Metrics are the objective validation of data-to-decision frameworks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <MetricFlipCard key={i} metric={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackCard = ({ stack }: { stack: any; key?: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = stack.icon;

  return (
    <div 
      className="relative h-[220px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all group-hover:border-blue-500/30">
           <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
              <Icon size={24} strokeWidth={1.5} />
           </div>
           <h4 className="text-white text-[10px] font-bold uppercase tracking-wider">{stack.name}</h4>
           <div className="mt-4 flex items-center gap-1 text-[8px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>EXPLORE STACK</span> <ChevronRight size={10} />
           </div>
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-blue-600 rounded-2xl p-6 flex flex-col justify-center"
          style={{ transform: "rotateY(180deg)" }}
        >
           <h5 className="text-white/60 text-[9px] font-bold uppercase tracking-widest mb-3 border-b border-white/20 pb-2">Integrated Tools</h5>
           <ul className="space-y-2">
              {stack.techs.map((t: string, j: number) => (
                <li key={j} className="text-[11px] font-bold text-white flex items-center gap-2">
                   <div className="w-1 h-1 bg-white/60 rounded-full" />
                   {t}
                </li>
              ))}
           </ul>
        </div>
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  const stacks = [
    { name: "Programming & Querying", techs: ["Python", "SQL", "R"], icon: Code2 },
    { name: "Analytics & BI", techs: ["Power BI", "MS Excel"], icon: LayoutDashboard },
    { name: "Data & Cloud Ecosystem", techs: ["AWS Ecosystem", "Databricks", "Redshift", "Snowflake"], icon: Database },
    { name: "Enterprise Systems", techs: ["Salesforce", "SCCM", "SAP Hana"], icon: Briefcase },
    { name: "AI & GenAI", techs: ["Prompt Engineering", "LLM Workflows", "Claude", "OpenAI"], icon: Sparkles },
    { name: "Capabilities", techs: ["PMO", "Stakeholder Mgmt", "Executive Reporting"], icon: Target },
    { name: "Global Business Domains", techs: ["Logistics", "Marketing", "Consulting", "Defense"], icon: Globe2 },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-6">The Technical Arsenal</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
               A systematic toolkit engineered for multi-modal logistics, enterprise data governance, and proactive operational BI.
            </p>
          </div>
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stacks.map((s, i) => (
              <TechStackCard key={i} stack={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-zinc-900 border border-slate-800 p-6 rounded-2xl cursor-pointer group hover:border-blue-500 transition-all overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-white transition-colors">{label}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          className="text-slate-700"
        >
          <ChevronRight size={18} />
        </motion.div>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-6 border-t border-slate-800"
        >
          {href ? (
            <a 
              href={href} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xl font-display font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-3"
            >
              {value} <ExternalLink size={16} className="text-slate-600" />
            </a>
          ) : (
            <p className="text-xl font-display font-bold text-white selection:bg-blue-500 selection:text-white">
              {value}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0A0B0E] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-500 mb-6">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
              Let's Build the <br />
              <span className="text-slate-700 italic">Next Intelligence.</span>
            </h3>
            <p className="text-slate-400 max-w-md text-lg font-light leading-relaxed mb-10">
              Available for strategic consulting, full-stack BI infrastructure design, or high-impact operational leadership.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-white transition-colors">Currently Based in Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-ping" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-white transition-colors">Global Availability for High-Value Ops</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            <ContactItem 
              icon={Mail} 
              label="Email" 
              value="prantikdatta@gmail.com" 
              href="mailto:prantikdatta@gmail.com"
            />
            <ContactItem 
              icon={Activity} 
              label="Mobile" 
              value="+91 9867-883791" 
              href="tel:+919867883791"
            />
            <ContactItem 
              icon={Linkedin} 
              label="LinkedIn" 
              value="prantik-datta" 
              href="https://www.linkedin.com/in/prantik-datta/"
            />
            <ContactItem 
              icon={Github} 
              label="GitHub" 
              value="prantikdatta" 
              href="https://github.com/prantikdatta"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
    <footer className="mt-8 py-12 bg-zinc-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-600">
         <div>P. Datta // Professional Portfolio</div>
         <div>Based in Mumbai • Available for Consultation</div>
         <div className="text-slate-400 hover:text-blue-400 mt-4 md:mt-0 cursor-pointer transition-colors">[ prantikdatta@gmail.com ]</div>
      </div>
    </footer>
);

const About = () => (
  <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
       <div className="w-full lg:w-1/2">
          <div className="relative">
             <motion.div 
               whileHover={{ scale: 1.01 }}
               className="aspect-[16/9] lg:aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative group shadow-2xl"
             >
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000"
                  alt="Data Analytics Visualization"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-70 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/[0.05] font-display text-[10rem] lg:text-[15rem] font-bold pointer-events-none select-none">DATA</div>
                
                {/* Overlay content - made more prominent */}
                <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12 xl:pr-24 z-20">
                   <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-[1px] bg-blue-500" />
                      <div className="text-[10px] uppercase font-bold tracking-widest text-blue-500">Analysis Philosophy</div>
                   </div>
                   <h4 className="text-2xl lg:text-4xl text-white font-display font-bold leading-tight drop-shadow-lg group-hover:text-blue-400 transition-colors">Narratives over rows. <br />Impact over activity.</h4>
                   <p className="text-slate-200 text-sm mt-4 max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-light">
                      Translating complex mathematical models into strategic business narratives that drive C-suite decisions. I focus on the "why" behind the metrics.
                   </p>
                </div>
             </motion.div>
             
             <div className="absolute -right-12 -bottom-12 p-8 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-3xl hidden 2xl:block max-w-[320px] z-30 transform hover:scale-105 transition-transform duration-500">
                <div className="text-[10px] uppercase font-bold tracking-widest text-blue-500 mb-4">Strategic Core</div>
                <p className="text-base text-slate-300 font-light leading-relaxed italic border-l-2 border-blue-600/30 pl-4">
                  "Data is the silent witness to the health of an organization. My goal is to give it a strategic voice."
                </p>
             </div>
          </div>
       </div>

       <div className="w-full lg:w-1/2">
          <h2 className="text-xs uppercase tracking-widest font-bold text-blue-500 mb-6 font-display">Biography</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">Prantik Datta // <span className="text-slate-600">Data to Decisions.</span></h3>
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
             <p>
                I am a Data & Analytics professional with over <span className="text-white font-medium">5.8 years of experience</span> across logistics, defense, enterprise, and IT environments. I combine hands-on technical depth with a Master’s in Web and Data Science to solve multi-dimensional business problems.
             </p>
             <p>
                From FedEx operational analytics to IABG strategic project patterns, I specialize in translating raw data into <span className="text-white font-medium">high-fidelity BI dashboards</span>, predictive risk models, and automated governance systems.
             </p>
             <p>
                I thrive at the intersection of Python, SQL, and Power BI—building for <span className="text-blue-400">scale, governance, and measurable outcomes.</span>
             </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:gap-12 mt-12 border-t border-slate-900 pt-10">
             <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 block mb-3">Academic Background</span>
                <span className="text-white font-medium text-sm">M.Sc Web & Data Science</span>
             </div>
             <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 block mb-3">Global Certifications</span>
                <div className="flex flex-col gap-4 mt-2">
                  <div>
                    <p className="text-white font-medium text-sm">Google Data Analytics Professional</p>
                    <p className="text-[10px] text-zinc-500 underline decoration-blue-500/30 underline-offset-4">Coursera</p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Six Sigma Yellow Belt</p>
                    <p className="text-[10px] text-zinc-500 underline decoration-blue-500/30 underline-offset-4">CSSC</p>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative text-zinc-400 bg-[#0A0B0E] selection:bg-blue-500/20 selection:text-blue-200">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Impact />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
