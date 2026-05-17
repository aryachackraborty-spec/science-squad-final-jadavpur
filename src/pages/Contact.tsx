import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Map, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What curriculums do you offer?",
    answer: "We offer comprehensive coaching for multiple boards (CBSE, ICSE, and State Boards) alongside targeted preparation for competitive exams like JEE, NEET, and various Olympiads."
  },
  {
    question: "What is the admission procedure?",
    answer: "You can start by filling out the enquiry form on this page or reaching out via WhatsApp. Our admission counselors will then schedule a brief interaction and assess the student to place them in the most suitable batch."
  },
  {
    question: "Where are your branches located?",
    answer: "Our primary branch is located at 32, Ramkrishna Para, Monoharpur, Gobra, Dankuni, West Bengal - 712311. It's equipped with modern amenities and experienced faculty."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, all our enrolled students receive comprehensive, up-to-date study materials, along with access to regular mock tests and doubt-clearing sessions."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-24 max-w-4xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-600">Quick answers to questions you may have about our curriculum, admission process, and locations.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 ml-4 rounded-full bg-slate-50 p-2 text-slate-500"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    className: '',
    course: '',
    branch: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `*New Admission Enquiry*%0A%0A*Student Name:* ${formData.studentName}%0A*Parent Name:* ${formData.parentName}%0A*Phone:* ${formData.phone}%0A*Class:* ${formData.className}%0A*Interested Course:* ${formData.course}%0A%0A_Sent via Website_`;
    window.open(`https://wa.me/919433249032?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center mb-16 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Connect</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Have questions? Our experts are here to help you make the right choice for your child's future.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
        
        {/* Contact Info Panel */}
        <div className="lg:col-span-2 bg-slate-900 text-white p-10 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[80px] rounded-full point-events-none" />
           <h3 className="text-3xl font-bold mb-8 text-white relative z-10">Contact Information</h3>
           
           <div className="space-y-8 relative z-10">
             <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                 <Phone className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-1">Call for Admissions</p>
                 <a href="tel:9433249032" className="text-lg font-semibold hover:text-blue-400 transition-colors">9433249032</a>
               </div>
             </div>

             <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                 <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white transition-colors" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-1">WhatsApp Support</p>
                 <a href="https://wa.me/919433249032" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-green-400 transition-colors">+91 9433249032</a>
               </div>
             </div>

             <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-pink-500 transition-colors">
                 <Mail className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-1">Email Us</p>
                 <a href="mailto:sciencesquad@gmail.com" className="text-lg font-semibold hover:text-pink-400 transition-colors break-all">sciencesquad@gmail.com</a>
               </div>
             </div>

             <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                 <MapPin className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-1">Head Office</p>
                 <p className="text-base font-medium text-slate-300 leading-relaxed">
                   32, Ramkrishna Para, Monoharpur, Gobra,<br />Dankuni, West Bengal - 712311
                 </p>
               </div>
             </div>
           </div>

           {/* Decorative elements */}
           <div className="absolute bottom-10 right-10 opacity-10">
             <Map className="w-32 h-32" />
           </div>
        </div>

        {/* Enquiry Form */}
        <div className="lg:col-span-3 p-10 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            Admission Enquiry Form
            <div className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></div>
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Student Name *</label>
                <input 
                  required
                  type="text" name="studentName" onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  placeholder="Enter student name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Parent Name *</label>
                <input 
                  required
                  type="text" name="parentName" onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  placeholder="Enter parent name"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                <input 
                  required
                  type="tel" name="phone" onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Current Class *</label>
                <select 
                  required name="className" onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors appearance-none"
                >
                  <option value="">Select Class</option>
                  <option value="Class 1-5">Class 1 to 5</option>
                  <option value="Class 6-8">Class 6 to 8</option>
                  <option value="Class 9-10">Class 9 to 10</option>
                  <option value="Class 11-12">Class 11 to 12</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Interested Course *</label>
                <select 
                  required name="course" onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors appearance-none"
                >
                  <option value="">Select Course</option>
                  <option value="Academic Coaching">Classes 6–12 (CBSE / ICSE / ISC)</option>
                  <option value="JEE Preparation">IIT-JEE (Main + Advanced)</option>
                  <option value="NEET Preparation">NEET Preparation</option>
                  <option value="WBJEE Preparation">WBJEE Preparation</option>
                  <option value="JELET Coaching">JELET Coaching</option>
                  <option value="JENPAS Coaching">JENPAS Coaching</option>
                </select>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group w-full"
              >
                Send via WhatsApp <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
          </form>
        </div>

      </div>

      <FAQAccordion />
    </div>
  );
}
