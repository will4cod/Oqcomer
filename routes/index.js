const comida = require('../controller/comida');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', comida.mensagem);

module.exports = router;
