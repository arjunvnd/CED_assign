var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    let id = parseInt(req.body.id);
    console.log(typeof id)

    TODO.methods.completeTask(id).send({from:coinbase,gas:6000000})
    res.end();
});

module.exports = router;
