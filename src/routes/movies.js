let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController');
let { check } = require('express-validator');

let validations = [
    check('title')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength({ min: 2, max: 500 }).withMessage('Debe tener un mínimo de 2 caracteres').bail(),
    check('rating')
        .notEmpty().withMessage('Completa este campo').bail()
        .isDecimal().withMessage('Debe ser un número').bail()
        .isDecimal({ min: 0, max: 10 }).withMessage('Debe ser entre 0 y 10').bail(),
    check('awards')
        .notEmpty().withMessage('Completa este campo').bail()
        .isInt().withMessage('Debe ser un número').bail()
        .isInt({ min: 0, max: 999 }).withMessage('Debe ser entre 0 y 999').bail(),
    check('length')
        .notEmpty().withMessage('Completa este campo').bail()
        .isInt().withMessage('Debe ser un número').bail()
        .isInt({ min: 2, max: 999 }).withMessage('Debe ser entre 2 y 999').bail(),
];

router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.show);
router.get('/newest', moviesController.newest);
router.get('/recommended', moviesController.recommended);
router.get('/add', moviesController.create);
router.post('/', validations, moviesController.store);
router.get('/edit/:id', moviesController.edit);
router.put('/update/:id', validations, moviesController.update);
router.delete('/delete/:id', moviesController.destroy);

module.exports = router;