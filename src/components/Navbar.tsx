import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-lg' : 'py-6 border-b border-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-10 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] bg-clip-text text-transparent cursor-pointer">
          Portfolio.
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors">Contact</a>
          <a 
            href="#contact" 
            className="ml-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] text-white shadow-[0_4px_15px_rgba(0,242,254,0.3)] hover:shadow-[0_8px_25px_rgba(123,44,191,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-[#05050a]/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 z-[1001] animate-fade-up">
            <button 
              type="button" 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-white text-3xl p-2 bg-transparent border-0 cursor-pointer"
            >
              <FiX />
            </button>
            <a href="#home" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-[#9ca3af] hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-[#9ca3af] hover:text-white transition-colors">About</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-[#9ca3af] hover:text-white transition-colors">Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-[#9ca3af] hover:text-white transition-colors">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-[#9ca3af] hover:text-white transition-colors">Contact</a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 rounded-full font-semibold text-base bg-gradient-to-r from-[#00f2fe] to-[#7b2cbf] text-white shadow-lg"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
