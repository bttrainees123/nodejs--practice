const express  = require('express');
const router= express.Router();

router.get('/',function(req,res){
    res.send("Vansh Is Logged into JioStar");

})
module.exports = router;

