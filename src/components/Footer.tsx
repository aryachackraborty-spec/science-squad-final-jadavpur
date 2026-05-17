import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, GraduationCap, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 text-slate-600 pt-20 pb-10 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-teal-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200/50 group-hover:scale-105 transition-transform">
                S
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-slate-800">
                  Science Squad<span className="text-blue-600">.</span>
                </span>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Institute</p>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Kolkata's Most Trusted Learning Hub for Academics, Competitive Exams & Skill Development.
            </p>
            <div className="flex space-x-4">
              <a href="https://share.google/Vqos4irorirvtJSMY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://share.google/cljqDhVygH2tb1en6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-800 font-semibold mb-6 flex items-center gap-2">
               <span>Quick Links</span>
               <div className="h-px bg-slate-200 flex-1 ml-2"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'Testimonials', 'Branches', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`} className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-800 font-semibold mb-6 flex items-center gap-2">
               <span>Programs</span>
               <div className="h-px bg-slate-200 flex-1 ml-2"></div>
            </h3>
            <ul className="space-y-3">
              {['Academic Coaching (1-12)', 'JEE Main & Advanced', 'NEET & Olympiads', 'Robotics & Coding', 'Digital Marketing', 'Mastermind Abacus'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-800 font-semibold mb-6 flex items-center gap-2">
               <span>Contact Us</span>
               <div className="h-px bg-slate-200 flex-1 ml-2"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">9433249032</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">sciencesquad@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href="https://share.google/wyGIkosprH5gVsl0f" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                  32, Ramkrishna Para, Monoharpur, Gobra,<br/>Dankuni, West Bengal - 712311
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Science Squad. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
