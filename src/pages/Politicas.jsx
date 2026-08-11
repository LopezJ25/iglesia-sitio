import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CHURCH_NAME } from '../data/content.js';
import { ultimaActualizacion, politicaPrivacidad, terminosCondiciones } from '../data/politicas.js';

const tabs = [
  { id: 'privacidad', label: 'Privacidad', data: politicaPrivacidad },
  { id: 'terminos', label: 'Términos y condiciones', data: terminosCondiciones },
];

export default function Politicas() {
  const location = useLocation();
  const initialTab = tabs.find((t) => t.id === location.hash.replace('#', ''))?.id || 'privacidad';
  const [active, setActive] = useState(initialTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  const current = tabs.find((t) => t.id === active);

  return (
    <div className="min-h-screen bg-cream text-text font-sans">
      <header className="px-6 md:px-12 py-6 flex items-center justify-between max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-sm font-accent text-brown hover:opacity-70">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
        <span className="font-display text-lg font-semibold text-brown">{CHURCH_NAME}</span>
      </header>

      <main className="px-6 md:px-12 py-10 max-w-4xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-brown mb-2">Políticas del sitio</h1>
        <p className="text-sm text-muted mb-10">Última actualización: {ultimaActualizacion}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-accent font-semibold transition-colors ${
                active === t.id ? 'bg-rust text-white' : 'bg-sand text-brown'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {current.data.map((block, i) => (
            <div key={i}>
              <h2 className="font-subheading italic text-xl font-semibold text-rust mb-2">{block.titulo}</h2>
              <p className="leading-relaxed text-muted">{block.texto}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-10 text-xs" style={{ color: '#7A93AE' }}>
        © {new Date().getFullYear()} {CHURCH_NAME}. Todos los derechos reservados.
      </footer>
    </div>
  );
}
