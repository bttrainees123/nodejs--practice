const express = require ('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send("Vansh you Are logout");
})

module.exports = router;

