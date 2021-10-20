var express = require('express');
var router = express.Router();

var Teetime = require('../models/teetime')

router.get('/teetimes', function(req, res, next) {
    Teetime.find((err, teetime) => {
        if (err){
            console.log(err)
            res.end(err)
        }
        else{
            res.render('teetimes/teetimes', {
                teetimes : teetime
            })
        }
    })
});

module.exports = router;