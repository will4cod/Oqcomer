const comida = require('../controller/comida');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', comida.menuPeriodo);
router.get('/:periodo', comida.menuPeriodo);

module.exports = router;