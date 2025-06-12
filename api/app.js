require('dotenv').config();
const mongoose = require('mongoose');

// Configuration améliorée de la connexion
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connecté à MongoDB');
  } catch (err) {
    console.error('❌ Erreur de connexion DB:', err.message);
    process.exit(1);
  }
};

const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);

// Appelez la fonction de connexion
connectDB();
