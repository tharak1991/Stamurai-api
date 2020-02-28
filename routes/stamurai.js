
var express = require('express');
var router = express.Router();


var word_cntrl = require('../controllers/word_cntrl');

router.get('/get', word_cntrl.getCashback);
router.post('/add', word_cntrl.addWord);

router.get('/get2', word_cntrl.getCashback2);

module.exports = router ;
