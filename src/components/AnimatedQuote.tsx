import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

export function AnimatedQuote({ 
  quote = "Our goal is not just to teach, but to ignite a lifelong passion for learning and discovery in every student we mentor.", 
  author = "Founder, Science Squad" 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = quote.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative z-10 py-24 my-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 text-slate-100 opacity-60">
         <Quote size={160} fill="currentColor" />
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
           className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-10"
           variants={container}
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           ref={ref}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.25em]"
              variants={child}
            >
              {word === "ignite" || word === "passion" || word === "learning" ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          className="inline-flex flex-col items-center"
        >
          <div className="flex gap-2 mb-4">
             <div className="w-2 h-2 rounded-full bg-blue-600" />
             <div className="w-2 h-2 rounded-full bg-teal-500" />
             <div className="w-2 h-2 rounded-full bg-purple-500" />
          </div>
          <p className="text-lg font-bold text-slate-900 tracking-wide uppercase">{author}</p>
        </motion.div>
      </div>
    </div>
  );
}
