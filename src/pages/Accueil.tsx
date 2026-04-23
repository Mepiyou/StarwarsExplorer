import { useNavigate } from "react-router";

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <main className="flex-grow container mx-auto px-6 py-12 relative z-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl p-10 backdrop-blur-xl bg-gray-900/30 border border-gray-800/50 rounded-3xl shadow-[0_0_50px_-15px_rgba(0,0,0,1)] hover:border-yellow-500/20 transition-all duration-700 group">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white group-hover:text-yellow-400 transition-colors duration-700 drop-shadow-lg uppercase tracking-tighter">
          Bienvenue
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
          Star Wars Explorer est une application immersive qui vous permet
          d'explorer l'univers étendu de{" "}
          <strong className="text-yellow-500 font-bold drop-shadow-[0_0_5px_rgba(254,218,74,0.4)]">
            Star Wars
          </strong>
          .
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => navigate("/films")}
            className="px-8 py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest rounded-full hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(254,218,74,0.5)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            Commencer l'exploration
          </button>
          <button 
            onClick={() => navigate("/personnages")}
            className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-bold uppercase tracking-widest rounded-full hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            Voir les personnages
          </button>
        </div>
      </div>
    </main>
  );
}