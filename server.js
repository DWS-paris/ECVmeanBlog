/*
Import des composants du serveur
*/
  // Class
  const express = require('express');
  const router = express.Router();
  const mongoose = require('mongoose');
  const path = require('path');
  const ejs = require('ejs');

  // Modules
  const frontRoute = require('./routes/front');
  const apiRoute = require('./routes/api');
//


/*
Configuration du serveur
*/
  // Connexion à la BDD avec Mongoose
  mongoose.connect(`mongodb://127.0.0.1:27017/blog`, { useMongoClient: true });

  // Serveur
  const app = express();
  const port = process.env.PORT || 3000;

  // Dossier static
  app.set('views', __dirname + '/www');
  app.use(express.static(path.join(__dirname, 'www')));

  // Moteur de rendu
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  // Routes
  app.use('/', frontRoute);
  app.use('/api', apiRoute);
// 


/*
Ecouter le serveur 
*/
  const server = app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}` ) );
//