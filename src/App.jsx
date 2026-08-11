import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Politicas from './pages/politicas.jsx';
import HistoriaCompleta from './pages/HistoriaCompleta.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/historia" element={<HistoriaCompleta />} />
      </Routes>
    </BrowserRouter>
  );
}



// import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';
// import Nosotros from './components/Nosotros.jsx';
// import Historia from './components/Historia.jsx';
// import Lideres from './components/Lideres.jsx';
// import Devocionales from './components/Devocionales.jsx';
// import Videos from './components/Videos.jsx';
// import HistoriasBiblicas from './components/HistoriasBiblicas.jsx';
// import Contacto from './components/Contacto.jsx';
// import WhatsAppButton from './components/WhatsAppButton.jsx';

// export default function App() {
//   return (
//     <div className="min-h-screen bg-cream text-text font-sans">
//       <Header />
//       <Hero />
//       <Nosotros />
//       <Historia />
//       <Lideres />
//       <Devocionales />
//       <Videos />
//        <HistoriasBiblicas /> 
//       <Contacto />
//       <WhatsAppButton />
//     </div>
//   );
// }
