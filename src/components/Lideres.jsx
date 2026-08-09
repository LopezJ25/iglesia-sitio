import { leaders } from '../data/content.js';

export default function Lideres() {
  return (
    <section id="lideres" className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">Quiénes nos guían</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-brown">Nuestros líderes</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l, i) => (
            <div key={i} className="rounded-2xl p-6 bg-sand">
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl font-semibold mb-4 text-white bg-rust">
                {l.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <h3 className="font-subheading italic text-lg font-semibold text-brown">{l.name}</h3>
              <p className="text-sm font-semibold mb-3 text-rust">{l.role}</p>
              <p className="text-sm leading-relaxed text-muted">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
