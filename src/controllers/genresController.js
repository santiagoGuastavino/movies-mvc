let db = require('../database/models');

let genresController = {
    list: (req,res) => {
        db.genres.findAll()
        .then(genres => {
            res.render('./genres/list', {
                title: 'Listado de géneros',
                genres
            })
        })
        .catch(err => {
            res.send(err)
        });
    },

    show: (req,res) => {
        db.genres.findByPk(req.params.id)
        .then(genre => {
            res.render('./genres/detail', {
                title: genre.title,
                genre
            })
        })
        .catch(err => {
            res.send(err)
        });
    },
};

module.exports = genresController;