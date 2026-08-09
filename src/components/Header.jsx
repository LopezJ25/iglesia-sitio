import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CHURCH_NAME, navLinks } from '../data/content.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          {logoOk && (
            <img
              src="/logo.PNG"
              alt={`Logo de ${CHURCH_NAME}`}
              className="h-14 md:h-16 w-auto object-contain"
              onError={() => setLogoOk(false)}
            />
          )}
          <span className="font-display text-xl md:text-2xl font-semibold text-brown">{CHURCH_NAME}</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium font-accent text-brown hover:opacity-70 transition-opacity"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button className="lg:hidden text-brown" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menú">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-cream">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-base font-medium py-1 text-brown">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
