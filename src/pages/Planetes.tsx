import { useEffect, useState } from "react";
import Card from "../components/Card";

// 1. On crée notre Interface TypeScript pour "typer" nos données
export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string; // Ajout de l'URL pour la redirection
}

export default function Planetes() {
  // 2. On indique à useState que notre variable va contenir un tableau de Planet (Planet[])
  const [planetes, setPlanetes] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://swapi.info/api/planets")
      .then((res) => res.json())
      .then((data) => {
        // Puisque swapi.info renvoie tout d'un coup dans un tableau unique, plus besoin de boucle for/while !
        setPlanetes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex-grow container mx-auto px-6 py-12 relative z-10 hover:z-20">
      <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-8 uppercase tracking-widest drop-shadow-lg">
        Les <span className="text-yellow-500">Planètes</span>
      </h2>

      {/* Barre de recherche */}
      {!loading && (
        <div className="flex justify-center mb-10">
          <input 
            type="text" 
            placeholder="Rechercher une planète..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-[0_0_15px_rgba(254,218,74,0.3)] transition-all duration-300"
          />
        </div>
      )}

      {loading ? (
        <p className="text-center text-yellow-500 text-xl font-bold animate-pulse">
          Calcul des coordonnées hyper-spatiales pour TOUTES les planètes...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planetes
            .filter((planete) =>
              planete.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((planete) => {
              // Extraction de l'ID depuis l'URL
              const parts = planete.url.split('/').filter(Boolean);
              const id = parts[parts.length - 1];

              return (
                <Card 
                  key={planete.name}
                  titre={planete.name}
                  sousTitre={`Climat : ${planete.climate}`}
                  description={`Terrain : ${planete.terrain} | Pop: ${planete.population}`}
                  linkUrl={`/ressource/planets/${id}`}
                />
              );
            })}
        </div>
      )}
    </main>
  );
}
