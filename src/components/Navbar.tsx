import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Branches', path: '/branches' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:px-12 h-20 border-b border-slate-100 bg-white/70 backdrop-blur-md',
        isScrolled ? 'shadow-sm' : ''
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-teal-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200/50 group-hover:scale-105 transition-transform">
             S
           </div>
           <div>
             <span className="font-bold text-xl tracking-tight text-slate-800">
               Science Squad<span className="text-blue-600">.</span>
             </span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'transition-all duration-300',
                location.pathname === link.path
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'hover:text-blue-600 cursor-pointer'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
           <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-200 transition-all text-center">
             Book Free Demo
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-slate-50 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute top-full left-0 right-0 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-3 text-base font-medium',
                  location.pathname === link.path
                    ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50/50'
                    : 'text-slate-600 hover:text-blue-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-4 flex flex-col gap-3">
               <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-orange-200 transition-all text-center">
                 Book Free Demo
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
