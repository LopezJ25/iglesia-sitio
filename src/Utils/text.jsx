// Convierte texto escrito así: "Hola **mundo** como estas"
// en: Hola <strong>mundo</strong> como estas
//
// Uso: {renderConNegritas(miTexto)}   dentro de cualquier <p> o <span>

export function renderConNegritas(texto) {
  if (!texto) return texto;
  const partes = texto.split(/(\*\*.*?\*\*)/g);

  return partes.map((parte, i) => {
    if (parte.startsWith('**') && parte.endsWith('**')) {
      return <strong key={i}>{parte.slice(2, -2)}</strong>;
    }
    return parte;

  });
  
}