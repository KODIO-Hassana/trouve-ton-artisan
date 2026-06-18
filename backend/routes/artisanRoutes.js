const express = require('express');
const router = express.Router();

// 1. On importe le cerveau (le contrôleur) que tu viens de créer
const artisanController = require('../controllers/artisanController');

// 2. On définit les routes (les adresses web)
// Quand on va sur l'adresse de base des artisans (/api/artisans), on lance la fonction getAllArtisans
router.get('/', artisanController.getAllArtisans);

// 2. NOUVELLE Route pour filtrer par catégorie directement via SQL
router.get('/categorie/:categorie', artisanController.getArtisansByCategory);

// Quand on ajoute un ID à la fin (/api/artisans/3), on lance la fonction getArtisanById
router.get('/:id', artisanController.getArtisanById);

// 3. On exporte ces routes pour que le serveur principal puisse les utiliser
module.exports = router;