import express from "express";

const router = express/Router();

router.get('/', function(req, res){
    res.send('GET route on personalInfo')
});

router.post('/', function(req, res){
    res.send('POST route on personalInfo')
});

export default router;