const { check } = require('express-validator')

const validations = [
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
    .isInt({ min: 2, max: 999 }).withMessage('Debe ser entre 2 y 999').bail()
]

module.exports = validations
