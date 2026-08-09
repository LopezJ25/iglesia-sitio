import { CHURCH_NAME, nosotros } from '../data/content.js';

export default function Nosotros() {
  return (
    <section id="nosotros" className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">Quiénes somos</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5 text-brown">Qué es {CHURCH_NAME}</h2>
          <p className="leading-relaxed text-muted">{nosotros.descripcion}</p>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="font-subheading italic text-xl font-semibold mb-2 text-rust">Nuestra visión</h3>
            <p className="leading-relaxed text-muted">{nosotros.vision}</p>
          </div>
          <div>
            <h3 className="font-subheading italic text-xl font-semibold mb-2 text-rust">Nuestra misión</h3>
            <p className="leading-relaxed text-muted">{nosotros.mision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
