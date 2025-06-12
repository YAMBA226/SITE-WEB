const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Création de l'utilisateur
    const user = await User.create({ 
      email, 
      password: hashedPassword 
    });

    res.status(201).json({ id: user._id, email: user.email });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Recherche de l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    // Génération du JWT
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.json({ token, userId: user._id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;