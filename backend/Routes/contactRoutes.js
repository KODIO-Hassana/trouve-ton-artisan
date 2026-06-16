const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// On utilise .post() car on reçoit des données depuis un formulaire, contrairement à .get() qui sert juste à lire
router.post('/', contactController.sendEmail);

module.exports = router;