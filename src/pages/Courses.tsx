import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Atom, Code, Megaphone, Brain, Presentation, GraduationCap, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  {
    title: "Academic Courses",
    desc: "Comprehensive coaching for school students to build unshakeable foundations.",
    color: "blue",
    courses: [
      {
        title: "Classes 6–12 (CBSE / ICSE / ISC)",
        icon: <BookOpen className="w-8 h-8 text-blue-500" />,
        tags: ["Maths", "Science", "All Boards", "Concept Clarity"],
        desc: "Focused preparation for board exams ensuring high scores and deep understanding.",
        details: "We transition from generalized learning to specific subject expertise, focusing on critical thinking and structured answering patterns required for top board scores.",
        outcomes: [
          "Board exam readiness",
          "In-depth subject understanding",
          "Time management and exam strategies"
        ]
      }
    ]
  },
  {
    title: "Competitive Exam Courses",
    desc: "Rigorous, rank-oriented preparation for India's toughest state and national exams.",
    color: "pink",
    courses: [
      {
        title: "IIT-JEE (Main + Advanced)",
        icon: <GraduationCap className="w-8 h-8 text-pink-500" />,
        tags: ["Advanced Problem Solving", "Mock Tests", "Rank-Oriented"],
        desc: "Expert guidance to crack Engineering entrance exams with confidence.",
        details: "A comprehensive program featuring highly qualified mentors, exhaustive study material, and regular testing to build speed, accuracy, and advanced problem-solving capabilities.",
        outcomes: [
          "Mastery of complex application-based problems",
          "High accuracy and speed in timed conditions",
          "Top ranks in national engineering exams"
        ]
      },
      {
        title: "NEET Preparation",
        icon: <Atom className="w-8 h-8 text-pink-500" />,
        tags: ["Biology Mastery", "NCERT Focus", "Mock Tests"],
        desc: "Intensive medical coaching focused heavily on NCERT line-by-line mastery.",
        details: "Specifically designed for medical aspirants, this course emphasizes rote and conceptual learning of NCERT, alongside extensive objective practice sessions.",
        outcomes: [
          "Line-by-line retention of NCERT textbooks",
          "Exceptional accuracy in objective questions",
          "Preparation for medical college admittances"
        ]
      },
      {
        title: "WBJEE Preparation",
        icon: <Calculator className="w-8 h-8 text-pink-500" />,
        tags: ["State Level Focus", "Engineering", "High Speed Accuracy"],
        desc: "Targeted coaching for West Bengal Joint Entrance Examination.",
        details: "An exhaustive course structured tightly around the state-level WBJEE syllabus to maximize state engineering ranks.",
        outcomes: [
          "Complete coverage of WBJEE syllabus",
          "Familiarity with state exam patterns",
          "Top state rankings"
        ]
      },
      {
        title: "JELET Coaching",
        icon: <Code className="w-8 h-8 text-pink-500" />,
        tags: ["Lateral Entry", "Diploma to Degree", "Technical"],
        desc: "Strategic preparation for lateral entry into engineering degree programs.",
        details: "Focused on diploma students desiring to enter second-year B.Tech programs. We bridge the gap and elevate technical foundations.",
        outcomes: [
          "Seamless transition to degree level",
          "Solid foundation in applied mathematics and mechanics",
          "Success in joint entrance lateral entry tests"
        ]
      },
      {
        title: "JENPAS Coaching",
        icon: <Brain className="w-8 h-8 text-pink-500" />,
        tags: ["Nursing", "Paramedical", "Allied Sciences"],
        desc: "Dedicated preparation for Nursing and Paramedical entrance tests.",
        details: "A meticulously planned pathway for aspiring nurses and allied health professionals through focused biological and life sciences training.",
        outcomes: [
          "In-depth grasp of nursing test paramedical syllabus",
          "High score achievement in JENPAS (UG)",
          "Readiness for elite paramedical institutes"
        ]
      }
    ]
  }
];

const categoryColors: Record<string, { bg: string, text: string, dec: string, active: string, shadow: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-500', dec: 'bg-blue-50', active: 'bg-blue-100', shadow: 'hover:shadow-blue-500/40 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-500', dec: 'bg-pink-50', active: 'bg-pink-100', shadow: 'hover:shadow-pink-500/40 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', dec: 'bg-orange-50', active: 'bg-orange-100', shadow: 'hover:shadow-orange-500/40 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]' },
};

function CourseCard({ course, category, idx }: { course: any, category: any, idx: number, key?: React.Key }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = categoryColors[category.color] || categoryColors.blue;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Tilt limit to 10 degrees to keep it subtle
    const rX = -((mouseY / height) - 0.5) * 15; 
    const rY = ((mouseX / width) - 0.5) * 15;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      style={{ perspective: 1000 }}
      className="h-full z-10"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 ${colors.shadow} transition-shadow duration-300 group flex flex-col h-full relative overflow-hidden will-change-transform`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Decoration */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${colors.dec} rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-[2.5] origin-top-right opacity-50 group-hover:opacity-100`} />
        
        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full pointer-events-none group-hover:pointer-events-auto relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 relative border border-white/50 shadow-sm group-hover:scale-110 transition-transform duration-300 z-10`}>
            <motion.div 
               animate={isHovered ? { scale: [1, 1.15, 1] } : { scale: 1 }} 
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {course.icon}
            </motion.div>
            {isHovered && (
              <motion.div 
                className={`absolute inset-0 rounded-2xl ${colors.bg} -z-10`}
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
          <p className="text-slate-600 mb-6">{course.desc}</p>
          
          <div className="space-y-2 mb-2 flex-grow">
            {course.tags.slice(0, 3).map((tag: string) => (
              <div key={tag} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 ${colors.text} shrink-0`} />
                {tag}
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-1 text-sm font-semibold mt-4 mb-4 ${colors.text} hover:opacity-80 transition-opacity pointer-events-auto w-fit`}
          >
            {isExpanded ? 'Hide Details' : 'View Course Details'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-2 pb-6 border-t border-slate-100/50 mt-2 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {course.details}
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Learning Outcomes</h4>
                    <ul className="space-y-2">
                      {course.outcomes?.map((outcome: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                           <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.bg.replace('50', '500')}`} />
                           {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
           </AnimatePresence>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-6 border-t border-slate-100/50" style={{ transform: "translateZ(20px)" }}>
            <Link to="/contact" className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-colors text-center shadow-lg hover:shadow-blue-500/30 w-full pointer-events-auto">
              Enroll Now
            </Link>
            <a href="https://wa.me/919433249032" target="_blank" rel="noopener noreferrer" className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] font-semibold text-sm hover:bg-[#25D366] hover:text-white transition-colors text-center flex items-center justify-center gap-1 w-full pointer-events-auto">
              WhatsApp <ArrowRight className="w-4 h-4 mt-px" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Courses() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const yIcon1 = useTransform(scrollYProgress, [0, 1], [0, 1800]);
  const yIcon2 = useTransform(scrollYProgress, [0, 1], [0, -1500]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-white min-h-screen">
      {/* Animated Background Gradients & Floating Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[5%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300/40 via-purple-300/40 to-pink-300/40 blur-[100px] opacity-80 mix-blend-multiply"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-blue-300/40 to-teal-300/40 blur-[100px] opacity-80 mix-blend-multiply"
        />
        <motion.div
          style={{ y: y3 }}
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, -30, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-orange-300/40 via-pink-300/40 to-red-300/40 blur-[100px] opacity-80 mix-blend-multiply"
        />
        
        {/* Floating Icons */}
        <motion.div style={{ y: yIcon1, top: '15%', left: '10%' }} className="absolute opacity-[0.15] filter drop-shadow-2xl text-blue-500">
          <BookOpen className="w-24 h-24" />
        </motion.div>
        <motion.div style={{ y: yIcon2, top: '40%', right: '15%' }} className="absolute opacity-[0.15] filter drop-shadow-2xl text-pink-500">
          <Atom className="w-32 h-32" />
        </motion.div>
        <motion.div style={{ y: yIcon1, bottom: '25%', left: '20%' }} className="absolute opacity-[0.15] filter drop-shadow-2xl text-orange-500">
          <Calculator className="w-20 h-20" />
        </motion.div>
        <motion.div style={{ y: yIcon2, bottom: '15%', right: '10%' }} className="absolute opacity-[0.15] filter drop-shadow-2xl text-teal-500">
          <Code className="w-24 h-24" />
        </motion.div>
      </div>

      <div className="relative pt-24 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="relative z-10 text-center mb-20 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
        >
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Premium Courses</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-3xl mx-auto"
        >
          Designed by experts to ensure every student reaches their absolute highest potential.
        </motion.p>
      </div>

      <div className="relative z-10 space-y-32">
        {categories.map((category) => (
          <div key={category.title} className="relative">
            <div className="mb-12 border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{category.title}</h2>
                <p className="text-slate-500 mt-2 text-lg">{category.desc}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {category.courses.map((course, idx) => (
                <CourseCard key={course.title} course={course} category={category} idx={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
