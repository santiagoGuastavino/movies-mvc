let db = require('../database/models');

let actorsController = {
    list: (req,res) => {
        db.actors.findAll()
        .then(actors => {
            res.render('./actors/index', {
                title: 'Listado de actores',
                actors
            });
        })
        .catch(err => {
            res.send(err);
        });
    },

    show: (req,res) => {
        db.actors.findByPk(req.params.id)
        .then(actor => {
            res.render('./actors/detail', {
                title: actor.firstName + ' ' + actor.lastName,
                actor
            });
        })
        .catch(err => {
            res.send(err);
        });
    },
};

module.exports = actorsController;