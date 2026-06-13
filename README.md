# 🛠️ Trouve Ton Artisan

**🌐 [Lien vers le site en ligne](INSERER_LE_LIEN_ICI_UNE_FOIS_DEPLOYE)**

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
* Le script de création de la base de données (creation.sql).
* Le script d'alimentation de la base de données (alimentation.sql).

## 🚀 Prérequis
Pour exécuter ce projet localement sur votre machine, vous devez avoir installé :
* Node.js (incluant le gestionnaire de paquets npm).
* Un serveur de base de données MySQL (par exemple via XAMPP ou WAMP).

---

## ⚙️ Instructions d'installation et de lancement

### Étape 1 : Configuration de la Base de données (MySQL)
1. Lancez votre serveur MySQL via votre environnement local (XAMPP, WAMP, etc.).
2. Ouvrez votre outil d'administration de base de données (ex: phpMyAdmin).
3. Exécutez le script SQL fourni à la racine du projet nommé creation.sql pour générer la structure de la base de données.
4. Exécutez ensuite le script alimentation.sql pour insérer le jeu d'essai des artisans.

### Étape 2 : Lancement de l'API (Backend)
Le backend sert d'intermédiaire entre la base de données et l'interface utilisateur.

1. Ouvrez un terminal et naviguez dans le dossier contenant le backend :
    cd chemin/vers/le/dossier/backend

2. Installez les dépendances requises pour le serveur :
    npm install

3. (Optionnel) Vérifiez et adaptez les identifiants de connexion MySQL dans le fichier de configuration de l'API si vos identifiants locaux diffèrent des standards.

4. Lancez le serveur Express :
    npm start
(L'API sera alors accessible sur le port 5000.)

### Étape 3 : Lancement de l'application React (Frontend)
Une fois la base de données et le backend actifs, vous pouvez lancer l'interface utilisateur.

1. Ouvrez un nouveau terminal (sans fermer celui du backend) et naviguez dans le dossier du frontend :
    cd chemin/vers/le/dossier/frontend

2. Installez toutes les dépendances React (cette étape recrée le dossier node_modules indispensable au fonctionnement) :
    npm install

3. Lancez l'application web :
    npm start
(L'application s'ouvrira automatiquement dans votre navigateur par défaut à l'adresse http://localhost:3000).

---

## 👤 Auteur
* **Hassana** - Projet d'évaluation - Titre Professionnel Développeur Web (CEF)