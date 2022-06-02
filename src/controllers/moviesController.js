const db = require('../database/models')
const { validationResult } = require('express-validator')

const moviesController = {
  list: (req, res) => {
    db.Movie.findAll()
      .then(movies => {
        res.render('./movies/index', {
          title: 'Listado de Películas',
          movies
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  show: (req, res) => {
    db.Movie.findByPk(req.params.id, {
      include: ['genre', 'actors']
    })
      .then(movie => {
        res.render('./movies/detail', {
          title: movie.title,
          movie
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  newest: (req, res) => {
    db.Movie.findAll({
      order: [
        ['releaseDate', 'DESC']
      ],
      limit: 5
    })
      .then(movies => {
        res.render('./movies/newest', {
          title: 'Películas más nuevas',
          movies
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  recommended: (req, res) => {
    db.Movie.findAll({
      order: [
        ['rating', 'DESC']
      ],
      limit: 5
    })
      .then(movies => {
        res.render('./movies/recommended', {
          title: 'Peliculas recomendadas',
          movies
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  create: (req, res) => {
    db.Genre.findAll()
      .then(genres => {
        res.render('./movies/create', {
          title: 'Agregar película',
          genres
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  store: (req, res) => {
    const validations = validationResult(req)
    const oldData = req.body
    if (validations.errors.length > 0) {
      return res.render('./movies/create', {
        title: 'Agregar película',
        oldData,
        errors: validations.mapped()
      })
    } else {
      return db.Movie.create({
        title: req.body.title,
        rating: parseInt(req.body.rating),
        awards: parseInt(req.body.awards),
        releaseDate: req.body.releaseDate,
        length: parseInt(req.body.length),
        genreId: req.body.genre
      })
        .then(() => {
          res.redirect('/movies')
        })
        .catch(err => {
          res.send(err)
        })
    };
  },

  edit: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then(movie => {
        res.render('./movies/edit', {
          title: 'Editar' + ' ' + movie.title,
          movie
        })
      })
      .catch(err => {
        res.send(err)
      })
  },

  update: (req, res) => {
    const validations = validationResult(req)
    const oldData = req.body
    const param = req.params.id
    if (validations.errors.length > 0) {
      return res.render('./movies/edit', {
        oldData,
        param,
        title: 'Editar' + ' ' + oldData.title,
        errors: validations.mapped()
      })
    } else {
      return db.Movie.update({
        title: req.body.title,
        rating: parseInt(req.body.rating),
        awards: parseInt(req.body.awards),
        length: parseInt(req.body.length)
      }, {
        where: {
          id: req.params.id
        }
      })
        .then(() => {
          res.redirect('/movies')
        })
        .catch(err => {
          res.send(err)
        })
    };
  },

  destroy: (req, res) => {
    db.Movie.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.redirect('/movies')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = moviesController
