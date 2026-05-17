import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';

const branches = [
  {
    name: "Science Squad Dankuni",
    address: "32, Ramkrishna Para, Monoharpur, Gobra, Dankuni, West Bengal - 712311",
    phone: "9433249032",
    whatsapp: "9433249032",
    mapLink: "https://share.google/wyGIkosprH5gVsl0f",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    timing: "Mon - Sat: 9:00 AM - 8:00 PM"
  },
  {
    name: "Science Squad Jadavpur",
    address: "2F, 29/A, Raja SC Mullick Rd, Ananda Pally, Bapuji Nagar, Jadavpur, Kolkata, West Bengal 700032",
    phone: "8481842879",
    whatsapp: "7003344577",
    mapLink: "https://share.google/xnNZmEhU8CSVyoC0p",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    timing: "Mon - Sat: 9:00 AM - 8:00 PM"
  }
];

export function Branches() {
  return (
    <div className="pt-24 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Campuses</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          State-of-the-art infrastructure designed to foster focused learning and creativity.
        </motion.p>
      </div>

      <div className="space-y-16">
        {branches.map((branch, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={branch.image} 
                alt={branch.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-slate-900 shadow-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" /> Location {idx + 1}
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">{branch.name}</h2>
               
               <div className="space-y-6 flex-grow mb-8 text-slate-700">
                 <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <p className="leading-relaxed pt-2">{branch.address}</p>
                 </div>
                 
                 <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                     <Clock className="w-5 h-5" />
                   </div>
                   <p className="font-medium">{branch.timing}</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                  <a 
                    href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-xl font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a 
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-green-50 hover:bg-green-500 hover:text-white text-green-600 rounded-xl font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a 
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-600 rounded-xl font-semibold transition-colors"
                  >
                    <Navigation className="w-4 h-4" /> Directions
                  </a>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
