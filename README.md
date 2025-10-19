# Académie 

Application web moderne pour une académie de formation, construite avec React, TypeScript, et Tailwind CSS.

## 🚀 Technologies Utilisées

- **Frontend**: React avec TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router

## 📁 Structure du Projet

```
centre-gen/
├── src/
│   ├── components/         # Composants React
│   │   ├── About.tsx      # Section À propos
│   │   ├── Contact.tsx    # Formulaire de contact
│   │   ├── Courses.tsx    # Liste des formations
│   │   ├── CourseDetails.tsx  # Page détaillée d'une formation
│   │   ├── Features.tsx   # Section caractéristiques
│   │   ├── Footer.tsx     # Pied de page
│   │   ├── Header.tsx     # En-tête avec navigation
│   │   ├── Hero.tsx       # Section d'accueil
│   │   └── ...
│   ├── data/
│   │   └── courses.ts     # Données des formations
│   ├── App.tsx            # Composant racine
│   └── main.tsx          # Point d'entrée
├── public/               # Assets statiques
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Fonctionnalités Principales

### Navigation et Interface

- **Header Réactif**: Navigation adaptative avec menu burger sur mobile
- **Animations Fluides**: Transitions et animations avec Framer Motion
- **Design Responsive**: Interface adaptée à tous les écrans

### Gestion des Formations

- **Liste des Formations**: Affichage paginé des formations disponibles
- **Détails des Formations**: Page dédiée avec:
  - Informations détaillées
  - Gallerie d'images
  - Formulaire d'inscription
  - Certifications

### Interface Utilisateur

- **Mode RTL**: Support complet de l'arabe (Right-to-Left)
- **Thème Personnalisé**: Couleurs et styles cohérents
- **Composants Interactifs**: Boutons, formulaires et cartes animés

## 🛠 Configuration du Développement

1. **Installation des dépendances**
   ```bash
   npm install
   ```

2. **Lancement du serveur de développement**
   ```bash
   npm run dev
   ```

3. **Construction pour la production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

L'application utilise les breakpoints Tailwind:
- Mobile: < 768px
- Tablette: 768px - 1024px
- Desktop: > 1024px

## 🎨 Thème et Personnalisation

Les couleurs principales sont configurées dans `tailwind.config.js`:
- Primary: Couleur principale de la marque
- Secondary: Accents et éléments secondaires
- Background: Fond clair (lightbg)

## 📦 Composants Principaux

### Header (`Header.tsx`)
- Navigation principale
- Menu responsive
- Bannière d'annonces

### Courses (`Courses.tsx`)
- Liste des formations
- Filtrage et pagination
- Cards interactives

### CourseDetails (`CourseDetails.tsx`)
- Détails complets des formations
- Formulaire d'inscription
- Galerie d'images

### Features (`Features.tsx`)
- Points forts de l'académie
- Animations au scroll
- Design moderne

## 🔄 État et Gestion des Données

- Données des formations dans `src/data/courses.ts`
- Types TypeScript pour la validation
- État local React avec hooks

## 🚀 Déploiement

1. Construire l'application :
   ```bash
   npm run build
   ```

2. Les fichiers de production seront dans le dossier `dist/`

## 📚 Bonnes Pratiques

- Code TypeScript fortement typé
- Composants React modulaires
- Styles Tailwind organisés
- Animations optimisées pour les performances

## 🔧 Maintenance

Pour mettre à jour les dépendances :
```bash
npm update
```

Pour les tests :
```bash
npm run test
```

## 📝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Copyright © 2025 Academy
