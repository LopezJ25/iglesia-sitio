import { Link } from 'react-router-dom';

import { MapPin, Clock, Instagram, Facebook, Youtube, Users, MessageCircle } from 'lucide-react';
import { CHURCH_NAME, contacto } from '../data/content.js';
import { whatsappLink } from './WhatsAppButton.jsx';

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">Te esperamos</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-brown">Visítanos</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted">
                <MapPin size={18} className="text-rust" />
                <span>{contacto.Direccion}</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Clock size={18} className="text-rust" />
                <span>{contacto.Horario}</span>
              </div>
               <div className="flex items-center gap-3 text-muted">
                <Clock size={18} className="text-rust" />
                <span>{contacto.Lunes}</span>
              </div>
               
               <div className="flex items-center gap-3 text-muted">
                <Clock size={18} className="text-rust" />
                <span>{contacto.Jueves}</span>
              </div>

               <div className="flex items-center gap-3 text-muted">
                <Clock size={18} className="text-rust" />
                <span>{contacto.Viernes}</span>
              </div>
              
            </div>
            <div className="flex gap-4 mt-6 text-brown">
              <a href='https://www.instagram.com/fuentedeesperanza30/' target='_black' rel='noopener noreferrer' ><Instagram size={20} className='hover:opacity-70 transition-opacity'/> </a>
             <a href='https://www.facebook.com/share/1HgrjchJZ8/' target='_black' rel='noopener noreferrer' ><Facebook size={20} className='hover:opacity-70 transition-opacity'/> </a>
              <a href='https://www.youtube.com/@julioalonzo6243' target='_black' rel='noopener noreferrer' ><Youtube size={20} className='hover:opacity-70 transition-opacity'/> </a>

            </div>
          </div>

          <div className="rounded-2xl p-8 flex flex-col items-start justify-center bg-brown">
            <Users size={26} className="text-gold" />
            <h3 className="font-subheading italic text-xl font-semibold mt-4 mb-2 text-cream">¿Tienes preguntas?</h3>
            <p className="text-sm mb-6" style={{ color: '#D8C9B8' }}>
              Escríbenos directamente por WhatsApp, con gusto te atendemos.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold font-accent flex items-center gap-2 bg-whatsapp"
              style={{ color: '#0b2b17' }}
            >
              <MessageCircle size={18} /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

          <footer className="text-center py-10">
            <p className="font-script text-2xl text-rust mb-2">Con Fe y Amor</p>
            <div className="flex items-center justify-center gap-4 text-xs font-accent mb-3" style={{ color: '#7A93AE' }}>
              <Link to="/politicas#privacidad" className="hover:underline">Privacidad</Link>
              <span>·</span>
              <Link to="/politicas#terminos" className="hover:underline">Términos</Link>
              <span>·</span>
            </div>
            <p className="text-xs" style={{ color: '#7A93AE' }}>
              © {new Date().getFullYear()} {CHURCH_NAME}. Todos los derechos reservados.
            </p>
    </footer>
    </>
  );
}
