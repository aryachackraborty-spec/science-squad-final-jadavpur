import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Riya's Mother",
    role: "Parent (Class 8)",
    text: "আমার মেয়ের পড়াশোনার confidence অনেক বেড়েছে। The teachers are extremely supportive and the weekly assessments really help.",
    rating: 5
  },
  {
    name: "Subham Das",
    role: "JEE Aspirant",
    text: "Best institute for both academics and competitive exams. The concept clarity they provide is unmatched in North Kolkata.",
    rating: 5
  },
  {
    name: "Sneha's Father",
    role: "Parent",
    text: "Robotics classes are amazing! My daughter loves going to the institute. It's a completely different learning environment.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Class 10 Student",
    text: "Science Squad helped me improve drastically in Mathematics. The doubt clearing sessions are a lifesaver before exams.",
    rating: 5
  },
  {
    name: "Priya Banerjee",
    role: "Parent",
    text: "Digital marketing classes are truly industry-level. Very practical and forward-thinking curriculum.",
    rating: 5
  },
  {
    name: "Rahul's Mother",
    role: "Parent (Class 6)",
    text: "আমার ছেলের confidence অনেক বেড়েছে। The mastermind abacus program is brilliant.",
    rating: 5
  }
];

const growthStories = [
  { student: "Ankita M.", subject: "Mathematics", before: "65%", after: "94%", exam: "Class 10 Boards" },
  { student: "Rohan S.", subject: "Physics", before: "55%", after: "88%", exam: "Class 12 Boards" },
  { student: "Ishita D.", subject: "Overall Rank", before: "Top 40", after: "Top 3", exam: "School Exams" },
];

export function Testimonials() {
  return (
    <div className="pt-24 pb-20 w-full overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
        >
          What Students & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Parents Say ❤️</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Don't just take our word for it. Hear from the families whose lives we've impacted.
        </motion.p>
      </div>

      {/* Infinite Marquee of Testimonials */}
      <div className="relative w-full flex flex-col gap-8 mb-32 rotate-[-1deg] scale-105">
        {/* Row 1: Left to right */}
        <div className="flex w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 px-3"
            animate={{ x: [0, -1035] }} // Adjust based on content width roughly
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] shrink-0 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-700 italic flex-grow mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                   <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                     {t.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 leading-tight">{t.name}</h4>
                     <p className="text-sm text-slate-500">{t.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to left */}
        <div className="flex w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 px-3"
            animate={{ x: [-1035, 0] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <div key={i} className="w-[350px] shrink-0 bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col text-white">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 italic flex-grow mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800">
                   <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg border border-slate-700">
                     {t.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                     <p className="text-sm text-slate-400">{t.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Growth Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Academic Transformations</h2>
          <p className="text-slate-500 mt-2">Real results from real students.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {growthStories.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <TrendingUp className="w-24 h-24" />
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{story.student}</h3>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{story.exam}</p>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                 <span className="text-slate-500 font-medium">Subject</span>
                 <span className="font-bold text-slate-900">{story.subject}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl mt-4">
                 <div className="text-center">
                   <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Before</p>
                   <p className="text-2xl font-bold text-slate-700">{story.before}</p>
                 </div>
                 <ArrowRight className="w-6 h-6 text-orange-500" />
                 <div className="text-center">
                   <p className="text-xs text-orange-500 font-semibold uppercase mb-1">After</p>
                   <p className="text-2xl font-bold text-green-600">{story.after}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
