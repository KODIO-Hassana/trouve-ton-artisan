require('dotenv').config();
const express = require('express');
const cors = require('cors');

// 1. Initialisation de l'application
const app = express();

// 2. Middlewares : Sécurité CORS stricte
const corsOptions = {
    origin: ['https://trouve-ton-artisan-phi.vercel.app', 'http://localhost:3000', 'http://localhost:5173'], // Seule cette adresse a le droit de lire les données
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Permet de lire les données envoyées en JSON
app.use(express.json());

// 3. Importation de nos routes structurées
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes');

// 4. Utilisation des routes
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

// Route de test basique
app.get('/', (req, res) => {
    res.send("Bienvenue sur l'API restructurée et sécurisée de Trouve ton artisan !");
});

// 5. Démarrage du serveur (process.env.PORT est indispensable pour Render en ligne)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Serveur MVC démarré avec succès sur le port ${PORT}`);
});