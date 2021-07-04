let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.show);

module.exports = router;