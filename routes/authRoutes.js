const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Page d'inscription
router.get('/signup', (req, res) => res.render('signup.twig'));
router.post('/signup', authController.signup);

// Page de connexion
router.get('/', (req, res) => res.render('login.twig'));
router.post('/login', authController.login);

// Page des utilisateurs (admin)
router.get('/users', authController.getUsers);

// Page d'accueil après connexion pour les utilisateurs
router.get('/welcome', authController.welcome);

module.exports = router;

