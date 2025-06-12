const express = require('express');
const Message = require('../models/Message'); // Corrigé ici
const router = express.Router();

// POST - Sauvegarder un message
router.post('/', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - Récupérer tous les messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
