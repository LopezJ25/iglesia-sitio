import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CHURCH_NAME, historiaCompleta } from '../data/content.js';
import { renderConNegritas } from '../utils/text.jsx';

export default function HistoriaCompleta() {
  return (
    <div className="min-h-screen bg-cream text-text font-sans">
      <header className="px-6 md:px-12 py-6 flex items-center justify-between max-w-3xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-sm font-accent text-brown hover:opacity-70">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
        <span className="font-display text-lg font-semibold text-brown">{CHURCH_NAME}</span>
      </header>

      <main className="px-6 md:px-12 py-10 max-w-3xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">
          Nuestro camino
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-brown mb-10">
          Nuestra historia completa
        </h1>

        <div className="space-y-8">
          {historiaCompleta.map((bloque, i) => {
            if (bloque.type === 'lista') {
              return (
                <div key={i}>
                  <h2 className="font-subheading italic text-xl font-semibold text-rust mb-4">
                    {bloque.titulo}
                  </h2>
                  <ol className="space-y-2">
                    {bloque.items.map((persona, j) => (
                      <li key={j} className="flex items-baseline gap-3">
                        <span className="font-accent text-sm font-semibold text-rust w-6 shrink-0">
                          {j + 1}.
                        </span>
                        <span className="leading-relaxed text-muted">{renderConNegritas(persona)}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            }
            // por defecto, es un parrafo
            return (
              <p key={i} className="leading-relaxed text-muted">
                {renderConNegritas(bloque.texto)}
              </p>
            );
          })}
        </div>
      </main>

      <footer className="text-center py-10 text-xs" style={{ color: '#7A93AE' }}>
        © {new Date().getFullYear()} {CHURCH_NAME}. Todos los derechos reservados.
      </footer>
    </div>
  );
}