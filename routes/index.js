const express = require('express');
const router = express.Router();
const upload = require("../config/upload");
const {check,validationResult,body} = require("express-validator")


const bodyController = require("../controller/bodyController");
const userController = require('../controller/usersConstroller');
const setorController = require('../controller/setorController');
const produtoController = require('../controller/produtoController');


router.get('/', bodyController.home);
router.get('/produtos', bodyController.produtos);
router.get('/infoProdutos', bodyController.infoProdutos);
router.get('/faleConosco', bodyController.faleConosco);
router.get('/cadastro', bodyController.cadastro);
router.get('/login', bodyController.login);
router.get('/cliente', bodyController.infoClient);
router.get('/pageAdmin', bodyController.pageAdmin);


router.post('/createUser', [
    check("email").isEmail().withMessage("E-mail obrigatório"),
    check("password").isLength({min:6}).withMessage("Password como minimo de 6 digitos"),
    ], userController.createUser);
router.post('/validarLogin', userController.validateLogin);
router.get('/logout', userController.logout);

router.post('/createSetor', setorController.createSetor);
router.post('/activeSetor', setorController.activeSetor);
router.post('/createProduto', upload.any() ,produtoController.createProduto);
router.post('/activeProduct', produtoController.activeProduct);




module.exports = router;
