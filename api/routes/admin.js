const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const authenticateJWT = require('../middleware/auth');

// Récupère tous les messages (protégé)
router.get('/messages', authenticateJWT, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Supprime un message (protégé)
router.delete('/messages/:id', authenticateJWT, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
