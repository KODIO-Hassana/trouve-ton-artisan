# 🛠️ Trouve Ton Artisan

**🌐 [Accéder au site en ligne](https://trouve-ton-artisan-phi.vercel.app)**

> ⚠️ **Note importante pour l'évaluation (Latence au 1er chargement)**
> L'API de ce projet est hébergée sur la version gratuite de Render. Si le service n'a pas été sollicité depuis plus de 15 minutes, il se met en veille. Lors de votre première visite, **un délai de 30 à 60 secondes peut être nécessaire** pour le "réveil" du serveur et l'affichage des artisans. Les navigations suivantes seront instantanées.

## 📝 Description du projet
"Trouve Ton Artisan" est une application web développée dans le cadre de la formation en développement web du Centre Européen de Formation (CEF). 

L'objectif de cette plateforme est de permettre aux utilisateurs de rechercher, découvrir et contacter facilement des artisans qualifiés (Bâtiment, Services, Fabrication, Alimentation) de la région Auvergne-Rhône-Alpes. L'interface frontend et l'API backend ont été conçues pour interagir de manière dynamique avec une base de données, tout en respectant scrupuleusement les maquettes Figma fournies.

## 💻 Technologies utilisées
* **Frontend :** React.js, React Router DOM, Bootstrap, React Helmet Async
* **Backend :** Node.js, Express.js
* **Base de données :** MySQL

## 📁 Contenu de ce dépôt
Conformément aux attentes de l'évaluation, ce dépôt contient :
* Le code source du projet (Frontend React et Backend Express).
* Le script de création de la base de données (`creation.sql`).
* Le script d'alimentation de la base de données (`alimentation.sql`).

## 🚀 Déploiement
Le projet est actuellement hébergé et sécurisé (politique CORS stricte) en production sur les plateformes suivantes :
* **Frontend :** [Vercel](https://vercel.com)
* **Backend :** [Render](https://render.com)

## ⚙️ Instructions d'installation et de lancement (Local)

### Étape 1 : Configuration de la Base de données (MySQL)
1. Lancez votre serveur MySQL via votre environnement local (XAMPP, WAMP, etc.).
2. Ouvrez votre outil d'administration de base de données (ex: phpMyAdmin).
3. Exécutez le script SQL fourni à la racine du projet nommé `creation.sql` pour générer la structure de la base de données.
4. Exécutez ensuite le script `alimentation.sql` pour insérer le jeu d'essai des artisans.

### Étape 2 : Lancement de l'API (Backend)
1. Ouvrez un terminal et naviguez dans le dossier contenant le backend : `cd chemin/vers/le/dossier/backend`.
2. Installez les dépendances requises : `npm install`.
3. Lancez le serveur Express : `npm start`.
(L'API sera alors accessible sur le port 5000).

### Étape 3 : Lancement de l'application React (Frontend)
1. Ouvrez un nouveau terminal et naviguez dans le dossier du frontend : `cd chemin/vers/le/dossier/frontend`.
2. Installez les dépendances React : `npm install`.
3. Lancez l'application web : `npm start`.
(L'application s'ouvrira automatiquement à l'adresse `http://localhost:3000`).

## 👤 Auteur
* **Hassana** - Projet d'évaluation - Titre Professionnel Développeur Web (CEF)