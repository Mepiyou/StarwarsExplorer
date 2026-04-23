import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Films from "./pages/Films";
import Personnages from "./pages/Personnages";
import Planetes from "./pages/Planetes";
import Accueil from "./pages/Accueil";
import ResourceDetail from "./pages/ResourceDetail"; // Import du nouveau composant

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Effet étoilé en arrière-plan */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 dark:opacity-40 pointer-events-none transition-opacity duration-500"></div>

      {/* Le Header reste fixé en haut pour toutes les routes */}
      <Header />

      {/* C'est ici que React Router va "injecter" le contenu selon l'URL */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/films" element={<Films />} />
        <Route path="/personnages" element={<Personnages />} />
        <Route path="/planetes" element={<Planetes />} />
        {/* Route dynamique modifiée pour inclure le type (people, planets, films) et l'id */}
        <Route path="/ressource/:type/:id" element={<ResourceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
