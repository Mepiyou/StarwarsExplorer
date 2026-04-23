import { Link } from "react-router";
import { memo } from "react";

type CardProps = {
  titre: string;
  sousTitre?: string;
  description?: string;
  linkUrl?: string; // Ajout de l'URL pour la redirection
};

// L'utilisation de memo() permet au composant Card de ne pas se re-rendre (update)
// si ses props n'ont pas changé. Ainsi, lors de la recherche, les cartes existantes
// restent stables et on évite les rendus inutiles.
const Card = memo(function Card({ titre, sousTitre, description, linkUrl = "#" }: CardProps) {
  // On utilise un élément "Link" si c'est une vraie URL, sinon on peut laisser un div/a
  return (
    <Link to={linkUrl} className="block p-6 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl hover:border-yellow-500 dark:hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(254,218,74,0.3)] transition-all duration-300 transform hover:-translate-y-2 group">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-300">
        {titre}
      </h3>
      {sousTitre && (
        <p className="text-yellow-600 dark:text-yellow-500 font-semibold mb-4 text-sm uppercase tracking-widest">
          {sousTitre}
        </p>
      )}
      {description && <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>}
    </Link>
  );
});

export default Card;
