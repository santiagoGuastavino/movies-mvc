let express = require('express');
let router = express.Router();
let genresController = require('../controllers/genresController');

router.get('/', genresController.list);
router.get('/detail/:id', genresController.show);

module.exports = router;