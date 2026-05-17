import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Users, MapPin, Award, CheckCircle2, ChevronRight, GraduationCap, Microscope, Code, LineChart, Globe, Phone, MessageCircle, Atom, Calculator, Brain, Laptop } from 'lucide-react';
import gsap from 'gsap';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Magnetic } from '../components/Magnetic';

function AnimatedCounter({ value }: { value: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/(\d+)(.*)/);
    if (!match) return;

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2];

    const obj = { val: 0 };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        gsap.to(obj, {
          val: targetNumber,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.innerText = Math.floor(obj.val) + suffix;
            }
          }
        });
        observer.disconnect();
      }
    });

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const match = value.match(/(\d+)(.*)/);
  const suffix = match ? match[2] : '';

  return <span ref={numberRef}>0{suffix}</span>;
}

const courses = [
  {
    title: "Academic Coaching",
    desc: "Class 1–12 (ALL SUBJECTS) • CBSE / ICSE / ISC / WB Board",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    gradient: "from-blue-500/20 to-blue-600/20",
    border: "group-hover:border-blue-500",
  },
  {
    title: "Competitive Exams",
    desc: "JEE Main & Advanced • NEET • Olympiads",
    icon: <Microscope className="w-8 h-8 text-pink-500" />,
    gradient: "from-pink-500/20 to-pink-600/20",
    border: "group-hover:border-pink-500",
  },
  {
    title: "Skill Development",
    desc: "Digital Marketing • Robotics • Abacus • Spoken English",
    icon: <Code className="w-8 h-8 text-orange-500" />,
    gradient: "from-orange-500/20 to-orange-600/20",
    border: "group-hover:border-orange-500",
  }
];

const features = [
  "Small batch sizes",
  "Personal mentorship",
  "Smart classrooms",
  "Weekly assessments",
  "Doubt-clearing sessions",
  "Experienced faculty",
  "Hybrid learning support",
  "Future-ready education"
];

const stats = [
  { label: "Students", value: "1000+", icon: <Users className="w-6 h-6 text-blue-500" /> },
  { label: "Parent Satisfaction", value: "95%", icon: <Star className="w-6 h-6 text-yellow-500" /> },
  { label: "Expert Mentors", value: "50+", icon: <Award className="w-6 h-6 text-purple-500" /> },
  { label: "Student Experience", value: "5⭐", icon: <Star className="w-6 h-6 text-orange-500" /> },
];

export function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"] },
        links: { color: "#94a3b8", distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { direction: "none" as const, enable: true, outModes: { default: "bounce" as const }, random: false, speed: 1.5, straight: false },
        number: { density: { enable: true }, value: 60 },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute inset-0 z-[1] pointer-events-auto"
          />
        )}
        {/* Animated Background Gradients & Floating Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300/30 via-teal-200/30 to-purple-300/30 blur-[100px] opacity-70 mix-blend-multiply"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-300/30 via-pink-200/30 to-orange-200/30 blur-[100px] opacity-70 mix-blend-multiply"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/30 blur-[80px] opacity-60 mix-blend-multiply"
          />

          {/* Floating Educational Icons */}
          {[
            { Icon: Atom, color: "text-blue-500", size: "w-16 h-16", initial: { top: "15%", left: "10%" }, animate: { y: [0, 30, 0], x: [0, 15, 0], rotate: [0, 20, -15, 0] }, duration: 8 },
            { Icon: Calculator, color: "text-purple-500", size: "w-12 h-12", initial: { top: "25%", right: "15%" }, animate: { y: [0, -25, 0], x: [0, -15, 0], rotate: [0, -20, 10, 0] }, duration: 10 },
            { Icon: Brain, color: "text-orange-500", size: "w-20 h-20", initial: { bottom: "20%", left: "20%" }, animate: { y: [0, 40, 0], x: [0, 20, 0], rotate: [0, 25, -10, 0] }, duration: 12 },
            { Icon: Laptop, color: "text-teal-500", size: "w-14 h-14", initial: { bottom: "35%", right: "8%" }, animate: { y: [0, -30, 0], x: [0, 25, 0], rotate: [0, 15, -15, 0] }, duration: 9 },
            { Icon: Globe, color: "text-pink-400", size: "w-16 h-16", initial: { top: "40%", left: "45%" }, animate: { y: [0, -20, 0], x: [0, 30, 0], rotate: [0, -30, 20, 0] }, duration: 11 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute opacity-[0.15] filter drop-shadow-2xl"
              style={item.initial as any}
              animate={item.animate}
              transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
            >
              <item.Icon className={`${item.size} ${item.color}`} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full w-fit mb-6"
              >
                <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Admissions Open 2026 - Limited Seats</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[44px] sm:text-[54px] font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-6"
              >
                Kolkata’s Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Science</span> Coaching for CBSE | ICSE | JEE | NEET
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-slate-500 mb-8 max-w-[500px] leading-relaxed"
              >
                Concept clarity + Top results + Personal attention
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Magnetic>
                  <a href="tel:9433249032" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-200">
                    <span>Call Now</span>
                    <Phone className="w-5 h-5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://wa.me/919433249032" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
                    <MessageCircle className="w-5 h-5 text-teal-600" />
                    <span>WhatsApp Now</span>
                  </a>
                </Magnetic>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex items-center gap-8"
              >
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                    +1k
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200"></div>
                <div>
                  <div className="flex text-orange-400">
                    <span className="text-xs tracking-wider">★★★★★</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">1,000+ Success Stories</p>
                </div>
              </motion.div>
            </div>
            
            {/* Right Content / Abstract Cards */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 h-[400px] lg:h-auto lg:min-h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20, y: -20, rotate: 0 }}
                  animate={{ opacity: 1, x: -48, y: 32, rotate: -6 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-72 p-6 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl shadow-blue-200/30 transform"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800">Academic Coaching</h3>
                  <p className="text-xs text-slate-500 mt-1">Class 1–12 (All Boards)</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-72 p-6 bg-white border border-slate-100 rounded-3xl shadow-2xl shadow-purple-200/30 z-20"
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 text-purple-600">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800">JEE & NEET</h3>
                  <p className="text-xs text-slate-500 mt-1">Rank-Oriented Preparation</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, x: 32, y: -32, rotate: 3 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="w-72 p-6 bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl shadow-teal-200/20 transform z-10"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-4 text-teal-600">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800">Skill Development</h3>
                  <p className="text-xs text-slate-500 mt-1">Robotics, Digital Marketing & Abacus</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-100 bg-white/50 backdrop-blur-sm py-8 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-sm md:text-base font-semibold text-slate-600">
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5-Star Learning Experience</div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-blue-500" /> 1000+ Students Trained</div>
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-red-500" /> Premium Branch in Dankuni</div>
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-purple-500" /> Trusted by Parents</div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">The Future of Education is Here</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Science Squad is Kolkata’s fastest-growing premium coaching institute offering academic excellence, competitive exam preparation, and future-ready skill education under expert mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Programs</h2>
             <p className="text-lg text-slate-500">Holistic development from school to career.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`group relative bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden cursor-pointer ${course.border} transition-colors`}
                >
                   <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.gradient} rounded-bl-full -z-10 transition-transform group-hover:scale-110`} />
                   <div className="bg-white/80 p-3 rounded-2xl inline-block shadow-sm mb-6 border border-slate-50">
                     {course.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed mb-6">
                     {course.desc}
                   </p>
                   <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                     Explore Program <ArrowRight className="w-5 h-5 ml-1" />
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-16 md:w-1/2">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Parents Trust Us?</h2>
             <p className="text-slate-400 text-lg">We don't just teach. We mentor, guide, and shape careers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors flex flex-col items-center text-center gap-4"
                >
                  <div className="bg-slate-700 p-3 rounded-xl text-blue-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-200">{feature}</span>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-3"
              >
                 <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-2xl mb-2">
                   {stat.icon}
                 </div>
                 <h4 className="text-4xl font-extrabold text-slate-900">
                   <AnimatedCounter value={stat.value} />
                 </h4>
                 <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Your Child Deserves the Best Future 🚀</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-full flex items-center justify-center bg-white text-blue-700 font-bold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Enroll Today
            </Link>
            <a href="tel:9433249032" className="px-8 py-4 rounded-full flex items-center justify-center bg-orange-500 text-white font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-orange-400 hover:-translate-y-1 transition-all">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
