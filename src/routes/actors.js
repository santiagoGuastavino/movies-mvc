let express = require('express');
let router = express.Router();
let actorsController = require('../controllers/actorsController');

router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.show);

module.exports = router;