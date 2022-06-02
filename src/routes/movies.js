const router = require('express').Router()
const moviesController = require('../controllers/moviesController')
const validations = require('../middlewares/movieValidations')

router.get('/', moviesController.list)
router.get('/detail/:id', moviesController.show)
router.get('/newest', moviesController.newest)
router.get('/recommended', moviesController.recommended)
router.get('/add', moviesController.create)
router.post('/', validations, moviesController.store)
router.get('/edit/:id', moviesController.edit)
router.put('/update/:id', validations, moviesController.update)
router.delete('/delete/:id', moviesController.destroy)

module.exports = router
