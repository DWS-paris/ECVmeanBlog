/*
Import des composants de la route
*/
    // Class
    const express = require('express');
    const router = express.Router();
//

/*
Définition des routes
*/
// Page Home
    router.get('/*', (req, res) => { // => Capter l'appel sur la page d'accueil
        res.render('index'); // => Renvoyer la vue "index"
    });
//

/*
Export de la route
*/
    module.exports = router;
//