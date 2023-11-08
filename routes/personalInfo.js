const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on personalInfo');
});

router.post('/', function(req, res){
    res.send('POST route on personalInfo');
});

router.put('/', function(req, res){
    res.send('PUT route on personalInfo');
});

module.exports = router;