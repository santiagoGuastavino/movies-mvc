let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.show);
router.get('/newest', moviesController.newest);
router.get('/recommended', moviesController.recommended);

module.exports = router;