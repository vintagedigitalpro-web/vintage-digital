# Fiche d'Inspiration Design & Système UI : Vintage Digital

Cette fiche synthétise les meilleures pratiques esthétiques et techniques issues de nos **5 dépôts de design & ressources de développement** pour concevoir des sites vitrines à l'effet **"Wow"** immédiat.

---

## 1. Palette de Couleurs HSL & Gradients Premium

Nous évitons les couleurs brutes (rouge pur, bleu pur). Nous privilégions les palettes HSL harmonieuses et les modes sombres élégants.

### A. Les Fonds & Couleurs de Base
* **Fond Sombre Premium (Glassmorphism ready)** : `hsl(222, 47%, 6%)` (Bleu nuit très profond).
* **Fond Clair Élégant** : `hsl(210, 20%, 98%)` (Gris-bleu très doux).
* **Texte Principal** : `hsl(210, 40%, 96%)` ou `hsl(222, 47%, 11%)`.
* **Couleur d'Accentuation (Call to Action)** : `hsl(263, 70%, 50%)` (Indigo vibrant) ou `hsl(142, 70%, 45%)` (Émeraude technologique).

### B. Dégradés de Caractère (CSS Gradients)
Pour illuminer vos boutons, cartes ou titres de section héro :
```css
/* Dégradé Aurora Borealis */
background: linear-gradient(135deg, hsl(263, 70%, 50%) 0%, hsl(190, 90%, 50%) 100%);

/* Dégradé Coucher de Soleil Sophistiqué */
background: linear-gradient(135deg, hsl(325, 80%, 48%) 0%, hsl(260, 70%, 50%) 100%);
```

---

## 2. Typographie & Alignement Premium

### A. Les Fontes recommandées (Google Fonts)
* **Outfit** (Sans-Serif) : Moderne, géométrique, parfaite pour les titres et headers.
* **Inter** (Sans-Serif) : La référence absolue pour le texte de labeur, hautement lisible même à petite taille.
* **Playfair Display** (Serif) : Pour des PME artisanales haut de gamme ou des professions libérales (avocats, finance) afin d'ajouter une touche de tradition et de prestige.

### B. Hiérarchie Typographique
```css
h1 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: hsl(210, 40%, 80%);
}
```

---

## 3. Composants CSS Premium (Vanilla CSS)

Voici des extraits CSS réutilisables pour impressionner le client dès la première version de sa maquette.

### A. La Carte en Verre Dépoli (Glassmorphism)
Parfait pour un mode sombre élégant et aérien :
```css
.card-glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-glass:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 12px 40px 0 rgba(263, 70, 50, 0.2); /* Halo Indigo de survol */
}
```

### B. Le Bouton d'Action avec Micro-Animation
```css
.btn-wow {
  background: linear-gradient(135deg, hsl(263, 70%, 50%) 0%, hsl(190, 90%, 50%) 100%);
  color: #ffffff;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-wow:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(263, 70, 50, 0.4);
}

.btn-wow:active {
  transform: scale(0.98);
}
```

---

## 4. Ressources d'Assets Visuels (Design Resources)

* **Icônes vectorielles** : Utiliser exclusivement **Phosphor Icons** ou **Tabler Icons** pour leur finesse et leur harmonie visuelle.
* **Illustrations abstraites** : Utiliser des formes 3D douces issues de **Spline** ou des illustrations vectorielles épurées de **unDraw** modifiées avec notre couleur HSL principale.
* **Générateurs de formes organiques (Blobs)** : Utiliser des générateurs comme **blobmaker.app** pour casser la rigidité des grilles rectangulaires.
