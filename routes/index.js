const express = require("express");
const router = express.Router();
var shajs = require('sha.js')
router.post('/', (req, res, next) => {
    const data = req.body;
    console.log(req.body);
    if (!data) {
        res.status(400).send({ status: 'failed' });
        return;
    }
    if (data.username === '' || data.password === '') {
        res.status(400).send({ status: 'failed' });
        return;
    }
    else {
        data.password = shajs('sha256').update(data.password).digest('hex')
        res.status(200).send(data);
    }

});

module.exports = router;
