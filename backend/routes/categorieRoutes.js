const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');

// Route pour lire la liste des catégories
router.get('/', categorieController.getAllCategories);

module.exports = router;