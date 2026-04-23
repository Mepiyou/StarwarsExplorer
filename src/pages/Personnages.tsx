import { useEffect, useState } from "react";
import Card from "../components/Card";

export interface Personnage {
  name: string;
  birth_year: string;
  url: string; // Ajout de l'URL pour la redirection
}

export default function Personnages() {
  const [personnages, setPersonnages] = useState<Personnage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://swapi.info/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPersonnages(data);
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
        Les <span className="text-yellow-500">Personnages</span>
      </h2>

      {/* Barre de recherche */}
      {!loading && (
        <div className="flex justify-center mb-10">
          <input 
            type="text" 
            placeholder="Rechercher un personnage..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:shadow-[0_0_15px_rgba(254,218,74,0.3)] transition-all duration-300"
          />
        </div>
      )}

      {loading ? (
        <p className="text-center text-yellow-500 text-xl font-bold animate-pulse">
          Recherche des signatures vitale dans la galaxie...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personnages
            .filter((perso) =>
              perso.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((perso) => {
              // Extraction de l'ID depuis l'URL
              const parts = perso.url.split('/').filter(Boolean);
              const id = parts[parts.length - 1];

              return (
                <Card 
                  key={perso.name}
                  titre={perso.name}
                  description={`Année de naissance : ${perso.birth_year}`}
                  linkUrl={`/ressource/people/${id}`}
                />
              );
            })}
        </div>
      )}
    </main>
  );
}
