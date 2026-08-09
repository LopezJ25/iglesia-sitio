import { Sparkles } from 'lucide-react';
import { historiasBiblicas } from '../data/content.js';

export default function HistoriasBiblicas() {
  return (
    <section id="historias" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-sand" />
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">La Palabra en historias</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-brown">Historias bíblicas</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {historiasBiblicas.map((h, i) => (
            <div key={i} className="rounded-2xl p-7 bg-white/60 flex gap-5">
              <Sparkles size={22} className="text-rust flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-subheading italic text-xl font-semibold text-brown">{h.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-rust">{h.ref}</p>
                <p className="text-sm leading-relaxed text-muted">{h.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
