import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800/60 shadow-lg transition-colors duration-500">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(254,218,74,0.3)] mb-4 md:mb-0 hover:drop-shadow-[0_0_20px_rgba(254,218,74,0.6)] transition-all duration-500 flex-1">
          <Link to="/">Star Wars Explorer</Link>
        </h1>
        <nav className="flex-1 flex justify-center">
          <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-sm uppercase tracking-widest font-semibold text-gray-600 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(254,218,74,0.8)] py-2 block">Accueil</Link>
            </li>
            <li>
              <Link to="/films" className="hover:text-yellow-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(254,218,74,0.8)] py-2 block">Films</Link>
            </li>
            <li>
              <Link to="/personnages" className="hover:text-yellow-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(254,218,74,0.8)] py-2 block">Personnages</Link>
            </li>
            <li>
              <Link to="/planetes" className="hover:text-yellow-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(254,218,74,0.8)] py-2 block">Planètes</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end mt-4 md:mt-0">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 border cursor-pointer
            hover:shadow-[0_0_15px_rgba(254,218,74,0.5)] active:scale-95
            bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
          >
            {theme === 'light' ? 'Mode Côté Obscur' : 'Mode Côté Lumineux'}
          </button>
        </div>
      </div>
    </header>
  );
}
