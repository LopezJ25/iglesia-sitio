import { hitosHistoria } from '../data/content.js';
import { Link } from 'react-router-dom';

export default function Historia() {
  return (
    <section id="historia" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-sand" />
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">Nuestro camino</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 text-brown">Nuestra historia</h2>

        <div className="relative pl-8">
          <svg width="4" height="100%" className="absolute left-0 top-0 h-full" viewBox="0 0 4 600" preserveAspectRatio="none">
            <path
              d="M2,0 C2,150 2,150 2,300 C2,450 2,450 2,600"
              stroke="#B7472A"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
          <div className="space-y-14">
              {hitosHistoria.map((h, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[38px] top-1 w-3.5 h-3.5 rounded-full border-2 bg-cream border-rust" />
                  <h3 className="font-subheading italic text-xl font-semibold mb-1 text-rust">{h.year}</h3>
                  <p className="leading-relaxed max-w-2xl text-muted">{h.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/historia"
                className="inline-block px-7 py-3 rounded-full font-semibold font-accent border-2 border-rust text-rust hover:bg-rust hover:text-white transition-colors"
              >
                Leer la historia completa
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
