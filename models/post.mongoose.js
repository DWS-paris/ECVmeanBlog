/*
Import du composant Mongoose
*/
    const mongoose = require('mongoose');  
// 

/*
Création du Schema
*/
    const PostSchema = new mongoose.Schema({
        title: String,
        content: String
    })
//

/*
Création du model
*/
    mongoose.model( 'Post', PostSchema );
//

/*
Exporter le module
*/
    module.exports = mongoose.model('Post');
// 