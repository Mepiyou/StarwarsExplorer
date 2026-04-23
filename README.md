# 🌌 Star Wars Explorer

Bienvenue dans **Star Wars Explorer**, une application web interactive permettant d'explorer les archives de la galaxie Star Wars (Films, Personnages, et Planètes). 

Ce projet est construit avec les dernières technologies de l'écosystème React pour offrir une expérience fluide, rapide et visuellement élégante.

## ✨ Fonctionnalités Principales

- **Exploration des Ressources** : Parcourez les listes complètes des films, personnages et planètes de la saga.
- **Recherche Instantanée** : Filtrez les résultats en temps réel grâce à une barre de recherche fluide.
- **Optimisation des Rendus** : Utilisation de `React.memo` sur les cartes pour éviter les re-rendus inutiles pendant la recherche et garantir des performances maximales.
- **Routage Dynamique** : Cliquez sur n'importe quelle ressource pour accéder à sa page de détails générée dynamiquement (ex: `/ressource/people/1`), avec un affichage générique s'adaptant à n'importe quelle donnée de l'API.
- **Mode Côté Obscur / Lumineux (Thème)** : Un système de thème global géré par l'API `Context` de React, permettant de basculer entre un thème sombre (par défaut) et un thème clair, sauvegardé automatiquement dans le navigateur.

## 🚀 Technologies Utilisées

- **React 19** : Bibliothèque UI avec les derniers Hooks (useState, useEffect, useContext, memo).
- **Vite** : Outil de build ultra-rapide pour le développement.
- **TypeScript** : Typage fort pour une meilleure robustesse du code et de l'autocomplétion.
- **Tailwind CSS v4** : Framework utilitaire pour un design sur mesure, intégrant la gestion du `dark mode` par classe de manière native.
- **React Router v7** : Gestion de la navigation côté client (SPA).
- **SWAPI (The Star Wars API)** : L'API `swapi.info` est utilisée pour récupérer l'ensemble des données de l'univers Star Wars.

## 🛠️ Installation et Lancement

1. **Cloner ou télécharger le projet**
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
4. Ouvrez votre navigateur sur l'adresse indiquée (généralement `http://localhost:5173`).

## 📁 Architecture Principale du Code

- `src/App.tsx` : Point d'entrée principal définissant les routes de l'application et la structure de base.
- `src/context/ThemeContext.tsx` : Fournisseur de contexte gérant l'état du thème clair/sombre.
- `src/components/Card.tsx` : Composant réutilisable et optimisé (`memo`) affichant un résumé de chaque ressource.
- `src/pages/` : Contient les différentes vues de l'application (`Films.tsx`, `Personnages.tsx`, `Planetes.tsx`, `ResourceDetail.tsx`).

---
*Que la Force soit avec votre code !* ⚔️
