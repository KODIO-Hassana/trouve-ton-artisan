// 1. On importe la connexion à la base de données qu'on a créée à l'étape 1
const db = require('../config/db');

// 2. Fonction pour récupérer TOUS les artisans
exports.getAllArtisans = (req, res) => {
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
            return res.status(500).json({ message: "Erreur serveur" });
        }
        res.json(results);
    });
};

// 3. Fonction pour récupérer UN SEUL artisan par son ID
exports.getArtisanById = (req, res) => {
    const artisanId = req.params.id;
    
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

    db.query(sql, [artisanId], (err, results) => {
        if (err) {
            console.error("❌ Erreur lors de la récupération de l'artisan :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        } 
        if (results.length === 0) {
            return res.status(404).json({ message: "Artisan non trouvé" });
        } 
        // On renvoie le premier (et unique) résultat
        res.json(results[0]);
    });
};