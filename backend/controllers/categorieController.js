const db = require('../config/db');

exports.getAllCategories = (req, res) => {
    const sql = 'SELECT id_categorie AS id, nom_categorie AS nom FROM categorie';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ Erreur lors de la récupération des catégories :", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }
        res.json(results);
    });
};