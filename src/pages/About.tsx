import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Milestone, Users, Trophy, ChevronRight, Atom, Calculator, Brain, Laptop, Globe } from 'lucide-react';
import { AnimatedQuote } from '../components/AnimatedQuote';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const yIcon1 = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const yIcon2 = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const yIcon3 = useTransform(scrollYProgress, [0, 1], [0, 2500]);
  const yIcon4 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const yIcon5 = useTransform(scrollYProgress, [0, 1], [0, 1800]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-white min-h-screen">
      {/* Animated Background Gradients & Floating Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y: y1 }} className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px]">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full bg-gradient-to-br from-blue-300/40 via-teal-200/40 to-purple-300/40 blur-[100px] opacity-80 mix-blend-multiply"
          />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px]">
          <motion.div
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -60, 30, 0],
              y: [0, 40, -20, 0],
              rotate: [0, -60, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full bg-gradient-to-tr from-purple-300/40 via-pink-200/40 to-orange-200/40 blur-[100px] opacity-80 mix-blend-multiply"
          />
        </motion.div>

        <motion.div style={{ y: y3 }} className="absolute top-[30%] left-[40%] w-[500px] h-[500px]">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 30, -30, 0],
              y: [0, -20, 40, 0],
              rotate: [0, 40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full bg-gradient-to-br from-cyan-200/40 to-indigo-200/40 blur-[90px] opacity-70 mix-blend-multiply"
          />
        </motion.div>

        {/* Floating Educational Icons */}
        {[
          { Icon: Atom, color: "text-blue-500", size: "w-20 h-20", initial: { top: "15%", left: "10%" }, yTransform: yIcon1, animate: { y: [0, 30, -20, 0], x: [0, 20, 0], rotate: [0, 30, -20, 0] }, duration: 12 },
          { Icon: Calculator, color: "text-purple-500", size: "w-16 h-16", initial: { top: "25%", right: "15%" }, yTransform: yIcon2, animate: { y: [0, -30, 20, 0], x: [0, -20, 0], rotate: [0, -30, 20, 0] }, duration: 15 },
          { Icon: Brain, color: "text-orange-500", size: "w-24 h-24", initial: { bottom: "25%", left: "20%" }, yTransform: yIcon3, animate: { y: [0, 40, -30, 0], x: [0, 30, 0], rotate: [0, 40, -20, 0] }, duration: 18 },
          { Icon: Laptop, color: "text-teal-500", size: "w-20 h-20", initial: { bottom: "40%", right: "10%" }, yTransform: yIcon4, animate: { y: [0, -20, 40, 0], x: [0, 30, 0], rotate: [0, 20, -30, 0] }, duration: 14 },
          { Icon: Globe, color: "text-pink-400", size: "w-20 h-20", initial: { top: "45%", left: "45%" }, yTransform: yIcon5, animate: { y: [0, 30, -30, 0], x: [0, 40, 0], rotate: [0, -40, 30, 0] }, duration: 16 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.2] filter drop-shadow-2xl"
            style={{ ...item.initial as any, y: item.yTransform }}
          >
            <motion.div
              animate={item.animate}
              transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
            >
              <item.Icon className={`${item.size} ${item.color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative pt-24 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
      <div className="relative z-10 text-center mb-20 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Science Squad</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-3xl mx-auto"
        >
          Empowering the next generation with concept clarity, confidence, and future-ready skills.
        </motion.p>
      </div>

      {/* Grid Sections */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 mb-24">
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100"
        >
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            To provide high-quality, concept-driven education that bridges the gap between traditional academics and modern competitive requirements, ensuring complete holistic development for every student.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-slate-900/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <Eye className="w-8 h-8 text-indigo-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            To be India's most trusted educational hub where learning is experiential, skills are practical, and every child is prepared to lead the future confidently.
          </p>
        </motion.div>
      </div>

      {/* Animated Quote Section */}
      <AnimatedQuote />

      {/* Ideology & Why We Started */}
      <div className="relative z-10 mb-24 space-y-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Ideology</h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "Education is not just about memorizing facts; it's about training the mind to think, solve, and create."
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 md:p-16 rounded-3xl border border-orange-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-orange-500 fill-orange-500" /> Why We Started
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We noticed a massive gap in how students were learning. Conventional methods focused too much on rote learning and ignored critical thinking or concept clarity.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Science Squad was born out of the passion to change this narrative. We combine expert mentorship, smart technology, and a student-centric approach to build true confidence.
            </p>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6">
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 text-center space-y-3 relative overflow-hidden group"
             >
               <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300/30 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
               <Trophy className="w-10 h-10 text-yellow-600 mx-auto drop-shadow-sm relative z-10" />
               <div className="font-extrabold text-3xl text-slate-900 relative z-10">1000+</div>
               <div className="text-xs text-slate-600 font-bold tracking-widest uppercase relative z-10">Achievers</div>
             </motion.div>
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 text-center space-y-3 relative overflow-hidden group"
             >
               <div className="absolute top-0 left-0 w-24 h-24 bg-blue-300/30 rounded-full blur-2xl -ml-10 -mt-10 transition-transform group-hover:scale-150" />
               <Users className="w-10 h-10 text-blue-600 mx-auto drop-shadow-sm relative z-10" />
               <div className="font-extrabold text-3xl text-slate-900 relative z-10">50+</div>
               <div className="text-xs text-slate-600 font-bold tracking-widest uppercase relative z-10">Mentors</div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline (Interactive Milestones) */}
      <div className="relative z-10 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Journey</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
          {[
            { year: "2018", title: "The Beginning", desc: "Started with a vision to transform education in a small classroom in Kolkata." },
            { year: "2020", title: "Digital Shift", desc: "Successfully transitioned to hybrid learning, reaching students across regions safely." },
            { year: "2022", title: "Expansion", desc: "Opened new branches and introduced advanced Skill Development courses like Robotics." },
            { year: "2024", title: "Trusted Brand", desc: "Recognized as a leading premier institute in North Kolkata with over 1000+ success stories." }
          ].map((item, index) => (
            <div key={item.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Milestone className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-slate-900 text-xl">{item.title}</h3>
                  <time className="font-mono text-sm text-blue-500 font-bold">{item.year}</time>
                </div>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-20 bg-slate-900/95 backdrop-blur-md rounded-3xl p-12 text-center text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Shape the Future?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">Join us to experience a revolutionary way of learning.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:9433249032" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors">
            Talk to Our Experts
          </a>
          <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
            Book Free Counseling <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
