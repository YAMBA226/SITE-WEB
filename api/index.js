require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // <-- Manquait ici

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes d'authentification
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Middleware d'authentification JWT (à utiliser avec des routes protégées)
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Accès non autorisé' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; 
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalide' });
  }
};

app.get('/api/profile', authenticateJWT, (req, res) => {
  res.json({ message: `Bienvenue utilisateur ${req.userId}` });
});

// Connexion à MongoDB
mongoose.connect(
  process.env.DB_URI ||'mongodb://inovex:inovex@147.93.72.193:27017/inovexdb?authSource=admin'
)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error('❌ Erreur DB:', err));

// Route tests
app.get('/api/ping', (req, res) => {
  res.json({ status: 'active', timestamp: new Date() });
});

// Lancement du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server ready on port ${PORT}`);
});
