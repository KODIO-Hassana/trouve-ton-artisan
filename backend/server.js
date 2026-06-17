require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Importation de tes routes (vérifie que le dossier s'appelle bien routes en minuscule sur GitHub)
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes'); // Si tu as bien créé ce fichier pour l'e-mail

const app = express();

const corsOptions = {
    origin: 'https://trouve-ton-artisan-phi.vercel.app', 
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// TRÈS IMPORTANT : Ne met pas de "//" devant cette ligne, sinon les e-mails ne marcheront pas !
app.use(express.json());

// Utilisation de tes routes
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

// TRÈS IMPORTANT : La correction pour Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré avec succès sur le port ${PORT}`);
});