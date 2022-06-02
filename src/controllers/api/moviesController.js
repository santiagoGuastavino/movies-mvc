const db = require('../../database/models')

const moviesController = {
  all: async (req, res, next) => {
    const allMovies = await db.Movie.findAll()
    try {
      res.status(200).json(allMovies)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = moviesController
