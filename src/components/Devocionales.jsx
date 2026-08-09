import { BookOpen } from 'lucide-react';
import { devocionales } from '../data/content.js';

export default function Devocionales() {
  return (
    <section id="devocionales" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-sand" />
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">Alimento diario</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-brown">Devocionales</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {devocionales.map((d, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/60">
              <div className="flex items-center gap-2 mb-3 text-rust">
                <BookOpen size={16} />
                <span className="text-xs font-semibold uppercase tracking-wide">{d.date}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-brown">{d.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{d.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
