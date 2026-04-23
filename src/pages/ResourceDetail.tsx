import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function ResourceDetail() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type && id) {
      setLoading(true);
      fetch(`https://swapi.info/api/${type}/${id}`)
        .then((res) => res.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [type, id]);

  if (loading) {
    return (
      <div className="flex-grow flex justify-center items-center mt-20">
        <p className="text-yellow-500 text-2xl font-bold animate-pulse">Décodage des archives stellaires...</p>
      </div>
    );
  }

  if (!data) {
    return <div className="text-white text-center mt-20">Ressource introuvable.</div>;
  }

  // swapi utilise "title" pour les films et "name" pour les personnages/planètes
  const title = data.title || data.name;

  return (
    <div className="container mx-auto px-6 py-12 flex-grow relative z-10 hover:z-20">
      <button 
        onClick={() => navigate(-1)} 
        className="text-yellow-500 hover:text-yellow-400 mb-8 inline-block font-bold cursor-pointer bg-transparent border-none"
      >
        &larr; Retour
      </button>
      
      <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-yellow-500 shadow-[0_0_30px_rgba(254,218,74,0.1)]">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-widest text-center text-yellow-500 drop-shadow-lg">
          {title}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* On affiche dynamiquement toutes les propriétés qui sont des chaînes de caractères */}
          {Object.entries(data).map(([key, value]) => {
            // On évite d'afficher les URL et les dates trop complexes pour rester propre
            if (typeof value === "string" && !key.includes('url') && key !== 'created' && key !== 'edited') {
              return (
                <div key={key} className="border-b border-gray-800 pb-3">
                  <span className="text-gray-400 capitalize font-semibold tracking-wider">
                    {key.replace(/_/g, ' ')} : 
                  </span>
                  <span className="text-white font-medium ml-2">{value}</span>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ResourceDetail;
