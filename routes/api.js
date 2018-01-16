/*
Import des composants de la route
*/
    // Class
    var express = require('express');
    var router = express.Router();
    const bodyParser = require('body-parser');

    // Module
    const MongoosePost = require('../models/post.mongoose');

    // Middleware
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());
// 

/*
Définition des routes
*/
    router.post('/post',  (req, res) => {
        // Utiliser le module MongoosePost pour ajouter une entrée dans le BDD
        MongoosePost.create({
            title: req.body.title,
            content: req.body.content
        },
        
        // Fonction de CB
        (err, data) => {
            // Error
            if(err) return res.send('Problème de requête').status(500);

            // Success
            res.send(data).status(200)
        });
    });
// 

/*
Export du module des routes
*/
    module.exports = router;
//