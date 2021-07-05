let db = require('../database/models')
let { validationResult } = require('express-validator');

let moviesController = {
    list: (req,res) => {
        db.movies.findAll()
        .then(movies => {
            res.render('./movies/index', {
                title: 'Listado de Películas',
                movies
            });
        })
        .catch(err => {
            res.send(err);
        });
    },
    
    show: (req,res) => {
        db.movies.findByPk(req.params.id)
        .then(movie => {
            res.render('./movies/detail', {
                title: movie.title,
                movie
            });
        })
        .catch(err => {
            res.send(err);
        });
    },

    newest: (req,res) => {
        db.movies.findAll({
            order: [
                ['releaseDate', 'DESC']
            ],
            limit: 5
        })
        .then(movies => {
            res.render('./movies/newest', {
                title: 'Películas más nuevas',
                movies
            });
        })
        .catch(err => {
            res.send(err);
        });
    },

    recommended: (req,res) => {
        db.movies.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
        .then(movies => {
            res.render('./movies/recommended', {
                title: 'Peliculas recomendadas',
                movies
            });
        })
        .catch(err => {
            res.send(err)
        });
    },

    create: (req,res) => {
        res.render('./movies/create', {
            title: 'Agregar película'
        });
    },

    store: (req,res) => {
        db.movies.create({
            title: req.body.title,
            rating: parseInt(req.body.rating),
            awards: parseInt(req.body.awards),
            releaseDate: req.body.releaseDate,
            length: parseInt(req.body.lengt)
        })
        .then(() => {
            res.redirect('/movies');
        })
        .catch(err => {
            res.send(err);
        });
    },
};

module.exports = moviesController;