# Guide Technique : Configuration & Prompts du Logo Creator

Ce guide explique comment installer, configurer et tirer profit de notre dépôt **`logocreator-main`** pour générer des logos de qualité professionnelle pour vos prospects PME.

---

## 1. Procédure de Lancement Local (Quickstart)

Pour faire tourner le générateur de logo sur votre machine :

1. Accédez au répertoire du projet :
   ```bash
   cd "c:\Users\souti\Documents\Vintage Digital\logocreator-main\logocreator-main"
   ```
2. Créez un fichier `.env` à partir de `.env.example` :
   ```bash
   copy .env.example .env
   ```
3. Renseignez les variables d'environnement dans le fichier `.env` :
   * **`TOGETHER_API_KEY`** : Votre clé API Together AI (pour exécuter le modèle Flux Pro 1.1).
   * **`UPSTASH_REDIS_REST_URL`** & **`UPSTASH_REDIS_REST_TOKEN`** : Clés de base de données Redis pour le rate limiting.
   * **`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`** & **`CLERK_SECRET_KEY`** : Identifiants Clerk pour l'authentification (facultatif pour un usage interne strict en modifiant les routes).
4. Installez les dépendances du projet :
   ```bash
   npm install
   ```
5. Lancez le serveur de développement local :
   ```bash
   npm run dev
   ```
6. Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000).

---

## 2. Guide de Prompting pour Logos Professionnels (Flux Pro 1.1)

Pour générer des logos propres, épurés et facilement intégrables sur un site vitrine, suivez ces règles de prompting. Les modèles d'IA génèrent d'excellents résultats lorsque les prompts sont précis et écrits en anglais.

### Les Mots-Clés Indispensables :
* **Style** : `minimalist vector logo`, `flat design`, `clean geometric shapes`, `corporate branding icon`.
* **Arrière-plan** : `isolated on pure white background`, `no shadows`, `no gradient background`.
* **Éléments indésirables (Negative prompts / Avertissements)** : Éviter les textures 3D complexes, les arrière-plans détaillés, les ombres portées et le texte trop long (le modèle Flux Pro 1.1 sait écrire du texte court, mais restez simple : 1 à 2 mots maximum).

---

## 3. Exemples de Prompts par Secteur d'Activité

Voici des templates de prompts prêts à l'emploi. Remplacez `[Nom]` par le nom de l'entreprise cible :

### A. Secteur du Bâtiment & BTP (Durand & Fils)
> **Prompt** : *A minimalist geometric vector logo for a high-end construction company named "Durand BTP". Clean lines depicting a stylish roof and modern architectural structure, flat design, deep blue and copper accents, isolated on white background, corporate, professional.*

### B. Secteur de la Restauration (Bistrot Gourmet)
> **Prompt** : *A modern elegant vector logo for a French bistro named "Le Gourmet". A stylish chef's hat combined with a vintage wine glass outline, flat minimalist design, elegant gold and dark slate colors, white background, high-end branding.*

### C. Métiers du Droit & Conseil (Cabinet Lemaire)
> **Prompt** : *A corporate sophisticated vector logo for a law firm named "Lemaire & Associes". Geometric scales of justice combined with a clean serif letter "L", flat minimalist design, royal blue and bronze colors, isolated on white background, premium feel.*

### D. Artisanat & Menuiserie (Atelier du Bois)
> **Prompt** : *A clean organic vector logo for an artisanal carpentry workshop named "Atelier du Bois". A stylized oak leaf merged with a modern geometric circular saw blade, flat design, natural green and warm timber brown colors, isolated on white background.*
