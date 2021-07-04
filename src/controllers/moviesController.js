let db = require('../database/models');

let moviesController = {
    list: (req,res) => {
        db.movies.findAll()
        .then(movies => {
            res.render('./movies/list', {
                title: 'Listado de Películas',
                movies
            });
        })
        .catch(err => {
            res.send(err)
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
            res.send(err)
        });
    },

    newFirst: (req,res) => {
        db.movies.findAll({
            order: [
                ['releaseDate', 'DESC']
            ]
        })
        .then(movies => {
            res.render('./movies/new-first', {
                title: 'Películas ordenas por fecha',
                movies
            })
        })
        .catch(err => {
            res.send(err)
        });
    },
}

module.exports = moviesController;