import { ChevronDown, MessageCircle } from 'lucide-react';
import { CHURCH_NAME } from '../data/content.js';
import { whatsappLink } from './WhatsAppButton.jsx';

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden pt-40 pb-28 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,150,44,0.35), transparent 70%), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(183,71,42,0.15), transparent 70%)',
        }}
      />
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent font-accent">Bienvenido a nuestra casa</p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight font-semibold text-text">
          Un lugar para encontrar
          <br />
          luz, familia y propósito
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-muted">
          Somos {CHURCH_NAME}, una Iglesia Cristiana Evangélica afiliada al Concilio de las Asambleas de Dios de la República Dominicana, comprometida con la predicación y enseñanza de la Palabra de Dios, la formación de discípulos y el servicio integral a la comunidad.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#nosotros')}
            className="px-7 py-3.5 rounded-full font-semibold font-accent text-white bg-rust transition-transform hover:-translate-y-0.5"
          >
            Conócenos
          </button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full font-semibold font-accent border-2 border-brown text-brown transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> Escríbenos
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-16 opacity-60">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
