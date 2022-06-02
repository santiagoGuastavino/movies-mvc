const router = require('express').Router()
const { all } = require('../../controllers/api/moviesController')

router.get('/', all)

module.exports = router
