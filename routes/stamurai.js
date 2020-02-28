
var express = require('express');
var router = express.Router();


var word_cntrl = require('../controllers/word_cntrl');


router.get('/get4', word_cntrl.getCashback4);
router.post('/get5', word_cntrl.getCashback5);

module.exports = router ;
