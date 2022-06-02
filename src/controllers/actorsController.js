const db = require('../database/models')

const actorsController = {
  list: (req, res) => {
    db.Actor.findAll()
      .then(actors => {
        res.render('./actors/index', {
          title: 'Listado de actores',
          actors
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  show: (req, res) => {
    db.Actor.findByPk(req.params.id, {
      include: ['movies']
    })
      .then(actor => {
        res.render('./actors/detail', {
          title: actor.firstName + ' ' + actor.lastName,
          actor
        })
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = actorsController
