require('dotenv').config();

// 1. Importation des outils nécessaires
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// 2. Initialisation de l'application
const app = express();

// Autorise tout le monde (y compris Vercel) à lire les données
app.use(cors());

// Permet de lire les données envoyées en JSON
app.use(express.json());

// 3. Configuration de la connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// 4. Test de la connexion MySQL
db.connect((err) => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL :', err.message);
    } else {
        console.log('✅ Connecté avec succès à la base de données MySQL !');
    }
});

// 5. Définition d'une route de test
app.get('/', (req, res) => {
    res.send("Bienvenue sur l'API de Trouve ton artisan ! Le serveur fonctionne parfaitement.");
});

// --- NOUVELLE ROUTE : Récupérer tous les artisans ---
app.get('/api/artisans', (req, res) => {
    // Cette requête SQL va chercher les artisans et fait le lien avec leur spécialité et catégorie
    const sql = `
        SELECT 
            a.id_artisan AS id, 
            a.nom_artisan AS nom, 
            s.nom_specialite AS metier, 
            c.nom_categorie AS categorie, 
            a.ville_artisan AS ville, 
            a.note_artisan AS note,
            a.description_artisan AS description,
            a.email_artisan AS email,
            a.site_web_artisan AS site,
            a.image AS image,
            a.is_top_artisan AS top
        FROM artisan a
        JOIN specialite s ON a.id_specialite = s.id_specialite
        JOIN categorie c ON s.id_categorie = c.id_categorie
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ Erreur lors de la récupération des artisans :", err);
            res.status(500).json({ message: "Erreur lors de la récupération des données" });
        } else {
            // Si tout va bien, on envoie le résultat sous forme de tableau JSON
            res.json(results);
        }
    });
});

// --- NOUVELLE ROUTE : Récupérer UN SEUL artisan grâce à son ID ---
app.get('/api/artisans/:id', (req, res) => {
    // On récupère l'ID envoyé dans l'URL
    const artisanId = req.params.id;
    
    // On utilise la clause "WHERE" pour filtrer dans MySQL
    const sql = `
        SELECT 
            a.id_artisan AS id, 
            a.nom_artisan AS nom, 
            s.nom_specialite AS metier, 
            c.nom_categorie AS categorie, 
            a.ville_artisan AS ville, 
            a.note_artisan AS note,
            a.description_artisan AS description,
            a.email_artisan AS email,
            a.site_web_artisan AS site,
            a.image AS image,
            a.is_top_artisan AS top
        FROM artisan a
        JOIN specialite s ON a.id_specialite = s.id_specialite
        JOIN categorie c ON s.id_categorie = c.id_categorie
        WHERE a.id_artisan = ?
    `;

    // Le "?" dans la requête est remplacé par [artisanId] de manière sécurisée
    db.query(sql, [artisanId], (err, results) => {
        if (err) {
            console.error("❌ Erreur lors de la récupération de l'artisan :", err);
            res.status(500).json({ message: "Erreur serveur" });
        } else if (results.length === 0) {
            res.status(404).json({ message: "Artisan non trouvé" });
        } else {
            // On renvoie uniquement le premier élément du tableau (qui est le seul résultat)
            res.json(results[0]);
        }
    });
});

// 6. Démarrage du serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré avec succès sur http://localhost:${PORT}`);
});