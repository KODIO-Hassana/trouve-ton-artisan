# 🛠️ Trouve Ton Artisan - Auvergne-Rhône-Alpes

Application web permettant aux particuliers de trouver des artisans dans la région Auvergne-Rhône-Alpes, avec un système de recherche, de filtrage par catégorie et un formulaire de contact. 

Projet réalisé dans le cadre de la formation Développeur Web.

## 📋 Prérequis

Pour faire fonctionner ce projet localement, vous devez avoir installé :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- Un serveur local pour la base de données MySQL (comme XAMPP, WAMP ou MAMP)

## 🚀 Installation et Configuration

**1. Cloner le dépôt**
\`\`\`bash
git clone [INSERER_TON_LIEN_GITHUB_ICI]
\`\`\`

**2. Configuration de la base de données**
- Ouvrez phpMyAdmin (via XAMPP/WAMP).
- Créez une nouvelle base de données nommée `trouve_ton_artisan`.
- Importez le fichier `creation_bdd.sql` (fourni dans le dossier) pour générer les tables et le jeu d'essai.

**3. Lancement du Backend (API)**
Ouvrez un terminal dans le dossier contenant le serveur (backend) :
\`\`\`bash
npm install
npm start
\`\`\`
*(Le serveur se lancera sur le port 5000).*

**4. Lancement du Frontend (React)**
Ouvrez un second terminal dans le dossier frontend :
\`\`\`bash
npm install
npm start
\`\`\`
*(L'application s'ouvrira automatiquement sur http://localhost:3000).*

## 🔒 Sécurité mise en place
- Protection des requêtes API via une politique **CORS** stricte.
- Protection contre les injections SQL grâce aux **requêtes préparées**.
- Masquage des identifiants de base de données via un fichier **.env**.

## 💻 Technologies utilisées
- **Frontend :** React.js, React Router, React Helmet Async
- **Backend :** Node.js, Express, MySQL2
- **Design :** CSS natif (Responsive Design)