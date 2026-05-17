import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  return (
    <motion.a
      href="https://wa.me/919433249032"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 transition-all group flex items-center justify-center cursor-pointer"
    >
      <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Chat with us!
        <div className="absolute top-1/2 -mt-1 -right-2 border-4 border-transparent border-l-white"></div>
      </span>
    </motion.a>
  );
}
