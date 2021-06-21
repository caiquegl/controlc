const express = require('express');
const router = express.Router();
const upload = require("../config/upload");
const {check,validationResult,body} = require("express-validator")


const bodyController = require("../controller/bodyController");


router.get('/', bodyController.home);
router.get('/produtos', bodyController.produtos);
router.get('/infoProdutos', bodyController.infoProdutos);
router.get('/faleConosco', bodyController.faleConosco);


module.exports = router;
