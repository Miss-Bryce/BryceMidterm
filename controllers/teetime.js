const express = require('express');
const router = express.Router();

const Teetime = require('../models/teetime')

router.get('/', function(req, res, next) {
    Teetime.find((err, teetime) => {
        if (err){
            console.log(err)
            res.end(err)
        }
        else{
            res.render('teetimes/teetimes', {
                teetime : teetime,
                title: 'Tee Times'
            })
        }
    })
});

router.get('/create', (req,res) => {
    res.render('teetimes/create', {
        title: 'Add New Golfer'
    })
})

router.post('/create', (req,res) => {

})

module.exports = router;