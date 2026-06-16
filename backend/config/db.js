const mysql = require('mysql2');
require('dotenv').config();

// Configuration de la connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Test de la connexion MySQL
db.connect((err) => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL :', err.message);
    } else {
        console.log('✅ Connecté avec succès à la base de données MySQL !');
    }
});

// On exporte la connexion pour pouvoir l'utiliser dans nos autres fichiers
module.exports = db;